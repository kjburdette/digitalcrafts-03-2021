import {SET_USERNAME} from "../action-types/user-action-types";


const initialState ="Kendall";


const userName = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return
        default:
            return state;
    }
}

export default userName;