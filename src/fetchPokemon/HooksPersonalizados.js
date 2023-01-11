import React from "react";
import { useFetch } from "../hooks/useFetch";

function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon";
  // url = "https://jsonplaceholder.typicode.com/users";
  const { data, error, loading } = useFetch(url);
  // console.log(useFetch());

  return (
    <>
      <h2>Hooks Personalizados</h2>
      <h3>{JSON.stringify(loading)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        <pre>
          <code>{JSON.stringify(data, null, 3)}</code>
        </pre>
      </h3>
    </>
  );
}

export default HooksPersonalizados;
