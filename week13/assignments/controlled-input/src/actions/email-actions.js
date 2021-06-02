import { SET_EMAIL } from '../action-types/user-action-types';

export const setEmail = (dispatch) => {
    return dispatch ({ type: SET_EMAIL})
}