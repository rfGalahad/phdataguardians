import { supabase } from '../../../supabaseClient';
import { useFormContext } from "../../../context/FormContext";

export const useSubmit = () => {
  const { formData } = useFormContext();

  const { firstName, middleName, lastName, suffix } = formData.personalInfo;
  const { houseNumber, street, barangay, municipality, province } = formData.addressDetails;
  const referenceNumber = formData.paymentInfo.referenceNumber;
  const membershipType = formData.membershipType.type;
  const picture = URL.createObjectURL(formData.uploadPicture);

  const pictureFile = formData.uploadPicture;

  const generateMembershipID = async () => {
    console.log('🔵 [generateMembershipID] Starting...');
    const year = new Date().getFullYear();
    console.log(`📅 Current year: ${year}`);

    // Get ALL membership_ids and filter manually
    console.log(`🔍 Querying ALL membership IDs...`);
    const { data: allIds, error } = await supabase
      .from('Members')
      .select('membership_id');

    if (error) {
      console.error('❌ Error fetching IDs:', error);
      return null;
    }

    console.log(`📦 All IDs in database:`, allIds);

    // Filter IDs for current year
    const currentYearIds = allIds
      .filter(row => row.membership_id.startsWith(`PDG-${year}-`))
      .sort();
    
    console.log(`📋 IDs for year ${year}:`, currentYearIds);

    let newNumber = 1;

    if (currentYearIds.length > 0) {
      const lastId = currentYearIds[currentYearIds.length - 1].membership_id;
      console.log(`✅ Found last ID: ${lastId}`);
      const lastNumber = parseInt(lastId.split('-')[2]);
      console.log(`🔢 Extracted last number: ${lastNumber}`);
      newNumber = lastNumber + 1;
      console.log(`➕ Incrementing to: ${newNumber}`);
    } else {
      console.log('⚠️ No previous IDs found, starting from 1');
    }

    const padded = String(newNumber).padStart(3, '0');
    let newID = `PDG-${year}-${padded}`;
    console.log(`🆔 Generated new ID: ${newID}`);

    // Keep incrementing until we find an ID that doesn't exist
    let attempts = 0;
    const maxAttempts = 100;
    
    while (allIds.some(row => row.membership_id === newID) && attempts < maxAttempts) {
      console.warn(`⚠️ ID ${newID} already exists, incrementing...`);
      newNumber++;
      const newPadded = String(newNumber).padStart(3, '0');
      newID = `PDG-${year}-${newPadded}`;
      attempts++;
    }

    if (attempts >= maxAttempts) {
      console.error('❌ Could not generate unique ID after 100 attempts');
      return null;
    }

    console.log(`✅ [generateMembershipID] Complete - ID: ${newID}`);
    return newID;
  };

  const uploadPhoto = async (membershipID, file) => {
    console.log(`🖼️ [uploadPhoto] Starting for membershipID: ${membershipID}`);
    console.log(`📄 File name: ${file.name}`);

    const fileExt = file.name.split('.').pop();
    const fileName = `${membershipID}.${fileExt}`;
    const filePath = `photos/${fileName}`;

    console.log(`📂 File path: ${filePath}`);
    console.log(`⬆️ Uploading to bucket...`);

    // Upload file to bucket
    const { error: uploadError } = await supabase.storage
      .from('member-photos')
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error('❌ Upload error:', uploadError);
      return null;
    }

    console.log(`✅ [uploadPhoto] Complete - Path: ${filePath}`);
    return filePath;
  };

  const getPublicUrl = (path) => {
    console.log(`🌐 [getPublicUrl] Getting public URL for: ${path}`);
    const { data } = supabase.storage
      .from('member-photos')
      .getPublicUrl(path);

    console.log(`🔗 Public URL: ${data.publicUrl}`);
    return data.publicUrl;
  };

  const submitForm = async () => {
    console.log('═════════════════════════════════════════');
    console.log('🚀 [submitForm] Starting form submission');
    console.log('═════════════════════════════════════════');

    const membershipID = await generateMembershipID();
    if (!membershipID) {
      console.error('❌ Failed to generate membership ID');
      return;
    }

    console.log(`\n📸 Step 1: Uploading photo...`);
    // UPLOAD PHOTO - SUPABASE STORAGE
    const path = await uploadPhoto(membershipID, pictureFile);
    if (!path) {
      console.error('❌ Failed to upload photo');
      return;
    }

    console.log(`\n🔗 Step 2: Getting public URL...`);
    // GET PHOTO URL
    const photoUrl = getPublicUrl(path);

    try {
      console.log(`\n💾 Step 3: Inserting into Members table...`);
      console.log('Data:', {
        membership_id: membershipID,
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        suffix,
        photo_url: photoUrl
      });

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
            photo_url: photoUrl
          },
        ]);

      if (memberError) {
        console.error("❌ Members table ERROR:", memberError);
        return;
      }
      console.log("✅ Members table inserted successfully");

      console.log(`\n💾 Step 4: Inserting into Address table...`);
      console.log('Data:', {
        membership_id: membershipID,
        house_number: houseNumber,
        street_name: street,
        barangay,
        city_municipality: municipality,
        province,
      });

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

      if (addressError) {
        console.error("❌ Address table ERROR:", addressError);
        return;
      }
      console.log("✅ Address table inserted successfully");

      console.log(`\n💾 Step 5: Inserting into Payment table...`);
      console.log('Data:', {
        membership_id: membershipID,
        membership_tier: membershipType,
        reference_number: referenceNumber
      });

      // INSERT PAYMENT TABLE
      const { error: paymentError } = await supabase
        .from("Payment")
        .insert([
          {
            membership_id: membershipID,
            membership_tier: membershipType,
            reference_number: referenceNumber
          },
        ]);

      if (paymentError) {
        console.error("❌ Payment table ERROR:", paymentError);
        return;
      }
      console.log("✅ Payment table inserted successfully");

      console.log(`\n💾 Step 6: Inserting into Digital_ID table...`);
      console.log('Data:', { membership_id: membershipID });

      // INSERT DIGITAL ID TABLE
      const { error: digitalIDError } = await supabase
        .from("Digital_ID")
        .insert([
          { membership_id: membershipID }
        ]);

      if (digitalIDError) {
        console.error("❌ Digital_ID table ERROR:", digitalIDError);
        return;
      }
      console.log("✅ Digital_ID table inserted successfully");

      console.log('═════════════════════════════════════════');
      console.log('✅ [submitForm] ALL STEPS COMPLETED SUCCESSFULLY!');
      console.log('═════════════════════════════════════════');

    } catch (err) {
      console.error("❌ Insert error:", err);
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