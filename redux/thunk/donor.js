import { addDonor, hideLoaderDonor, showLoaderDonor } from '../action-creator/creator';

export async function addDonorThunk(dispatch, getState) {

    const isLoading = getState().donor.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderDonor())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderDonor())
        

        dispatch(addDonor(response))
  }
}

export async function fetchDonorListThunk(dispatch, getState) {

  const isLoading = getState().donor.isLoading;
  
  if(isLoading == false){
      dispatch(showLoaderDonor())
      const response = await client.get('/fakeApi/todos')
      dispatch(hideLoaderDonor())
      dispatch(fetchDonorList(response))
}
}