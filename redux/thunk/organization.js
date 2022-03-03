import {  addOrganization, deleteOrganization, fetchOrganization, fetchOrganizationList, hideLoaderOrganization, showLoaderOrganization, updateOrganization } from '../action-creator/creator';

export async function addOrganizationThunk(dispatch, getState) {

    const isLoading = getState().organization.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderOrganization())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderOrganization())
        if(response.ok==true){
            dispatch(showSuccessMessage('organization','add','success'))
        }
        else{
            dispatch(showFailureMessage('organization','add','failure'))
        }
        
        dispatch(addOrganization(response))
  }
}

export async function fetchOrganizationListThunk(dispatch, getState) {

  const isLoading = getState().organization.isLoading;
  
  if(isLoading == false){
      dispatch(showLoaderOrganization())
      const response = await client.get('/fakeApi/todos')
      dispatch(hideLoaderOrganization())
      dispatch(fetchOrganizationList(response))
}
}

export async function updateOrganizationThunk(dispatch, getState) {

  const isLoading = getState().organization.isLoading;
  
  if(isLoading == false){
      dispatch(showLoaderOrganization())
      const response = await client.get('/fakeApi/todos')
      dispatch(hideLoaderOrganization())
      if(response.ok==true){
          dispatch(showSuccessMessage('organization','update','success'))
      }
      else{
          dispatch(showFailureMessage('organization','update','failure'))
      }
      dispatch(updateOrganization(response))
}
}

export async function deleteOrganizationThunk(dispatch, getState) {

    const isLoading = getState().organization.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderOrganization())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderOrganization())
        if(response.ok==true){
            dispatch(showSuccessMessage('organization','delete','success'))
        }
        else{
            dispatch(showFailureMessage('organization','delete','failure'))
        }
        dispatch(deleteOrganization(response))
  }
}

export async function fetchOrganizationThunk(dispatch, getState) {

    const isLoading = getState().organization.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderOrganization())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderOrganization())
        dispatch(fetchOrganization(response))
  }
}