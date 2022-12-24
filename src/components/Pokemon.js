import "../styles/pokemon.css";

import { useState } from "react";

function Pokemon() {
  /* setState is async, which is why I was having issues trying to console.log
   state right after setting it.

   also, defining local variables doesn't work in react, as it doesn't keep track of those variables when they change.
   so, updating those variables, will not be reflected when rendering or printing to console, because react doesn't know those
   needed updating, so it uses w/e the inital value was.
   */
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [pokemonCardImages, setPokemonCardImages] = useState([]);
  const [selectedPokemonCard, setSelectedPokemonCard] =
    useState("nothing here yet");

  const fetchPokemonByPage = () => {
    console.log(`retrieving...`);
    let resultDiv = document.getElementsByClassName("pokemonresultgrid");
    resultDiv[0].style.color = "white";
    resultDiv[0].innerHTML = "Retrieving...";
    fetch(`https://api.pokemontcg.io/v2/cards?page=${page}`)
      .then((res) => res.json())
      .then((resJson) => {
        setPokemon(resJson.data);
        resJson.data.forEach((object) => {});
        resultDiv[0].innerHTML = "";
      });
  };

  // const selectedPokemon = () => {};

  return (
    <div className="pokemondiv">
      <div className="pokemonsidebar">
        <input className="searchQuery" placeholder="Search Pokemon..."></input>
        <button className="retrievecardsbutton" onClick={fetchPokemonByPage}>
          Retrieve Pokemon
        </button>
        <button className="pagepokemonbutton">Page of Pokemon</button>
      </div>
      <div className="pokemonresultgrid">
        {pokemon.map((e) => {
          return (
            <img
              className="pokemonCard"
              key={e.images.large}
              src={e.images.large}
              alt="no images"
              onClick={() =>
                setSelectedPokemonCard(
                  <img
                    className="selectedPokemonCard"
                    src={e.images.large}
                    alt="nothing to see here"
                  ></img>
                )
              }
            ></img>
          );
        })}
      </div>
      <div className="pokemonselected">{selectedPokemonCard}</div>
    </div>
  );
}

export default Pokemon;
