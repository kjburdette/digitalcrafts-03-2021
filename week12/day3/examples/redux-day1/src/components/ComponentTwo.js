import React from 'react'
import { useSelector, useDispatch } from "react-redux";


export default function ComponentTwo(props) {
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Component Two</h1>
            {/* <p>{counter}</p> */}
            <button onClick={() => dispatch({type:"ADD"})}>Add</button>
            <button onClick={() => dispatch({type:"SUBTRACT"})}>Subtract</button>
        </div>
    )
}
