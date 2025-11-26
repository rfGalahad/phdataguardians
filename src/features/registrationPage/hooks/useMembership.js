import { useState, useEffect } from "react";
import { useFormContext } from "../../../context/FormContext";


export const useMembership = ( handleNext ) => {

  const { formData, updateFormData } = useFormContext();
  
  const [ selected, setSelected ] = useState(null);
  const [ error, setError ] = useState(false);

  // SAVE SELECTED MEMBERSHIP TIER TO FORM DATA (membershipTier)
  const handleCardSelect = (tier) => {
    setSelected(tier);
    updateFormData('membershipTier', { tier });
  };

  // REDIRECTS TO NEXT FORM STEP 
  const handleSubmit = () => {
    if (selected) {
      handleNext();
    } else {
      return setError(true);
    }
  };

  // LOAD SELECTED MEMBERSHIP TIER
  useEffect(() => {
    const sectionData = formData?.membershipTier?.tier;
    if (sectionData) setSelected(sectionData);
  }, [formData]);


  return {
    selected,
    error,
    handleCardSelect,
    handleSubmit
  }
}  