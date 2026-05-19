import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const PAYMONGO_SECRET_KEY = Deno.env.get("PAYMONGO_SECRET_KEY")!;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  try {
    const { amount, description, successUrl, cancelUrl } = await req.json();

    const encoded = btoa(PAYMONGO_SECRET_KEY + ":");

    const response = await fetch("https://api.paymongo.com/v1/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${encoded}`,
      },
      body: JSON.stringify({
        data: {
          attributes: {
            billing: { email: "" }, // optional: pre-fill from user session
            send_email_receipt: true,
            show_description: true,
            show_line_items: true,
            description,
            line_items: [
              {
                currency: "PHP",
                amount,        // in centavos, e.g. 99900 = ₱999.00
                name: description,
                quantity: 1,
              },
            ],
            payment_method_types: [
              "card",
              "gcash",
              "grab_pay",
            ],
            success_url: successUrl,
            cancel_url: cancelUrl,
          },
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({ error: data }), {
        status: response.status,
        headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      });
    }

    const checkoutUrl = data.data.attributes.checkout_url;

    return new Response(JSON.stringify({ checkoutUrl }), {
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
    });
  }
});