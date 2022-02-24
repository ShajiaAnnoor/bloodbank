import {
    SET_LIST,
  } from "../constants/constants";
  
  
  const initialState = {
    organizationList: [],
    isLoading: false,
  
  }
  
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case ADD_ORGANIZATION:{
        const organization= action.payload
        return {
          ...state,
          organizationList: {
            ...state.organizationList,
            [organization.id]: organization,
          
          }
        }
      }

     
  
      
          
        default:
          return state;
    }
  }