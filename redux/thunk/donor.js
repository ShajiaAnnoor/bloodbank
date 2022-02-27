import { addDonor } from '../action-creator/creator';

export async function addDonorThunk(dispatch, getState) {

    const isLoading = getState().donor.isLoading;
    
    if(isLoading == false){
        dispatch(showLoader())
        const response = await client.get('/fakeApi/todos')
        dispatch(hideLoader())
        

        dispatch(addDonor(response))
  }
}