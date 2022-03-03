import { addBloodRequest, deleteBloodRequest, fetchBloodRequest, fetchBloodRequestList, hideLoaderBloodRequest, showLoaderBloodRequest, updateBloodRequest} from '../action-creator/creator';

export async function addBloodRequestThunk(dispatch, getState) {

    const isLoading = getState().bloodRequest.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderBloodRequest())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderBloodRequest())
        if(response.ok==true){
            dispatch(showMessage())
        }
        else{
            dispatch(showMessage())
        }
        dispatch(addBloodRequest(response))
  }
}

export async function fetchBloodRequestListThunk(dispatch, getState) {

    const isLoading = getState().bloodRequest.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderBloodRequest())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderBloodRequest())
        dispatch(fetchBloodRequestList(response))
  }
}

export async function updateBloodRequestThunk(dispatch, getState) {

    const isLoading = getState().bloodRequest.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderBloodRequest())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderBloodRequest())
        if(response.ok==true){
            dispatch(showMessage())
        }
        else{
            dispatch(showMessage())
        }
        dispatch(updateBloodRequest(response))
  }
}


export async function deleteBloodRequestThunk(dispatch, getState) {

    const isLoading = getState().bloodRequest.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderBloodRequest())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderBloodRequest())
        if(response.ok==true){
            dispatch(showMessage())
        }
        else{
            dispatch(showMessage())
        }
        dispatch(deleteBloodRequest(response))
  }
}



export async function fetchBloodRequestThunk(dispatch, getState) {

    const isLoading = getState().bloodRequest.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderBloodRequest())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderBloodRequest())
        dispatch(fetchBloodRequest(response))
  }
}