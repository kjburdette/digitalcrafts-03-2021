import { CHANGE_USERNAME } from '../action-types/action-types';

const initialState = {
    name: "Kendall",
    count: 0
}



function rootReducer(state = initialState, action){
    switch (action.type){
        case CHANGE_USERNAME:
            return {...state, name: "Joe"};
        default:
            return state;
    }    
}

export default rootReducer;