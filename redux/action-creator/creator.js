import {
    SET_LiST,
} from "../constants/constants";

export const setList = function(data) {
    return {type: SET_LIST, data: data};
}