import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {changeUserName} from '../actions/UserNameAction';

export default function UserName() {

    const name = useSelector((state) => state.name);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>User Name</h1>
            <p>{name}</p>
            <button onClick={() => changeUserName(dispatch)}>Change</button>
        </div>
    )
}
