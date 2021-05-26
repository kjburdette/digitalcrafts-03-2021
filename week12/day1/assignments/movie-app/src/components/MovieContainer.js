import React, { useState } from 'react'
import Movie from './Movie'
import api_key from '../Secret';

export default function MovieContainer() {
    const [movies, setMovies] = useState([]);
    const [userInput, setUserInput] = useState("");
    const API = api_key

    const getMovies = async () => {
        const response = await fetch(`http://www.omdbapi.com/?s=${userInput}&apikey=${API}`, {
            headers: { Accept: "application/json"},
        })
        const parsedData = await response.json();
        setMovies(parsedData.Search)
    }
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
