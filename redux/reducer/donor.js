import {
    ADD_DONOR,
    FETCH_DONOR_LIST,
    UPDATE_DONOR,
    DELETE_DONOR,
    FETCH_DONOR,
    SHOW_LOADER_DONOR,
    HIDE_LOADER_DONOR,
  } from "../constants/constants";
  
  
  const initialState = {
    donorList: [],
    isLoading: false,
    status:{
      operationType:"",
      verdict:"",
    }
  
  }
  
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case ADD_DONOR:{
        const donor= action.payload
        return {
          ...state,
          donorList: {
            ...state.donorList,
            [donor.id]: donor,
          
          }
        }
      }

      case FETCH_DONOR_LIST:{
          const newDonorList = {}
          action.payload.forEach(donor => {
            newDonorList[donor.id] = donor
          })
          return {
            ...state,
            donorList: newDonorList
          }
        
      }

      case UPDATE_DONOR:{
        const donor= action.payload
        return {
          ...state,
          donorList: {
            ...state.donorList,
            [donor.id]: donor,
          
          }
        }
      }

      case DELETE_DONOR:{
        const newDonorList= { ...state.donorList }
        delete newDonorList[action.payload]
  
        return {
          ...state,
          donorList: newDonorList
        }
      }

      case FETCH_DONOR:{
        const donor= action.payload
        return {
          ...state,
          donorList: {
            ...state.donorList,
            [donor.id]: donor,
          
          }
        }
      }

      case SHOW_LOADER_DONOR: {
        return {
          ...state,
          isLoading:true,
        }
      }

      case HIDE_LOADER_DONOR: {
        return {
          ...state,
          isLoading:false,
        }
      }

      case SHOW_DONOR_MESSAGE: {
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

  export const getList = state => state.donorList

  export const getStatus = state => state.status

  export const getIsLoading = state => state.isLoading

  export const getDonor = (state,id) => state.donorList[id]

  


