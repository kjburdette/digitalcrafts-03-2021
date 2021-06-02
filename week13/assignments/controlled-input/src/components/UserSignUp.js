import React from 'react'
import { useSelector, useDispatch } from "react-redux";


export default function UserSignUp() {
    const userName = useSelector(state => state.userName);

    const handleSubmit = event =>{
        event.preventDefault();
    }
    return (
        <div>
            <h1>User Sign Up</h1>
            <form type="submit">
                <input type="text" placeholder="User Name"></input>
                <input type="text" placeholder="User Email"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}
