import React, { useState, useEffect } from "react";

export const FetchGiphy = () => {
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(true); //Estado que simula la carga de los gift

  const api_key = "bu4fgAKUjH0gKucz79CR1tV0GWDusAn8";

  //promesa sin el uso de async(convierte la funcion en una promesa)
  const getImagenPromesa = () =>
    new Promise((resolve) => resolve("https://adjisajfjk.com"));
  getImagenPromesa().then(console.log);

  //promesa con el uso de async(convierte la funcion en una promesa)
  const getImagen = async () => "https://adjisajfjk.com";
  getImagen().then(console.log);

  //promesa con el uso de fetch
  const peticion = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
  );
  peticion
    .then((res) => res.json())
    .then(({ data }) => {
      const { url } = data.images.original;
    })
    .catch(console.warn);

  //promesa con el uso de fetch y async y await(espera que se cumpla la promesa antes de ejcutar la siguiente linea)
  const getImagenAsync = async () => {
    setLoading(true);
    try {
      const resp = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
      );
      const { data } = await resp.json();
      const { url } = data.images.original;
      console.log(url);
      setState(url);
      setLoading(false);
    } catch (error) {
      //manejo del error
      console.error(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getImagenAsync();
    }, 4000);
  }, []);

  return (
    <>
      <h2>Fetch Giphy</h2>
      {loading ? (
        <h3>"Loading...."</h3>
      ) : (
        <img src={state} alt="imagen_giphy" />
      )}
    </>
  );
};
