import {
    SET_PATIENT_LIST,
    FETCH_PATIENT_LIST,
  } from "../constants/constants";
  
  const initialState = {
    patientList: [],
    isLoading: false,
  }
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case SET_PATIENT_LIST:
        return {
          patientList: action.payload,
          isLoading: false,
        };
    case FETCH_PATIENT_LIST:
        return{
            ...state,
            isLoading: true,
        }
        default:
          return state;
    }
  }