import {CREATE_DONOR,SUCCESS_CREATE_DONOR} from "../constants/constants";
import axios from "axios";

export const donorCreateThunkCreator = (donor) => 
    donorCreateThunk = (dispatch, getState) => {
        if (getState().donorList.isSaving == false ) {
        
            dispatch({type: CREATE_DONOR});

            axios.post('/donor/create', donor)
            .then(response => {
                dispatch({type: SUCCESS_CREATE_DONOR, payload: response.data})
            })
            .catch(error => {
                console.log(error);
            })
        }
    }