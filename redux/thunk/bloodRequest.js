import { addBloodRequest, deleteBloodRequest, fetchBloodRequest, fetchBloodRequestList, hideLoaderBloodRequest, showLoaderBloodRequest, updateBloodRequest} from '../action-creator/creator';

export async function addBloodRequestThunk(dispatch, getState) {

    const isLoading = getState().bloodRequest.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderBloodRequest())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderBloodRequest())
        if(response.ok==true){
            dispatch(showMessage('bloodRequest','add','success'))
        }
        else{
            dispatch(showMessage('bloodRequest','add','failure'))
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
            dispatch(showMessage('bloodRequest','update','success'))
        }
        else{
            dispatch(showMessage('bloodRequest','update','failure'))
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
            dispatch(showMessage('bloodRequest','delete','success'))
        }
        else{
            dispatch(showMessage('bloodRequest','delete','failure'))
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