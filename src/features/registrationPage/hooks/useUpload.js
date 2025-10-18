import { useState, useEffect } from "react";
import { useFormContext } from "../../../context/FormContext";



export const useUpload = ( handleNext ) => {

  const { formData, updateFormData } = useFormContext();

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview ] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");

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

  const handleFiles = (file) => {
    setError('');

    const validationError = validateFile(file);
    if (validationError) {
      setImage(null);
      setImagePreview(null);
      return setError(validationError);
    }
    console.log('IMAGE', file);
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    console.log('File successfully prepared:', file.name);
  };

  const handleFileInput = (e) => {
    console.log('Hi');
    // e.target.value = null;
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files[0]);
    }
  };

  const removeImage = () => {
    if (imagePreview) URL.revokeObjectURL(imagePreview);

    setImage(null);
    setImagePreview(null);
    setError('');
  };

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

    // 1. Stop early if there's no saved file
    if (!item) return;

    // 2. If the stored value is a File object
    if (item instanceof File) {
      const objectUrl = URL.createObjectURL(item);
      setImage(item);
      setImagePreview(objectUrl);

      // cleanup to prevent memory leaks
      return () => URL.revokeObjectURL(objectUrl);
    }

    // 3. If the stored value is a string (like a base64 URL or image URL)
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