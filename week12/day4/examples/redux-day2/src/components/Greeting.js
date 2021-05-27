import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {changeFakeDataToJoe, changeGovOfficials, removeDogeLord} from '../actions/greetingActions';



export default function Greeting() {

    const fakeData = useSelector((state) => state.fakeData)
    const governmentOfficials = useSelector((state) => state.governmentOfficials )
    const celebrities = useSelector((state) => state.celebrities)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Hello Redux</h1>
            {fakeData.map((data) =>(
                <p>{data.userName}</p>
            ))}
            <button onClick={() => changeFakeDataToJoe (dispatch)}>Change to Joe</button>
            {governmentOfficials.map((govOfficial) => (
                <p>{govOfficial}</p>
            ))}
            <button onClick={() => changeGovOfficials (dispatch)}>Add Senator</button>
            {celebrities.map((celebrity) => (
                <p>{celebrity.name}</p>
            ))}
            <button onClick={() => removeDogeLord (dispatch)}>Remove The Doge Lord</button>
        </div>
    )
}
