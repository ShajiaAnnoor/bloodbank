import { combineReducers } from "redux";
import subscriptionList from "./subscriptionlist";
import donorList from "./donorList";
import patientList from  "./patientList";
import organizationList from "./organizationLIst";
import requestList from "./requestList";

const rootReducer = combineReducers({
    subscriptionList,
    donorList,
    patientList,
    organizationList,
    requestList,
//    "updateDonors": updateDonors,
})

export default (state,action) => rootReducer(state,action);