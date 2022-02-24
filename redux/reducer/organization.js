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

      case FETCH_ORGANIZATION_LIST:{
        const newOrganizationList = {}
        action.payload.forEach(organization => {
          newOrganizationList[organization.id] = organization
        })
        return {
          ...state,
          organizationList: newOrganizationList
        }
      
    }

    
      
          
        default:
          return state;
    }
  }