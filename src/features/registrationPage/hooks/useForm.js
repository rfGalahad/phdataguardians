import { useState, useEffect } from "react";
import { useFormContext } from "../../../context/FormContext";



export const useForm = ( handleNext, requiredFields, sectionKey ) => {

  const { formData, updateFormData } = useFormContext();

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    requiredFields.forEach(field => {
      // Basic check for empty string or null/undefined after trimming
      if (!values[field] || String(values[field]).trim() === '') {
        newErrors[field] = 'This field is required.';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }

  const handleChange = (field) => (e, newValue) => {
    let value;
    
    if (newValue?.value !== undefined && newValue?.label !== undefined) {
      // Dropdown
      value = field == 'suffix' ? newValue.value : newValue.label; 
    } else if (e?.target?.value !== undefined) {
      //TextField
      if (field === 'contactNumber') {
        const digitOnlyValue = e.target.value.replace(/\D/g, '');
        value = digitOnlyValue.slice(0, 10);
      } else {
        value = e.target.value; 
      }
    } else {
      value = newValue; 
    }

    if (typeof value === 'string' && value.length > 50) {
      value = value.slice(0, 50);
    }
    
    if (errors[field]) {
      setErrors(prev => {
        const { [field]: _, ...rest } = prev;
        return rest;
      });
    }

    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (validateForm()) {
      updateFormData(sectionKey, values);
      handleNext();
    } else {
      return;
    }
  };

  useEffect(() => {
    const sectionData = formData?.[sectionKey];

    if (sectionData) {
      Object.keys(sectionData).forEach(key => {
        handleChange(key)({ target: { value: sectionData[key] } });
      });
    }
  }, [sectionKey]);



  return {
    values,
    errors,
    handleChange,
    handleSubmit
  }
}