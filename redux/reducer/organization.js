import {
    ADD_ORGANIZATION,
    FETCH_ORGANIZATION_LIST,
    UPDATE_ORGANIZATION,
    DELETE_ORGANIZATION,
    FETCH_ORGANIZATION,
    SHOW_LOADER_ORGANIZATION,
    HIDE_LOADER_ORGANIZATION,
    SHOW_ORGANIZATION_MESSAGE,
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

    case UPDATE_ORGANIZATION:{
        const organization= action.payload
        return {
          ...state,
          organizationList: {
            ...state.organizationList,
            [organization.id]: organization,
          
          }
        }
      }
  
      case DELETE_ORGANIZATION:{
        const newOrganizationList= { ...state.organizationList }
        delete newOrganizationList[action.payload]
  
        return {
          ...state,
          organizationList: newOrganizationList
        }
      }
  
     
      case FETCH_ORGANIZATION:{
        const organization= action.payload
        return {
          ...state,
          organizationList: {
            ...state.organizationList,
            [organization.id]: organization,
          }
        }
      }

      case SHOW_LOADER_ORGANIZATION: {
        return {
          ...state,
          isLoading:true,
        }
      }

      case HIDE_LOADER_ORGANIZATION: {
        return {
          ...state,
          isLoading:false,
        }
      }

      case SHOW_ORGANIZATION_MESSAGE: {
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

  export const getList = state => state.organizationList

export const getStatus = state => state.status

export const getIsLoading = state => state.isLoading

export const getOrganization = (state,id) => state.organizationList[id]