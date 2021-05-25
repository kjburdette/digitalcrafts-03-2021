import React, { useState, useEffect } from 'react'
import Movie from './Movie'

export default function MovieContainer() {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");
    const [plot, setPlot] = useState("");
    const [userInput, setUserInput] = useState("");



    const getMovies = async () => {
        const response = await fetch(`http://www.omdbapi.com/?s=${userInput}&apikey=d77ac2f5`, {
            headers: { Accept: "application/json"},
        })
        const parsedData = await response.json();
        console.log(parsedData)
        setMovies(parsedData.Search)
    }

    // getMovies();
    
    return (
        <div className="MovieContainer">
            <h1>Movie Container</h1>
            <input type="text" value={userInput} placeholder="Search for a Movie" onChange={(e) => setUserInput(e.target.value)}/>
            <button onClick={() => getMovies()}>Search</button>
            <div className="SecondContainer">
                {movies.map(movie=> <Movie title={movie.Title} image={movie.Poster}/>)}
            </div>           
        </div>
    )
}
