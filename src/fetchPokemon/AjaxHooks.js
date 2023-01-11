import React, { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   const getPokemon = async (url) => {
  //     let res = await fetch(url);
  //     let json = await res.json();
  //     console.log(json);
  //     json.results.forEach(async (el) => {
  //       let res = await fetch(url);
  //       let json = await res.json();
  //       console.log(json);
  //       let pokemon = {
  //         id: json.id,
  //         name: json.name,
  //         avatar: json.sprites.front_default
  //       };
  //       setPokemons((pokemons) => [...pokemons, pokemon]);
  //     });
  //   };
  //   getPokemon("https://pokeapi.co/api/v2/pokemon");
  // }, []);

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        json.results.forEach((el) => {
          fetch(el.url).then((res) =>
            res.json().then((json) => {
              // console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default
              };
              setPokemons((pokemons) => [...pokemons, pokemon]);
            })
          );
        });
      });
  }, []);

  return (
    <>
      <h3>Peticiones asíncronas con hooks</h3>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}
