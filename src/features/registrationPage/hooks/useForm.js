import { useState, useEffect } from "react";
import { useFormContext } from "../../../context/FormContext";



export const useForm = ( handleNext, requiredFields, sectionKey ) => {

  const { formData, updateFormData } = useFormContext();

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  // VALIDATE FIELDS
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Required Fields
    requiredFields.forEach(field => {
      const value = values[field]?.toString().trim();

      if (!value) {
        newErrors[field] = 'This field is required.';
        isValid = false;
        return;
      }
    });

    // Email Address
    if (values.emailAddress) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailValue = values.emailAddress.toString().trim();

      if (!emailPattern.test(emailValue)) {
        newErrors.emailAddress = "Enter a valid email address.";
        isValid = false;
      }
    }

    // Contact Number
    if (values.contactNumber) {
      const digitOnlyValue = values.contactNumber.replace(/\D/g, '');
      
      if (digitOnlyValue.length !== 10) {
        newErrors.contactNumber = "Contact number must be 10 digits.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  }

  // HANDLE INPUT CHANGES (Textfields, Dropdown, etc.)
  const handleChange = (field) => (e, newValue) => {
    let value;
    
    if (newValue?.value !== undefined && newValue?.label !== undefined) {
      // Dropdowns
      value = field == 'suffix' ? newValue.value : newValue.label; 
    } else if (e?.target?.value !== undefined) {
      // TextFields
      if (field === 'contactNumber') {
        const digitOnlyValue = e.target.value.replace(/\D/g, '');
        value = digitOnlyValue.slice(0, 10);
      } else {
        value = e.target.value; 
      }
    } else {
      // Other Inputs
      value = newValue; 
    }

    // Limit string length to 50 characters
    if (typeof value === 'string' && value.length > 50) {
      value = value.slice(0, 50);
    }
    
    // Clear error when user edits the field
    if (errors[field]) {
      setErrors(prev => {
        const { [field]: _, ...rest } = prev;
        return rest;
      });
    }

    setValues((prev) => ({ ...prev, [field]: value }));
  };

  // SAVE FORM DATA THEN REDIRECTS TO THE NEXT FORM STEP
  const handleSubmit = () => {
    if (validateForm()) {
      updateFormData(sectionKey, values);
      handleNext();
    }
  };

  // LOAD SAVED VALUES FOR THE CURRENT SECTION/FORM STEP
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