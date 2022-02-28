import {  addOrganization, hideLoaderOrganization, showLoaderOrganization } from '../action-creator/creator';

export async function addOrganizationThunk(dispatch, getState) {

    const isLoading = getState().organization.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderOrganization())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderOrganization())
        
        dispatch(addOrganization(response))
  }
}