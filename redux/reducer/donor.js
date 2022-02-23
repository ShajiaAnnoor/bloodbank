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
  
      
          
        default:
          return state;
    }
  }