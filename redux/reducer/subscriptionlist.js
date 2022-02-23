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

//export default function todosReducer(state = initialState, action) {
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

    case FETCH_BLOOD_REQUEST_LIST:{
      //const bloodRequest= action.payload
        const newBloodRequestList = {}
        action.payload.forEach(bloodRequest => {
          newBloodRequestList[bloodRequest.id] = bloodRequest
        })
        return {
          ...state,
          bloodRequestList: newBloodRequestList
        }
      
    }

    case UPDATE_BLOOD_REQUEST:{
      const bloodRequest= action.payload
      return {
        ...state,
        bloodRequestList: {
          ...state.bloodRequestList,
          [bloodRequest.id]: bloodRequest,
        
        }
      }
    }

    case DELETE_BLOOD_REQUEST:{
      const newBloodRequestList= { ...state.bloodRequestList }
      delete newBloodRequestList[action.payload]

      return {
        ...state,
        bloodRequestList: newBloodRequestList
      }
    }

    case FETCH_BLOOD_REQUEST:{
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