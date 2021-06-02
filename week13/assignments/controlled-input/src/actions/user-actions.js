import { SET_USERNAME } from '../action-types/user-action-types';

export const setUserName = (dispatch) => {
    return dispatch ({ type: SET_USERNAME});
}

