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
        const response = await fetch(`http://www.omdbapi.com/?t=${userInput}&apikey=d77ac2f5`, {
            headers: { Accept: "application/json"},
        })
        const parsedData = await response.json();
        console.log(parsedData)
        // setMovies([{"title":parsedData.Title, "image":parsedData.Poster, "rating":parsedData.Rated, "plot":parsedData.Plot}])
        // console.log(setMovies)
        // setMovies([parsedData.Search])
        const Title = setTitle(parsedData.Title)
        setImage(parsedData.Poster)
        setRating(parsedData.Rated)
        setPlot(parsedData.Plot)
        movies.push(Title,image,rating,plot)
    }

    // getMovies();
    
    return (
        <div className="MovieContainer">
            <h1>Movie Container</h1>
            <input type="text" value={userInput} placeholder="Search for a Movie" onChange={(e) => setUserInput(e.target.value)}/>
            <button onClick={() => getMovies()}>Search</button>
            <Movie title={title} image={image} rating={rating} plot={plot}/>
        </div>
    )
}
