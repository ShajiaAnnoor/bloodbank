import {
    ADD_DONOR,
    FETCH_DONOR_LIST,
    UPDATE_DONOR,
    DELETE_DONOR,
    FETCH_DONOR,
  } from "../constants/constants";
  
  
  const initialState = {
    donorList: [],
    isLoading: false,
  
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
  
      
          
        default:
          return state;
    }
  }