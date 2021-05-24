import React, { useState, useEffect } from "react";
import Jokes from "./Jokes";

export default function JokeContainer() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    getDadJokes();
  }, []);

  const getDadJokes = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    });
    const parsedData = await response.json();
    setJokes([...jokes, parsedData.joke]);
    jokes.push(parsedData.joke);
  };

  return (
    <div>
      <h1>JokeContainer</h1>

      <ul>
        {jokes.map((jokeFromCache) => (
          <Jokes joke={jokeFromCache} setJokes={setJokes} />
        ))}
      </ul>

      <button onClick={() => getDadJokes()}>New Joke</button>
      <button onClick={() => setJokes([])}>Clear</button>
    </div>
  );
}