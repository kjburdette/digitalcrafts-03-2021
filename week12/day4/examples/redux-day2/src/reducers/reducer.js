import { INSERT_FAKE_JOE, CHANGE_GOV_OFFICIAL, REMOVE_DOGE_LORD } from '../action-types/action-types'

const initialstate = {
    fakeData: [ {userName: "Kendall", height: "8ft"}],
    governmentOfficials: ["Mayor", "VP", "Secretary of Treasury"],
    celebrities: [
        {
            name:"Elon Musk",
        },
        {
            name: "Sam Elliot",
        },
        {
            name: "Mark Zucky",
        }
    ]
}

const reducer = (state=initialstate, action) => {
    switch (action.type){
        case INSERT_FAKE_JOE:
            return {...state, fakeData: [{userName: "Joe", height: "7.1"}]}
        case CHANGE_GOV_OFFICIAL:
            return {...state, governmentOfficials: [...state.governmentOfficials, "Senator"]}
        case REMOVE_DOGE_LORD:
            const newCelebs = state.celebrities.filter(celebrity => celebrity.name !== "Elon Musk")
            return {...state, celebrities: newCelebs}
        default:
            return state;
    }
}

export default reducer;