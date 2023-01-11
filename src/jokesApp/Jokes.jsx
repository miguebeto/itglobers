import React, { useState, useEffect } from "react";
import "./Jokes.scss";

export const Jokes = () => {
  const url = "https://api.chucknorris.io/jokes/random";
  const [isLoading, setIsLoading] = useState(true);
  const [joke, setJoke] = useState({});

  const getJoke = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.value);
    setJoke(data);
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      getJoke();
    }, 3000);
  }, []);

  return (
    <section className="jokes-sec --center-all">
      <div className="container joke --bg-light --card">
        <h2>Random Jokes Generator</h2>
        <img
          className="smiley"
          src="https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449_1280.png"
          alt="smaley"
        />
        <hr />
        {isLoading ? (
          <h3>"Loading...."</h3>
        ) : (
          <p className="--my2">{joke.value}</p>
        )}
        <button onClick={getJoke} className="--btn --btn-primary --btn-block">
          Generate New Joke
        </button>
      </div>
    </section>
  );
};
