import { useState, useEffect } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";

import { db } from "../../../services/firebase-config";
import { useFormContext } from "../../../context/FormContext";



export const useSubmit = ( handleNext ) => {

  const { formData } = useFormContext();

  const [memberList, setMemberList] = useState([]);

  const { firstName, middleName, lastName, suffix } = formData.personalInfo;
  const { houseNumber, street, barangay, municipality, province } = formData.addressDetails;
  const membershipType = formData.membershipType.type;
  const picture = URL.createObjectURL(formData.uploadPicture);

  const membershipIDRef = collection(db, 'membershipID');

  const generateMembershipID = async() => {
    //Membership ID Generation
  }

  const handleSubmit = async() => {
    try{
      await addDoc(membershipIDRef, {
        membershipID: firstName + membershipType + '0001',
        firstName: firstName,
        middleName: middleName || null,
        lastName: lastName,
        suffix: suffix || null,
        houseNumber: houseNumber,
        street: street,
        barangay: barangay,
        municipality: municipality,
        province: province,
        membershipType: membershipType

      })
    } catch (err) {
      console.error(err);
    }
  }

  
  useEffect(() => {
    const getMemberList = async () => {
      try {
        const data = await getDocs(membershipIDRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(), 
          id: doc.id
        }))
        setMemberList(filteredData)
      } catch (err) {
        console.error(err)
      }
    }

    getMemberList();
  }, []);
  


  return {
    firstName, middleName, lastName, suffix,
    houseNumber, street, barangay, municipality, province,
    membershipType,
    picture,
    handleSubmit
  }
}