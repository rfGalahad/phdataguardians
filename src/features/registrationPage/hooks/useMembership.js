import { useState, useEffect } from "react";
import { useFormContext } from "../../../context/FormContext";


export const useMembership = ( handleNext ) => {

  const { formData, updateFormData } = useFormContext();
  
  const [ selected, setSelected ] = useState(null);
  const [ error, setError ] = useState(false);

  const handleCardSelect = (type) => {
    setSelected(type);
    updateFormData('membershipType', { type });
  };

  const handleSubmit = () => {
    if (selected) {
      handleNext();
    } else {
      return setError(true);
    }
  };

  useEffect(() => {
    const sectionData = formData?.membershipType.type;
    if (sectionData) setSelected(sectionData);
  }, []);


  return {
    selected,
    error,
    handleCardSelect,
    handleSubmit
  }
}  