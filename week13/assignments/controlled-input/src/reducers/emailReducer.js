import { SET_EMAIL } from "../action-types/email-action-type";

const initialState = "kjburdette2015@gmail.com";

const email = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return
        default:
            return state;
    }
}

export default email