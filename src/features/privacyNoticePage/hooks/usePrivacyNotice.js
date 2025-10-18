import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export const usePrivacyNotice = () => {

  const navigate = useNavigate();

  const [agree, setAgree] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = () => {
    setAgree(event.target.checked);
  }

  const handleNext = () => {
    if (agree) {
      navigate('/registration'); 
    } else {
      alert('Please agree to the privacy notice before continuing.');
    }
  }

  useEffect(() => {
    setShowHeader(true);

    const timer = setTimeout(() => {
      setShowDetails(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);


  return {
    agree,
    showHeader,
    showDetails,
    handleChange,
    handleNext
  }
}