import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { supabase } from '../../services/supabaseClient';



export const useLogin = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const requiredFields = ["email", "password"];

  const validateForm = () => {

    const newErrors = {};
    let isValid = true;

    requiredFields.forEach((field) => {
      const value = values[field]?.trim();

      if (!value) {
        newErrors[field] = "This field is required.";
        isValid = false;
        return;
      }

      if (field === "email") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          newErrors[field] = "Enter a valid email address.";
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    // max 50 characters
    if (value.length > 50) return;

    setValues((prev) => ({ ...prev, [field]: value }));

    // clear error when editing
    if (errors[field]) {
      const clone = { ...errors };
      delete clone[field];
      setErrors(clone);
    }
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      const { email, password } = values;
      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) throw error;

      navigate("/admin/dashboard");
    } catch (error) {
      setErrors({ general: error.message || "Login failed" });
    } finally {
      setLoading(false);
    }
  };


  return {
    values,
    errors,
    loading,
    handleChange,
    handleLogin
  }
}