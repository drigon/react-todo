import React from "react";
import { useQuery } from "react-query";

export default function Pokemon() {

  const {
    data: pokemons,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery("pokemons", fetchPokemons);

  function fetchPokemons(params) {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200").then((response) =>
      response.json()
    );
  }

  return (
    <div>
      <h2>Reddit Api</h2>

      {isLoading && <div>Loading...</div>}

      {isSuccess && (
        <ul>
          {pokemons.results.map((poke) => (
            <li key={poke.name}>
              <a href='#'>{poke.name}</a>
            </li>
          ))}
        </ul>
      )}

      {isError && <div>{error.message}</div>}
    </div>
  );
}
