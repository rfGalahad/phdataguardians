import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const PAYMONGO_WEBHOOK_SECRET = Deno.env.get("PAYMONGO_WEBHOOK_SECRET")!;

async function verifySignature(req: Request, rawBody: string): Promise<boolean> {
  const sigHeader = req.headers.get("Paymongo-Signature");
  if (!sigHeader) return false;

  // Header format: "t=<timestamp>,te=<test_sig>,li=<live_sig>"
  const parts = Object.fromEntries(
    sigHeader.split(",").map((p) => p.split("=")),
  );

  const timestamp = parts["t"];
  const signature = parts["li"] ?? parts["te"]; // use "li" in prod, "te" in test

  if (!timestamp || !signature) return false;

  const payload = `${timestamp}.${rawBody}`;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(PAYMONGO_WEBHOOK_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const mac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  const expected = Array.from(new Uint8Array(mac))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return expected === signature;
}

serve(async (req) => {
  
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

  try {
    const rawBody = await req.text();
    const isValid = await verifySignature(req, rawBody);

    if (!isValid) {
      console.warn("Invalid PayMongo signature");
      return new Response(JSON.stringify({ error: "Invalid signature" }), { status: 401 });
    }

    const body = JSON.parse(rawBody);
    const event = body.data;

    if (event.attributes.type !== "checkout_session.payment.paid") {
      return new Response(JSON.stringify({ received: true }), { status: 200 });
    }

    const attributes = event.attributes.data.attributes;
    const email = attributes.billing.email;
    const planName = attributes.description;

    const tempPassword = generatePassword();

    const { data: user, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password: tempPassword,
      email_confirm: true,
    });

    if (error && error.message !== "User already registered") {
      throw error;
    }

    await sendEmail({ email, tempPassword, planName });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
});