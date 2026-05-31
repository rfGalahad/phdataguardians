import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { generateEmailHtml } from "./emailTemplate.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const PAYMONGO_WEBHOOK_SECRET = Deno.env.get("PAYMONGO_WEBHOOK_SECRET")!;

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

async function verifySignature(req: Request, rawBody: string): Promise<boolean> {
  const sigHeader = req.headers.get("Paymongo-Signature");
  if (!sigHeader) return false;

  const parts: Record<string, string> = {};
  for (const part of sigHeader.split(",")) {
    const idx = part.indexOf("=");
    if (idx !== -1) {
      parts[part.slice(0, idx)] = part.slice(idx + 1);
    }
  }

  const timestamp = parts["t"];
  const signature = parts["li"] || parts["te"];

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

async function sendEmail({ email, planName, actionLink }: {
  email: string;
  planName: string;
  actionLink: string;
}) {

  const LOGO_URL = 'https://res.cloudinary.com/diuruuyas/image/upload/v1779172364/logo-pdg-1_gojiba.png';

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Philippine Data Guardians <members@phdataguardians.org>",
      reply_to: "members@phdataguardians.org",
      to: email, 
      subject: `Welcome! Your ${planName} account is ready`,
      html: generateEmailHtml(planName, actionLink, LOGO_URL),
    }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(`Failed to send email: ${JSON.stringify(error)}`);
  }
}

serve(async (req) => {

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

    // 1. Create user without password
    const { error: createError } = await supabaseAdmin.auth.admin.createUser({
      email,
      email_confirm: true,
    });

    if (createError) {
      if (createError.message.includes("already been registered") || createError.message.includes("already registered")) {
        console.log("User already exists, skipping.");
        return new Response(JSON.stringify({ received: true }), { status: 200 });
      }
      throw createError;
    }

    // 2. Generate password setup link
    const { data: linkData, error: linkError } = await supabaseAdmin.auth.admin.generateLink({
      type: "recovery",
      email,
    });

    if (linkError) throw linkError;

    const actionLink = linkData.properties.action_link;

    // 3. Send email with the link
    await sendEmail({ email, planName, actionLink });
    console.log("Email sent to:", email);

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error("CAUGHT ERROR:", err.message);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
});