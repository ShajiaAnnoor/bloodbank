import {CREATE_ORGANIZATION,SUCCESS_CREATE_ORGANIZATION} from "../constants/constants";
import axios from "axios";

export const organizationCreateThunkCreator = (organization) => 
    organizationCreateThunk = (dispatch, getState) => {
        if (getState().organizationList.isSaving == false ) {
        
            dispatch({type: CREATE_ORGANIZATION});

            axios.post('/organization/create', organization)
            .then(response => {
                dispatch({type: SUCCESS_CREATE_ORGANIZATION, payload: response.data})
            })
            .catch(error => {
                console.log(error);
            })
        }
    }