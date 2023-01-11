import React, { useEffect, useState } from "react";

const Prueba = () => {
  const GYPHY_API_KEY = "bu4fgAKUjH0gKucz79CR1tV0GWDusAn8";
  const [cat, setCat] = useState("");
  const [words, setWords] = useState("");
  const [catGif, setCatGif] = useState("");
  const callGiphyAPI = (string) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GYPHY_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCatGif(data.data[0].images.original.url);
      });
  };
  const callApi = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setCat(data.fact);
        callGiphyAPI(data.fact.split(" ").slice(0, 3).join(" "));
        setWords(data.fact.split(" ", 3).join(" "));
      });
  };

  useEffect(callApi, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px"
        }}
      >
        <img
          src={catGif}
          alt="img no found"
          style={{ objectFit: "contain", width: "300px", height: "200px" }}
        />
        <h2>{cat}</h2>
      </div>
      <h2>{words}</h2>
    </>
  );
};

export default Prueba;
