import "../styles/pokemon.css";

import { useState } from "react";

function Pokemon() {
  return (
    <div className="pokemondiv">
      <div className="pokemonsidebar">
        <input className="searchQuery" placeholder="Search Pokemon..."></input>
        <button className="retrievecardsbutton">Retrieve Pokemon</button>
        <button className="pagepokemonbutton">Page of Pokemon</button>
      </div>
      <div className="pokemonresultgrid"></div>
      <div className="pokemonselected"></div>
    </div>
  );
}

export default Pokemon;
