import { toNumber } from '@/utils/number';

// Extract the anon key from the already-initialized client
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

export const useCheckout = () => {

  const initiateCheckout = async ({ price, name, email }) => { 
    try {
      const response = await fetch(
        `${supabaseUrl}/functions/v1/create-checkout`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${anonKey}`,
          },
          body: JSON.stringify({
            amount: Math.round(toNumber(price) * 100),
            description: `${name} Plan — Monthly Subscription`,
            email,
            successUrl: `${window.location.origin}/payment/success`,
            cancelUrl: `${window.location.origin}/payment/cancelled`,
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Checkout failed');
      window.location.href = data.checkoutUrl;
    } catch (err) {
      console.error(err);
    } 
  };

  return { initiateCheckout };
};