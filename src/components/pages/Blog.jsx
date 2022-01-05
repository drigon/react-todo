import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reddit from "./Reddit";
import Pokemon from "./Pokemon";

export default function Blog() {
  const [redditVisible, setRedditVisible] = useState(false);
  const [pokemonVisible, setPokemonVisible] = useState(false);

  return (
    <div>
      <div className="container">
        <ul>
          <li>
            <Link to="/blog/1">POST 1</Link>
          </li>
          <li>
            <Link to="/blog/2">POST 2</Link>
          </li>
        </ul>

        <div>
          <div className="buttons">
            <button
              onClick={() =>
                setRedditVisible((prevRedditVisible) => !redditVisible)
              }
            >
              Toggle Reddit
            </button>
            <button
              onClick={() =>
                setPokemonVisible((prevPokemonVisible) => !pokemonVisible)
              }
            >
              Pokemons
            </button>
          </div>
        </div>

        {redditVisible && <Reddit />}
        {pokemonVisible && <Pokemon />}
      </div>
    </div>
  );
}
