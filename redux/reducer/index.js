import { combineReducers } from "redux";
import donor from "./donor";
import organization from "./organization";
import patient from "./patient";
import subscriptionList from "./subscriptionlist";

const rootReducer = combineReducers({
    "subscriptionList" : subscriptionList,
    "bloodRequest" : bloodRequest,
    "donor" : donor,
    "organization" : organization,
    "patient" : patient,

})

export default (state,action) => rootReducer(state,action);