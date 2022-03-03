import {
    ADD_BLOOD_REQUEST,
    ADD_DONOR,
    ADD_ORGANIZATION,
    ADD_PATIENT,
    DELETE_BLOOD_REQUEST,
    DELETE_DONOR,
    DELETE_ORGANIZATION,
    DELETE_PATIENT,
    FETCH_BLOOD_REQUEST,
    FETCH_BLOOD_REQUEST_LIST,
    FETCH_DONOR,
    FETCH_DONOR_LIST,
    FETCH_ORGANIZATION,
    FETCH_ORGANIZATION_LIST,
    FETCH_PATIENT,
    FETCH_PATIENT_LIST,
    HIDE_LOADER_BLOOD_REQUEST,
    HIDE_LOADER_DONOR,
    HIDE_LOADER_ORGANIZATION,
    HIDE_LOADER_PATIENT,
    SET_LiST,
    SHOW_LOADER_BLOOD_REQUEST,
    SHOW_LOADER_DONOR,
    SHOW_LOADER_ORGANIZATION,
    SHOW_LOADER_PATIENT,
    UPDATE_BLOOD_REQUEST,
    UPDATE_DONOR,
    UPDATE_ORGANIZATION,
    UPDATE_PATIENT,
    SHOW_ORGANIZATION_MESSAGE,
    SHOW_BLOOD_REQUEST_MESSAGE,
    SHOW_PATIENT_MESSAGE,
    SHOW_DONOR_MESSAGE,
} from "../constants/constants";

export const setList = function(data) {
    return {type: SET_LIST, data: data};
}

export const addBloodRequest = data => {
    return {
      type:ADD_BLOOD_REQUEST,
      payload: data
    }
  }


  export const fetchBloodRequestList = data => {
    return {
      type: FETCH_BLOOD_REQUEST_LIST,
      payload: data
    }
  }


  export const updateBloodRequest = data => {
    return {
      type: UPDATE_BLOOD_REQUEST ,
      payload: data
    }
  }

  export const deleteBloodRequest = data => {
    return {
      type: DELETE_BLOOD_REQUEST ,
      payload: data
    }
  }

  export const fetchBloodRequest = data => {
    return {
      type: FETCH_BLOOD_REQUEST,
      payload: data
    }
  }

  export const showLoaderBloodRequest = () => {
    return {
      type: SHOW_LOADER_BLOOD_REQUEST,
    }
  }

  export const hideLoaderBloodRequest = () => {
    return {
      type: HIDE_LOADER_BLOOD_REQUEST,
    }
  }

  export const addDonor = data => {
    return {
      type: ADD_DONOR,
      payload: data
    }
  }


  export const fetchDonorList = data => {
    return {
      type: FETCH_DONOR_LIST,
      payload: data
    }
  }


  export const updateDonor = data => {
    return {
      type: UPDATE_DONOR,
      payload: data
    }
  }

  export const deleteDonor= data => {
    return {
      type: DELETE_DONOR ,
      payload: data
    }
  }

  export const fetchDonor = data => {
    return {
      type: FETCH_DONOR,
      payload: data
    }
  }

  export const showLoaderDonor = () => {
    return {
      type: SHOW_LOADER_DONOR,
    }
  }

  export const hideLoaderDonor = () => {
    return {
      type: HIDE_LOADER_DONOR,
    }
  }


  export const addPatient = data => {
    return {
      type: ADD_PATIENT,
      payload: data
    }
  }


  export const fetchPatientList = data => {
    return {
      type: FETCH_PATIENT_LIST,
      payload: data
    }
  }


  export const updatePatient = data => {
    return {
      type: UPDATE_PATIENT ,
      payload: data
    }
  }

  export const deletePatient= data => {
    return {
      type: DELETE_PATIENT ,
      payload: data
    }
  }

  export const fetchPatient = data => {
    return {
      type: FETCH_PATIENT,
      payload: data
    }
  }

  export const showLoaderPatient = () => {
    return {
      type: SHOW_LOADER_PATIENT,
    }
  }

  export const hideLoaderPatient = () => {
    return {
      type: HIDE_LOADER_PATIENT,
    }
  }



export const addOrganization = data => {
    return {
      type: ADD_ORGANIZATION,
      payload: data
    }
  }


  export const fetchOrganizationList = data => {
    return {
      type: FETCH_ORGANIZATION_LIST,
      payload: data
    }
  }


  export const updateOrganization = data => {
    return {
      type: UPDATE_ORGANIZATION ,
      payload: data
    }
  }

  export const deleteOrganization= data => {
    return {
      type: DELETE_ORGANIZATION ,
      payload: data
    }
  }

  export const fetchOrganization = data => {
    return {
      type: FETCH_ORGANIZATION,
      payload: data
    }
  }

  export const showLoaderOrganization = () => {
    return {
      type: SHOW_LOADER_ORGANIZATION,
    }
  }

  export const hideLoaderOrganization = () => {
    return {
      type: HIDE_LOADER_ORGANIZATION,
    }
  }

  export const showMessage = (primaryType, operationType, verdict) => {
    const actionType = "",
    
    if( primaryType == "organization" ) {
      actionType = SHOW_ORGANIZATION_MESSAGE; 
    }
    if( primaryType == "patient" ) {
      actionType = SHOW_PATIENT_MESSAGE; 
    }
    if( primaryType == "donor" ) {
      actionType = SHOW_DONOR_MESSAGE; 
    }
    if( primaryType == "bloodRequest" ) {
      actionType = SHOW_BLOOD_REQUEST_MESSAGE; 
    }


    const payld = {}
    payld.operationType = operationType;
    payld.verdict = verdict;

    return {
      type: actionType,
      payload: payld
    }
  }