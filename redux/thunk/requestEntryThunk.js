import {CREATE_REQUEST,SUCCESS_CREATE_REQUEST} from "../constants/constants";
import axios from "axios";

export const requestCreateThunkCreator = (organization) => 
    requestCreateThunk = (dispatch, getState) => {
        if (getState().requestList.isSaving == false ) {
        
            dispatch({type: CREATE_REQUEST});

            axios.post('/request/create', organization)
            .then(response => {
                dispatch({type: SUCCESS_CREATE_REQUEST, payload: response.data})
            })
            .catch(error => {
                console.log(error);
            })
        }
    }