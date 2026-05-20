import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SERVICE_ROLE_KEY")!,
);

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const PAYMONGO_WEBHOOK_SECRET = Deno.env.get("PAYMONGO_WEBHOOK_SECRET")!;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  }

  try {
    const body = await req.json();
    const event = body.data;

    // Only handle successful payments
    if (event.attributes.type !== "checkout_session.payment.paid") {
      return new Response(JSON.stringify({ received: true }), { status: 200 });
    }

    const attributes = event.attributes.data.attributes;
    const email = attributes.billing.email;
    const planName = attributes.description;

    // 1. Generate temp password
    const tempPassword = generatePassword();

    // 2. Create Supabase user
    const { data: user, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password: tempPassword,
      email_confirm: true,
    });

    if (error && error.message !== "User already registered") {
      throw error;
    }

    // 3. Send email with credentials
    await sendEmail({ email, tempPassword, planName });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
});

function generatePassword() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789@#$!";
  return Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

async function sendEmail({ email, tempPassword, planName }: { 
  email: string; 
  tempPassword: string; 
  planName: string; 
}) {
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "noreply@yourdomain.com",
      to: email,
      subject: "Your account is ready!",
      html: `
        <h2>Welcome! Your payment was successful 🎉</h2>
        <p>You're now subscribed to the <strong>${planName}</strong>.</p>
        <br/>
        <p>Here are your login credentials:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Temporary Password:</strong> <code>${tempPassword}</code></p>
        <br/>
        <p>Please change your password after your first login.</p>
        <p><a href="https://your-app.vercel.app/login">Login here</a></p>
      `,
    }),
  });
}