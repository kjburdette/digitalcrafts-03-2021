import React from 'react'

export default function Movie(props) {
    return (
        <div>
            <h1>Movie</h1>
            <img src={props.image}/>
            <h3>Title</h3>
            <p>{props.title}</p>
            <h3>Rated</h3>
            <p>{props.rating}</p>
            <h3>Plot</h3>
            <p>{props.plot}</p>
        </div>
    )
}
