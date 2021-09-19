import {
    SET_REQUEST_LIST,
    FETCH_REQUEST_LIST,
  } from "../constants/constants";
   
  const initialState = {
    requestList: [],
    isLoading: false,
  }
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case SET_REQUEST_LIST:
        return {
          requestList: action.payload,
          isLoading: false,
        };
    case FETCH_REQUEST_LIST:
        return{
            ...state,
            isLoading: true,
        }
        default:
          return state;
    }
  }