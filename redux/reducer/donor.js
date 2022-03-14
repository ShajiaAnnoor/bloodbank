import {
    ADD_DONOR,
    FETCH_DONOR_LIST,
    UPDATE_DONOR,
    DELETE_DONOR,
    FETCH_DONOR,
    SHOW_LOADER_DONOR,
    HIDE_LOADER_DONOR,
    SET_DONOR_DISTRICT_FILTER,
    SHOW_DONOR_MESSAGE,
  } from "../constants/constants";
  import { createSelector } from "reselect";
  
  const initialState = {
    donorList: [],
    isLoading: false,
    status:{
      operationType:"",
      verdict:"",
    },
    districtFilter: ""
  }
  
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case ADD_DONOR:{
        const donor= action.payload
        return {
          ...state,
          donorList: {
            ...state.donorList,
            [donor.id]: donor,
          
          }
        }
      }

      case FETCH_DONOR_LIST:{
          const newDonorList = {}
          action.payload.forEach(donor => {
            newDonorList[donor.id] = donor
          })
          return {
            ...state,
            donorList: newDonorList
          }
        
      }

      case UPDATE_DONOR:{
        const donor= action.payload
        return {
          ...state,
          donorList: {
            ...state.donorList,
            [donor.id]: donor,
          
          }
        }
      }

      case DELETE_DONOR:{
        const newDonorList= { ...state.donorList }
        delete newDonorList[action.payload]
  
        return {
          ...state,
          donorList: newDonorList
        }
      }

      case FETCH_DONOR:{
        const donor= action.payload
        return {
          ...state,
          donorList: {
            ...state.donorList,
            [donor.id]: donor,
          
          }
        }
      }

      case SHOW_LOADER_DONOR: {
        return {
          ...state,
          isLoading:true,
        }
      }

      case HIDE_LOADER_DONOR: {
        return {
          ...state,
          isLoading:false,
        }
      }

      case SHOW_DONOR_MESSAGE: {
        return{
          ...state,
          status:{
            operationType:action.payload.operationType,
            verdict:action.payload.verdict,
          }
          
        }
      }
  
      case SET_DONOR_DISTRICT_FILTER: {
        return {
          ...state,
          districtFilter: action.payload
        }
      }      
          
        default:
          return state;
    }
  }

  export const getList = createSelector(
    state => state.donorList,

    donorList => getFilteredList(donorList)
  )
  export const getFilteredList = state => {
    if( state.districtFilter == "" ) return state.donorList;
    else {
      const newData = state.donorList.filter((item) => {
        return item.district == state.districtFilter;
      });
      return newData;
    }
  }
  
  export const getStatus = state => state.status

  export const getIsLoading = state => state.isLoading

  export const getDonor = (state,id) => state.donorList[id]
  


