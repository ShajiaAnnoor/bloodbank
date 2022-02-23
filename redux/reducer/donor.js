import {
    SET_LIST,
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
  
      
          
        default:
          return state;
    }
  }