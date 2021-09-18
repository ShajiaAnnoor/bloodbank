import { combineReducers } from "redux";
import subscriptionList from "./subscriptionlist";
import donorList from "./donorList";

const rootReducer = combineReducers({
    subscriptionList,
    donorList,
//    "updateDonors": updateDonors,

})

export default (state,action) => rootReducer(state,action);