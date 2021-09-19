import {CREATE_PATIENT,SUCCESS_CREATE_PATIENT} from "../constants/constants";
import axios from "axios";

export const patientCreateThunkCreator = (organization) => 
    patientCreateThunk = (dispatch, getState) => {
        if (getState().patientList.isSaving == false ) {
        
            dispatch({type: CREATE_PATIENT});

            axios.post('/patient/create', organization)
            .then(response => {
                dispatch({type: SUCCESS_CREATE_PATIENT, payload: response.data})
            })
            .catch(error => {
                console.log(error);
            })
        }
    }