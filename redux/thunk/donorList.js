import { FETCH_DONOR_LIST, SET_DONOR_LIST } from "../constants/constants"

import axios from "axios";
import {FETCH_DONOR_LIST,SET_DONOR_LIST} from "../constants/constants";


export const donorListThunk = (dispatch, getState) => {
    if (getState().donorList.isLoading == false ) {
        
        dispatch({type: FETCH_DONOR_LIST});

        axios.get('/donor/list', {
            params: {
                ID: 1,
            }
        })
        .then(response => {
            dispatch({type: SET_DONOR_LIST, payload: response.data})
        })
        .catch(error => {
            console.log(error);
        })
    }
}