import {
    SET_DONOR_LIST,
    FETCH_DONOR_LIST,
  } from "../constants/constants";
  
  const initialState = {
    donorList: [],
    isLoading: false,
  }
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case SET_DONOR_LIST:
        return {
          donorList: action.payload,
          isLoading: false,
        };
    case FETCH_DONOR_LIST:
        return{
            ...state,
            isLoading: true,
        }
        default:
          return state;
    }
  }