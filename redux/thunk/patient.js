import {addPatient, hideLoaderPatient,showLoaderPatient } from '../action-creator/creator';

export async function addDonorThunk(dispatch, getState) {

    const isLoading = getState().donor.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderPatient())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderPatient())
        

        dispatch(addPatient(response))
  }
}