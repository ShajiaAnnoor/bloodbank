import { FETCH_PATIENT_LIST, SET_PATIENT_LIST } from "../constants/constants"

import axios from "axios";
import {FETCH_PATIENT_LIST,SET_PATIENT_LIST} from "../constants/constants";


export const patientListThunk = (dispatch, getState) => {
    if (getState().patientList.isLoading == false ) {
        
        dispatch({type: FETCH_PATIENT_LIST});

        axios.get('/patient/list', {
            params: {
                ID: 1,
            }
        })
        .then(response => {
            dispatch({type: SET_PATIENT_LIST, payload: response.data})
        })
        .catch(error => {
            console.log(error);
        })
    }
}