import { useState, useEffect } from "react";

import { useFormContext } from "../../../context/FormContext";



export const useSubmit = ( handleNext ) => {

  const { formData } = useFormContext();

  const { firstName, middleName, lastName, suffix } = formData.personalInfo;
  const { houseNumber, street, barangay, municipality, province } = formData.addressDetails;
  const membershipType = formData.membershipType.type;
  const picture = URL.createObjectURL(formData.uploadPicture);

  const membershipIDRef = collection(db, 'membershipID');

  const generateMembershipID = async() => {
    //Membership ID Generation
  }



  


  return {
    firstName, middleName, lastName, suffix,
    houseNumber, street, barangay, municipality, province,
    membershipType,
    picture
  }
}