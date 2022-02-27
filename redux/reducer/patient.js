import {
    SET_LIST,
  } from "../constants/constants";
  
  
  const initialState = {
    patientList: [],
    isLoading: false,
  
  }
  
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case ADD_PATIENT:{
        const patient= action.payload
        return {
          ...state,
          patientList: {
            ...state.patientList,
            [patient.id]: patient,
          
          }
        }
      }

      case FETCH_PATIENT_LIST:{
          const newPatientList = {}
          action.payload.forEach(patient => {
            newPatientList[patient.id] = patient
          })
          return {
            ...state,
            patientList: newPatientList
          }
        
      }

      case UPDATE_PATIENT:{
        const patient= action.payload
        return {
          ...state,
          patientList: {
            ...state.patientList,
            [patient.id]: patient,
          
          }
        }
      }

      case DELETE_DONOR:{
        const newPatientList= { ...state.patientList }
        delete newPatientList[action.payload]
  
        return {
          ...state,
          patientList: newPatientList
        }
      }

      case FETCH_PATIENT:{
        const patient= action.payload
        return {
          ...state,
          patientList: {
            ...state.patientList,
            [patient.id]: patient,
          
          }
        }
      }

      case SHOW_LOADER_PATIENT: {
        return {
          ...state,
          isLoading:true,
        }
      }

      case HIDE_LOADER_PATIENT: {
        return {
          ...state,
          isLoading:false,
        }
      }
  
      
          
        default:
          return state;
    }
  }