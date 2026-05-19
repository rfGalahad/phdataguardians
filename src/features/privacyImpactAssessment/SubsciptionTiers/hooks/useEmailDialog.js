import { useReducer } from 'react';

import { supabase } from '@/services/supabaseClient';

import { useCheckout } from './useCheckout';


const INITIAL_STATE = { 
  email: '', 
  error: '', 
  loading: false, 
  googleLoading: false 
};

const ACTIONS = {
  SET_EMAIL: 'SET_EMAIL',
  SET_ERROR: 'SET_ERROR',
  SET_LOADING: 'SET_LOADING',
  SET_GOOGLE_LOADING: 'SET_GOOGLE_LOADING',
  RESET: 'RESET',
};

const emailDialogReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_EMAIL:    
      return { ...state, email: action.value, error: '' };
    case ACTIONS.SET_ERROR:    
      return { ...state, error: action.value };
    case ACTIONS.SET_LOADING:  
      return { ...state, loading: action.value };
    case ACTIONS.SET_GOOGLE_LOADING: 
      return { ...state, googleLoading: action.value };
    case ACTIONS.RESET:        
      return INITIAL_STATE;
    default:             
      return state;
  }
};

const validate = (value) => {
  if (!value.trim()) return 'Email address is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address.';
  return '';
};

export const useEmailDialog = ({ tierName, tierPrice } = {}) => {
  
  const [state, dispatch] = useReducer(emailDialogReducer, INITIAL_STATE);

  const { initiateCheckout } = useCheckout();

  const { 
    email, 
    error, 
    loading, 
    googleLoading 
  } = state;

  const handleChange = (e) => dispatch({ 
    type: ACTIONS.SET_EMAIL, 
    value: e.target.value 
  });

  const handleProceed = async () => {

    const err = validate(email);

    if (err) { 
      dispatch({ type: ACTIONS.SET_ERROR, value: err }); 
      return; 
    }

    dispatch({ type: ACTIONS.SET_LOADING, value: true });

    sessionStorage.setItem('checkout_email', email);
    sessionStorage.setItem('checkout_price', tierPrice);
    sessionStorage.setItem('checkout_name', tierName);

    try {
      await initiateCheckout({ 
        email, 
        price: tierPrice, 
        name: tierName 
      });
    } finally {
      dispatch({ type: ACTIONS.SET_LOADING, value: false });
    }
  };

  const handleGoogleLogin = async () => {
    dispatch({ type: ACTIONS.SET_GOOGLE_LOADING, value: true });

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}?price=${tierPrice}&name=${encodeURIComponent(tierName)}`,
        queryParams: { access_type: 'online' },
      },
    });

    if (error) {
      dispatch({ type: ACTIONS.SET_ERROR, value: error.message });
      dispatch({ type: ACTIONS.SET_GOOGLE_LOADING, value: false });
    }
  };

  const handleClose = () => dispatch({ type: 'RESET' });

  return {
    email,
    error,
    loading,
    googleLoading,
    isAnyLoading: loading || googleLoading,
    handleChange,
    handleProceed, 
    handleGoogleLogin,
    handleClose,
  };
};