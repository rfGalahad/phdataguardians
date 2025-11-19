import { useState, useEffect } from "react";

import { supabase } from '../../../supabaseClient';
import { useFormContext } from "../../../context/FormContext";



export const useSubmit = ( handleNext ) => {

  const { formData } = useFormContext();

  const { firstName, middleName, lastName, suffix } = formData.personalInfo;
  const { houseNumber, street, barangay, municipality, province } = formData.addressDetails;
  const membershipType = formData.membershipType.type;
  const picture = URL.createObjectURL(formData.uploadPicture);

  const pictureFile = formData.uploadPicture;

  const generateMembershipID = async () => {
    const year = new Date().getFullYear();

    // Get the latest membership_id from Members table
    const { data, error } = await supabase
      .from('Members')
      .select('membership_id')
      .like('membership_id', `PDG-${year}-%`)
      .order('membership_id', { ascending: false })
      .limit(1);

    if (error) {
      console.error('Error fetching last ID:', error);
      return null;
    }

    let newNumber = 1;

    if (data && data.length > 0) {
      const lastId = data[0].membership_id; // ex: PDG-2025-003
      const lastNumber = parseInt(lastId.split('-')[2]); // 003
      newNumber = lastNumber + 1;
    }

    const padded = String(newNumber).padStart(3, '0');

    return `PDG-${year}-${padded}`;
  };

  const uploadPhoto = async (membershipID, file) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${membershipID}.${fileExt}`;
    const filePath = `photos/${fileName}`;

    // Upload file to bucket
    const { error: uploadError } = await supabase.storage
      .from('member-photos')
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return null;
    }

    return filePath;
  };

  const submitForm = async () => {
    const membershipID = await generateMembershipID();
    if (!membershipID) return;

    // UPLOAD PHOTO - SUPABASE STORAGE
    const path = await uploadPhoto(membershipID, pictureFile);
    if (!path) return;

    // GET PHOTO URL
    const photoUrl = getPublicUrl(path);


    try {
      // INSERT MEMBERS TABLE
      const { error: memberError } = await supabase
        .from("Members")
        .insert([
          {
            membership_id: membershipID,
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            suffix,
            membership_tier: membershipType,
            photo_url: photoUrl,   // <----- Store here
          },
        ]);

      if (memberError) throw memberError;

      // INSERT ADDRESS TABLE
      const { error: addressError } = await supabase
        .from("Address")
        .insert([
          {
            membership_id: membershipID,
            house_number: houseNumber,
            street_name: street,
            barangay,
            city_municipality: municipality,
            province,
          },
        ]);

      if (addressError) throw addressError;

      // INSERT DIGITAL ID TABLE
      await supabase.from("Digital_ID").insert([
        { membership_id: membershipID }
      ]);


      handleNext();

    } catch (err) {
      console.error("Insert error:", err);
    }
  };



  return {
    firstName, middleName, lastName, suffix,
    houseNumber, street, barangay, municipality, province,
    membershipType,
    picture,
    submitForm
  }
}