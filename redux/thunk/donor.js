import { addDonor, deleteDonor, fetchDonor, fetchDonorList, hideLoaderDonor, showLoaderDonor, updateDonor } from '../action-creator/creator';

export async function addDonorThunk(dispatch, getState) {

    const isLoading = getState().donor.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderDonor())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderDonor())
        if(response.ok==true){
            dispatch(showMessage('donor','add','success'))
        }
        else{
            dispatch(showMessage('donor', 'add','failure'))
        }
        

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

export async function updateDonorThunk(dispatch, getState) {

  const isLoading = getState().donor.isLoading;
  
  if(isLoading == false){
      dispatch(showLoaderDonor())
      const response = await client.get('/fakeApi/todos')
      dispatch(hideLoaderDonor())
      if(response.ok==true){
          dispatch(showMessage('donor','update','success'))
      }
      else{
          dispatch(showMessage('donor', 'update','failure'))
      }
      dispatch(updateDonor(response))
}
}

export async function deleteDonorThunk(dispatch, getState) {

    const isLoading = getState().donor.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderDonor())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderDonor())
        if(response.ok==true){
            dispatch(showMessage('donor','delete','success'))
        }
        else{
            dispatch(showMessage('donor','delete','failure'))
        }
        dispatch(deleteDonor(response))
  }
}

export async function fetchDonorThunk(dispatch, getState) {

    const isLoading = getState().donor.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderDonor())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderDonor())
        dispatch(fetchDonor(response))
  }
}