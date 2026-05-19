import { supabase } from '@/services/supabaseClient';
import { toNumber } from '@/utils/number';

export const useCheckout = () => {

  const initiateCheckout = async ({ price, name, email }) => { 
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        
        body: {
          amount: Math.round(toNumber(price) * 100),          
          description: `${name} Plan — Monthly Subscription`,
          email,                       
          successUrl: `${window.location.origin}/payment/success`,
          cancelUrl: `${window.location.origin}/payment/cancelled`,
        },
      });     
      if (error) throw error;
      window.location.href = data.checkoutUrl;
    } catch (err) {
      console.error(err);
    } 
  };

  return { initiateCheckout };
};