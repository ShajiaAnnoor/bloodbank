import { combineReducers } from "redux";
import donor from "./donor";
import organization from "./organization";
import patient from "./patient";
import subscriptionList from "./subscriptionlist";
import donor, * as fromDonor from "./donor";

const rootReducer = combineReducers({
    "bloodRequest" : bloodRequest,
    "donor" : donor,
    "organization" : organization,
    "patient" : patient,

})

export default (state,action) => rootReducer(state,action);

export const getDonorList = state => fromDonor.getList(state.donor)
export const getDonorStatus = state => fromDonor.getStatus(state.donor)
export const getDonorIsLoading = state => fromDonor.getIsLoading(state.donor)
export const getDonor = state => fromDonor.getDonor(state.donor)

export const getPatientList = state => fromPatient.getList(state.patient)
export const getPatientStatus = state => fromPatient.getStatus(state.patient)
export const getPatientIsLoading = state => fromPatient.getIsLoading(state.patient)
export const getPatient = state => fromPatient.getDonor(state.patient)

export const getBloodRequestList = state => fromBloodRequest.getList(state.bloodRequest)
export const getBloodRequestStatus = state => fromBloodRequest.getStatus(state.bloodRequest)
export const getBloodRequestIsLoading = state => fromBloodRequest.getIsLoading(state.bloodRequest)
export const getBloodRequest = state => fromBloodRequest.getBloodRequest(state.bloodRequest)

export const getDonorList = state => fromDonor.getList(state.organization)
export const getDonorStatus = state => fromDonor.getStatus(state.organization)
export const getDonorIsLoading = state => fromDonor.getIsLoading(state.organization)
export const getDonor = state => fromDonor.getDonor(state.organization)