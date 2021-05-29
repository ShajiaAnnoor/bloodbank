import {
  SET_LIST,
} from "../constants/constants";

const initialState = {
  subscriptionList: [],
  isLoading: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_LIST:
      return {
        ...state,
        isLoading: true,
      };
        
      default:
        return state;
  }
}