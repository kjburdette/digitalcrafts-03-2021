import React from 'react'

export default function Movie(props) {
    return (
        <div className="Poster">
            <img src={props.image}/>
            <h3>{props.title}</h3>
        </div>
    )
}
