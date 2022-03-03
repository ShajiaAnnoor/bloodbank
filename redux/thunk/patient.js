import {addPatient, deletePatient, fetchPatient, fetchPatientList, hideLoaderPatient,showLoaderPatient, updatePatient } from '../action-creator/creator';

export async function addPatientThunk(dispatch, getState) {

    const isLoading = getState().donor.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderPatient())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderPatient())
        if(response.ok==true){
            dispatch(showSuccessMessage('patient','add','success'))
        }
        else{
            dispatch(showFailureMessage('patient','add','failure'))
        }
        

        dispatch(addPatient(response))
  }
}

export async function fetchPatientListThunk(dispatch, getState) {

  const isLoading = getState().patient.isLoading;
  
  if(isLoading == false){
      dispatch(showLoaderPatient())
      const response = await client.get('/fakeApi/todos')
      dispatch(hideLoaderPatient())
      dispatch(fetchPatientList(response))
}
}

export async function updatePatientThunk(dispatch, getState) {

  const isLoading = getState().patient.isLoading;
  
  if(isLoading == false){
      dispatch(showLoaderPatient())
      const response = await client.get('/fakeApi/todos')
      dispatch(hideLoaderPatient())
      if(response.ok==true){
          dispatch(showSuccessMessage('patient','update','success'))
      }
      else{
          dispatch(showFailureMessage('patient','update','failure'))
      }
      dispatch(updatePatient(response))
}
}

export async function deletePatientThunk(dispatch, getState) {

    const isLoading = getState().patient.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderPatient())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderPatient())
        if(response.ok==true){
            dispatch(showSuccessMessage('patient','delete','success'))
        }
        else{
            dispatch(showFailureMessage('patient','delete','failure'))
        }
        dispatch(deletePatient(response))
  }
}

export async function fetchPatientThunk(dispatch, getState) {

    const isLoading = getState().patient.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderPatient())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderPatient())
        dispatch(fetchPatient(response))
  }
}