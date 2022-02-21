import {
    ADD_DONOR,
    ADD_ORGANIZATION,
    DELETE_ORGANIZATION,
    FETCH_ORGANIZATION,
    SET_LiST,
    UPDATE_ORGANIZATION,
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
      type: UPDATE_DONOR ,
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



export const addOrganization = data => {
    return {
      type: ADD_ORGANIZATION,
      payload: data
    }
  }


  export const fetchOrganizationList = data => {
    return {
      type: FETCH_ORGANIZATION,
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

