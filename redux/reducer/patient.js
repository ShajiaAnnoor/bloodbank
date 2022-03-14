import {
    ADD_PATIENT,
    FETCH_PATIENT_LIST,
    UPDATE_PATIENT,
    DELETE_PATIENT,
    FETCH_PATIENT,
    SHOW_LOADER_PATIENT,
    HIDE_LOADER_PATIENT,
    SHOW_PATIENT_MESSAGE,
} from "../constants/constants";
import { createSelector } from "reselect";
  
  
  const initialState = {
    patientList: [],
    isLoading: false,
    status:{
      operationType:"",
      verdict:"",
    },
    districtFilter: ""
  
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

      case DELETE_PATIENT:{
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
  
      case SHOW_PATIENT_MESSAGE: {
        return{
          ...state,
          status:{
            operationType:action.payload.operationType,
            verdict:action.payload.verdict,
          }
        }
      }
          
        default:
          return state;
    }
  }

  export const getList = createSelector(
    state => state.patientList,

    patientList => getFilteredList(patientList)
  )
  export const getFilteredList = state => {
    if( state.districtFilter == "" ) return state.patientList;
    else {
      const newData = state.patientList.filter((item) => {
        return item.district == state.districtFilter;
      });
      return newData;
    }
  }

//  export const getList = state => state.patientList

  export const getStatus = state => state.status

  export const getIsLoading = state => state.isLoading

  export const getPatient = (state,id) => state.patientList[id]

