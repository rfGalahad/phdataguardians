import { useMemo } from 'react';

import barangayData from '../data/barangay.json';
import municipalityData from '../data/municipality.json';
import provinceData from '../data/province.json';



export const useAddressOptions = (values) => {
  
  // PROVINCE DROPDOWN LIST
  const PROVINCE_OPTIONS = useMemo(() => {
    return provinceData.map(province => ({
      label: province.province_name,
      value: province.province_id,
      ...province
    }));
  }, []);

  // CITY/MUNICIPALITY DROPDOWN LIST
  const MUNICIPALITY_OPTIONS = useMemo(() => {
    return municipalityData.map(municipality => ({
      label: municipality.municipality_name,
      value: municipality.municipality_id,
      ...municipality
    }));
  }, []);

  // BARANGAY DROPDOWN LIST
  const BARANGAY_OPTIONS = useMemo(() => {
    return barangayData.map(barangay => ({
      label: barangay.barangay_name,
      value: barangay.barangay_id,
      ...barangay
    }));
  }, []);


  // SELECTED IDs
  const selectedProvince = values.province;
  const selectedMunicipality = values.municipality;


  // MUNICIPALITIES UNDER SELECTED PROVINCE
  const FILTERED_MUNICIPALITY_OPTIONS = useMemo(() => {

    const selectedProvince = PROVINCE_OPTIONS.find(
      (p) => p.province_name === values.province
    );

    const province_id = selectedProvince ? selectedProvince.province_id : null;

    if (province_id) {
      return MUNICIPALITY_OPTIONS.filter(
        (municipality) => municipality.province_id === province_id
      );
    }
    return [];
  }, [values.province, PROVINCE_OPTIONS, MUNICIPALITY_OPTIONS]);

  // BARANGAYS UNDER SELECTED CITY/MUNICPALITY 
  const FILTERED_BARANGAY_OPTIONS = useMemo(() => {
    
    const selectedMunicipality = MUNICIPALITY_OPTIONS.find(
      (m) => m.municipality_name === values.municipality
    );

    const municipality_id = selectedMunicipality ? selectedMunicipality.municipality_id : null;

    if (municipality_id) {
      return BARANGAY_OPTIONS.filter(
        (barangay) => barangay.municipality_id === municipality_id
      );
    }
    return [];
  }, [values.municipality, MUNICIPALITY_OPTIONS, BARANGAY_OPTIONS]);


  // CONTROLS WHAT FIELDS TO SHOW
  const showMunicipality = selectedProvince;
  const showBarangay = showMunicipality && selectedMunicipality;
  const showStreet = showBarangay && values.barangay;


  return {
    showMunicipality,
    showBarangay,
    showStreet,
    PROVINCE_OPTIONS,
    FILTERED_MUNICIPALITY_OPTIONS,
    FILTERED_BARANGAY_OPTIONS,
  };
};