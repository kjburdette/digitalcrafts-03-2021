import { combineReducers } from "redux";
import userName from './userReducer';
import email from './emailReducer'


const rootReducer = combineReducers({
    userName,
    email
});

export default rootReducer;