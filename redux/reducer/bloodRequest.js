import {
  ADD_BLOOD_REQUEST,
  FETCH_BLOOD_REQUEST_LIST,
  UPDATE_BLOOD_REQUEST,
  DELETE_BLOOD_REQUEST,
  FETCH_BLOOD_REQUEST,
  SHOW_LOADER_BLOOD_REQUEST,
  HIDE_LOADER_BLOOD_REQUEST,
} from "../constants/constants";
import { createSelector } from "reselect";

const initialState = {
  bloodRequestList: [],
  isLoading: false,
  status:{
    operationType:"",
    verdict:"",
  },
  districtFilter: ""

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
   
    case SHOW_LOADER_BLOOD_REQUEST: {
      return {
        ...state,
        isLoading:true,
      }
    }

    case HIDE_LOADER_BLOOD_REQUEST: {
      return {
        ...state,
        isLoading:false,
      }
    }

    case SHOW_BLOOD_REQUEST_MESSAGE: {
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

export const getList = createSelector(
  state => state.bloodRequestList,

  bloodRequestList => getFilteredList(bloodRequestList)
)
export const getFilteredList = state => {
  if( state.districtFilter == "" ) return state.bloodRequestList;
  else {
    const newData = state.bloodRequestList.filter((item) => {
      return item.district == state.districtFilter;
    });
    return newData;
  }
}

//export const getList = state => state.bloodRequestList

export const getStatus = state => state.status

export const getIsLoading = state => state.isLoading

export const getBloodRequest = (state,id) => state.bloodRequestList[id]