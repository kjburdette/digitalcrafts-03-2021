import React from 'react'
import { useSelector, useDispatch} from "react-redux";

export default function UserInfo() {
    const userName = useSelector(state => state.userName);
    return (
        <div>
            <h1>User Info</h1>
            <p>User Name: {userName}</p>
            <p>User Email: </p>
        </div>
    )
}
