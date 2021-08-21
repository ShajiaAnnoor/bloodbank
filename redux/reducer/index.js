import { combineReducers } from "redux";
import subscriptionList from "./subscriptionlist";

const rootReducer = combineReducers({
    "subscriptionList" : subscriptionList,
})

export default (state,action) => rootReducer(state,action);