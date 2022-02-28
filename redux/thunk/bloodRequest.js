import { addBloodRequest, fetchBloodRequest, hideLoaderBloodRequest, showLoaderBloodRequest} from '../action-creator/creator';

export async function addBloodRequestThunk(dispatch, getState) {

    const isLoading = getState().bloodRequest.isLoading;
    
    if(isLoading == false){
        dispatch(showLoaderBloodRequest())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoaderBloodRequest())
        

        dispatch(addBloodRequest(response))
  }
}

