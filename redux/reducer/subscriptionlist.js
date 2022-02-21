import {
  SET_LIST,
} from "../constants/constants";

/*const initialState = {
  subscriptionList: [],
  isLoading: false,
}*/

const initialState = {
  bloodRequestList: [],
  isLoading: false,

}

/*export default (state = initialState, action) => {
  switch(action.type) {
    case SET_LIST:
      return {
        ...state,
        isLoading: true,

      };
        
      default:
        return state;
  }
}*/

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_BLOOD_REQUEST:{
      const bloodRequest= action.payload
      return {
        ...state,
        bloodRequestList: {
          ...state.bloodRequestList,
          [bloodRequest.id]: bloodRequest,
        
        }
      }
    }
        
      default:
        return state;
  }
}