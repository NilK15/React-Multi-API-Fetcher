import "../styles/pokemon.css";

import { useState } from "react";

function Pokemon() {
  /* setState is async, which is why I was having issues trying to console.log
   state right after setting it.

   also, defining local variables doesn't work in react, as it doesn't keep track of those variables when they change.
   so, updating those variables, will not be reflected when rendering or printing to console, because react doesn't know those
   needed updating, so it uses w/e the inital value was.
   */

  const [retrieving, setRetrieving] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [pokemonCardImages, setPokemonCardImages] = useState([]);
  const [selectedPokemonCard, setSelectedPokemonCard] = useState("");
  const [pokemonSearchValue, setPokemonSearchValue] = useState("charizard");

  const fetchPokemonByPage = () => {
    let resultDiv = document.getElementsByClassName("pokemonresultgrid");
    console.log(`retrieving...`);
    setRetrieving("Retrieving...");
    fetch(`https://api.pokemontcg.io/v2/cards?page=${page}`)
      .then((res) => res.json())
      .then((resJson) => {
        setPokemon(resJson.data);
        setRetrieving("");
      });
  };

  const fetchPokemonByName = () => {
    let resultDiv = document.getElementsByClassName("pokemonresultgrid");
    console.log(`retrieving...`);
    setRetrieving("Retrieving...");
    fetch(`https://api.pokemontcg.io/v2/cards?q=name:${pokemonSearchValue}*`)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setPokemon(resJson.data);
        setSelectedPokemonCard("Select a Card");
        setRetrieving("");
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchPokemonByName();
    }
  };

  return (
    <div className="pokemondiv">
      <div className="pokemonsidebar">
        <input
          className="searchQuery"
          placeholder="Search Pokemon..."
          onKeyDown={handleKeyDown}
          onChange={(element) => {
            setPokemonSearchValue(element.target.value);
          }}
        ></input>
        <button className="retrievecardsbutton" onClick={fetchPokemonByName}>
          Retrieve Pokemon
        </button>
        <button className="pagepokemonbutton" onClick={fetchPokemonByPage}>
          Page of Pokemon
        </button>
      </div>
      <div className="pokemonresultgrid">
        {retrieving}
        {pokemon.map((e) => {
          return (
            <img
              className="pokemonCard"
              key={e.images.large}
              src={e.images.large}
              alt="Not Available"
              onClick={() =>
                setSelectedPokemonCard(
                  <img
                    className="selectedPokemonCard"
                    src={e.images.large}
                    alt="Nothing to Show!"
                  ></img>
                )
              }
            ></img>
          );
        })}
      </div>
      <div className="pokemonselected">
        <div className="pokemonselectedDiv">{selectedPokemonCard}</div>
      </div>
    </div>
  );
}

export default Pokemon;
