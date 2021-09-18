import { FETCH_REQUEST_LIST, SET_REQUEST_LIST } from "../constants/constants"

import axios from "axios";
import {FETCH_REQUEST_LIST,SET_REQUEST_LIST} from "../constants/constants";


export const requestListThunk = (dispatch, getState) => {
    if (getState().requestList.isLoading == false ) {
        
        dispatch({type: FETCH_REQUEST_LIST});

        axios.get('/request/list', {
            params: {
                ID: 1,
            }
        })
        .then(response => {
            dispatch({type: SET_REQUEST_LIST, payload: response.data})
        })
        .catch(error => {
            console.log(error);
        })
    }
}