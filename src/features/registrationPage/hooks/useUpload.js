import { useState, useEffect } from "react";
import { useFormContext } from "../../../context/FormContext";



export const useUpload = ( handleNext ) => {

  const { formData, updateFormData } = useFormContext();

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview ] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");

  // VALIDATE IMAGE IF SIZE < 5MB && TYPES = JPEG, JPG, PNG 
  const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      return "Only JPG, JPEG, and PNG files are allowed";
    }
    if (file.size > maxSize) {
      return "File size must be less than 5MB";
    }
    
    return null;
  };

  //
  const handleFiles = (file) => {
    setError('');

    const validationError = validateFile(file);
    if (validationError) {
      setImage(null);
      setImagePreview(null);
      return setError(validationError);
    }
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // 
  const handleFileInput = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files[0]);
    }
  };

  // ALLOWS IMAGES TO DRAG
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // ALLOWS IMAGE TO DROP
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files[0]);
    }
  };

  // REMOVES THE UPLOADED IMAGE
  const removeImage = () => {
    if (imagePreview) URL.revokeObjectURL(imagePreview);

    setImage(null);
    setImagePreview(null);
    setError('');
  };

  // STORES THE IMAGE INTO THE FORM CONTEXT (UploadPicture)
  const handleSubmit = () => {
    if (!image) {
      return setError('Please upload a picture');
    } else {
      updateFormData('uploadPicture', image);
      handleNext();
    }
  }

  useEffect(() => {
    const item = formData?.uploadPicture;

    if (!item) return;

    if (item instanceof File) {
      const objectUrl = URL.createObjectURL(item);
      setImage(item);
      setImagePreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }

    if (typeof item === 'string') {
      setImagePreview(item);
    }
  }, []);


  return {
    image,
    imagePreview,
    dragActive,
    error,
    handleDrag,
    handleDrop,
    handleFileInput,
    removeImage,
    handleSubmit
  }
}