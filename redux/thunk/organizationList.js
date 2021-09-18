import { FETCH_ORGANIZATION_LIST, SET_ORGANIZATION_LIST } from "../constants/constants"

import axios from "axios";
import {FETCH_ORGANIZATION_LIST,SET_ORGANIZATION_LIST} from "../constants/constants";


export const organizationListThunk = (dispatch, getState) => {
    if (getState().organizationList.isLoading == false ) {
        
        dispatch({type: FETCH_ORGANIZATION_LIST});

        axios.get('/organization/list', {
            params: {
                ID: 1,
            }
        })
        .then(response => {
            dispatch({type: SET_ORGANIZATION_LIST, payload: response.data})
        })
        .catch(error => {
            console.log(error);
        })
    }
}