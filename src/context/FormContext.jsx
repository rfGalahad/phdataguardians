import { createContext, useState, useContext } from "react";

const FormContext = createContext();

const initialFormData = {
  personalInfo: {},
  addressDetails: {},
  uploadPicture: {},
  membershipType: {}
}

export const FormProvider = ({ children }) => {
  
  const [ formData, setFormData ] = useState(initialFormData);

  const updateFormData = (section, data) => {
    setFormData(prev => ({ ...prev, [section]: data }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook for cleaner usage
export const useFormContext = () => useContext(FormContext);
