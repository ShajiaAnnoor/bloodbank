import {
    SET_ORGANIZATION_LIST,
    FETCH_ORGANIZATION_LIST,
  } from "../constants/constants";
  
  const initialState = {
    organizationList: [],
    isLoading: false,
  }
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case SET_ORGANIZATION_LIST:
        return {
          organizationList: action.payload,
          isLoading: false,
        };
    case FETCH_ORGANIZATION_LIST:
        return{
            ...state,
            isLoading: true,
        }
        default:
          return state;
    }
  }