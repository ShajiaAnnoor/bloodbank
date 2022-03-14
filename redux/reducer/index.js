import { combineReducers } from "redux";
import organization, * as fromOrganization from "./organization";
import patient, * as fromPatient from "./patient";
import donor, * as fromDonor from "./donor";
import bloodRequest, * as fromBloodRequest from "./bloodRequest";

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

export const getOrganizationList = state => fromOrganization.getList(state.organization)
export const getOrganizationStatus = state => fromOrganization.getStatus(state.organization)
export const getOrganizationIsLoading = state => fromOrganization.getIsLoading(state.organization)
export const getOrganization = state => fromOrganization.getDonor(state.organization)