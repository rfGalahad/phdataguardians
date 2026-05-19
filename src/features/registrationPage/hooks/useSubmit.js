import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { v4 as uuidv4 } from 'uuid';

import { useFormContext } from "@/context/FormContext";
import { supabase } from '@/services/supabaseClient';


// CONSTANT
const STORAGE_BUCKET = 'member-photos';
const PHOTO_FOLDER = 'photos';

// ERROR MESSAGES
const ERROR_MESSAGES = {
  ID_GENERATION: 'Failed to generate membership ID',
  PHOTO_UPLOAD: 'Failed to upload photo',
  MEMBERS_INSERT: 'Failed to save member information',
  ADDRESS_INSERT: 'Failed to save address information',
  PAYMENT_INSERT: 'Failed to save payment information',
  DIGITAL_ID_INSERT: 'Failed to save digital ID',
  UNKNOWN: 'An unexpected error occurred'
};

export const useSubmit = () => {

  const navigate = useNavigate();
  const { formData } = useFormContext();

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [error, setError] = useState(null);
  
  const { firstName, middleName, lastName, suffix, emailAddress, contactNumber } = formData.personalInfo;
  const { houseNumber, street, barangay, municipality, province } = formData.addressDetails;
  const referenceNumber = formData.paymentInfo.referenceNumber;
  const membershipTier = formData.membershipTier.tier;
  const pictureFile = formData.uploadPicture;
  const picture = pictureFile ? URL.createObjectURL(pictureFile) : null;

  // CLOSE MODAL/DIALOG BOX
  const handleModalClose = () => {
    setModalOpen(false);
    if (modalType === 'success') {
      navigate('/');
    }
  };

  // UPLOAD PHOTO TO SUPABASE STORAGE
  const uploadPhoto = async (file) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`; 
      const filePath = `${PHOTO_FOLDER}/${fileName}`;

      // Upload file to bucket
      const { error: uploadError } = await supabase.storage
        .from(STORAGE_BUCKET)
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        throw new Error(uploadError.message);
      }

      return filePath;
    } catch (err) {
      throw new Error(`${ERROR_MESSAGES.PHOTO_UPLOAD}: ${err.message}`);
    }
  };

  // GET PHOTO'S PUBLIC URL
  const getPublicUrl = (path) => {
    try {
      const { data } = supabase.storage
        .from(STORAGE_BUCKET)
        .getPublicUrl(path);

      return data.publicUrl;
    } catch (err) {
      throw new Error(`Failed to get public URL: ${err.message}`);
    }
  };

  // SUBMIT/INSERT DATA TO THE SUPABASE DATABASE
  const submitForm = async () => {

    setLoading(true);
    setError(null);

    try {
      // UPLOAD PHOTO - SUPABASE STORAGE
      const path = await uploadPhoto(pictureFile);
      const photoUrl = getPublicUrl(path);

      // DB TRANSACTION
      const { data, error } = await supabase.rpc('register_member', {
        p_first_name: firstName || '',
        p_middle_name: middleName || '',
        p_last_name: lastName || '',
        p_suffix: suffix || '',
        p_photo_url: photoUrl || '',
        p_email: emailAddress || '',
        p_contact_number: contactNumber || '',
        p_house_number: houseNumber || '',
        p_street_name: street || '',
        p_barangay: barangay || '',
        p_city_municipality: municipality || '',
        p_province: province || '',
        p_membership_tier: membershipTier || '',
        p_reference_number: referenceNumber || '',
      });

      if (error) {
        if(path) {
          await supabase.storage.from('member-photos').remove([photoPath]);
        }
        throw error;
      }

      setModalType('success');
      setModalOpen(true);

    } catch (err) {
      console.error('❌ Submit error:', err.message);
      setError(err.message);
      setModalType('error');
      setModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    firstName, middleName, lastName, suffix,
    emailAddress, contactNumber,
    houseNumber, street, barangay, municipality, province,
    membershipTier, referenceNumber,
    picture,
    ui: {
      loading,
      modalOpen,
      modalType,
      error,
    },
    handlers: {
      handleModalClose,
      submitForm,
    }
  }
}