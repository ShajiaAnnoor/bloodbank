import { combineReducers } from "redux";
import subscriptionList from "./subscriptionlist";
import donorList from "./donorList";
import patientList from  "./patientList";

const rootReducer = combineReducers({
    subscriptionList,
    donorList,
    patientList,
//    "updateDonors": updateDonors,

})

export default (state,action) => rootReducer(state,action);