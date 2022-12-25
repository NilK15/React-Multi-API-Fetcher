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
  const [selectedPokemonCard, setSelectedPokemonCard] = useState(
    "Search then Select a Card to Magnify"
  );
  const [pokemonSearchValue, setPokemonSearchValue] = useState("charizard");
  const [flavorText, setFlavorText] = useState("No Text Available");
  const [artist, setArtist] = useState("");
  const [rarity, setRarity] = useState("");
  const [cardMarket, setCardMarket] = useState("");
  const [cardMarketUrl, setCardMarketUrl] = useState("");
  const [averageSellPrice, setAverageSellPrice] = useState("Not Available");

  const fetchPokemonByPage = () => {
    let resultDiv = document.getElementsByClassName("pokemonresultgrid");
    console.log(`retrieving...`);
    setRetrieving("Retrieving New Data Please Wait...");
    fetch(`https://api.pokemontcg.io/v2/cards?page=${page}`)
      .then((res) => res.json())
      .then((resJson) => {
        setPokemon(resJson.data);
        setRetrieving("");
      });
  };

  const fetchPokemonByName = () => {
    let resultDiv = document.getElementsByClassName("pokemonresultgrid");
    resultDiv[0].classList.add("pokemonresultgridshow");
    let instructionDiv = document.getElementsByClassName(
      "pokemonSearchInstruction"
    );
    instructionDiv[0].classList.add("pokemonSearchInstructionHide");
    console.log(`retrieving...`);
    setRetrieving("Retrieving New Data Please Wait...");
    fetch(`https://api.pokemontcg.io/v2/cards?q=name:${pokemonSearchValue}*`)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setPokemon(resJson.data);
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
      <div className="pokemonsidebarDiv">
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
      </div>
      <div className="pokemonSearchInstruction">
        <p>
          Type a Pokemon name, it doesn't have to be the whole name. Then...
        </p>
      </div>
      <div className="divSmallWidth">
        <div className="pokemonresultgrid">
          {retrieving}
          {pokemon.map((e) => {
            return (
              <img
                className="pokemonCard"
                key={e.images.large}
                src={e.images.large}
                alt="Not Available"
                onClick={() => {
                  let div = document.getElementsByClassName("pokemonselected");
                  let instructionDiv =
                    document.getElementsByClassName("instructionToClick");
                  div[0].classList.add("pokemonselectedshow");
                  instructionDiv[0].classList.add("instructionToClickHide");
                  setSelectedPokemonCard(
                    <img
                      className="selectedPokemonCard"
                      src={e.images.large}
                      alt="Nothing to Show!"
                    ></img>
                  );
                  setArtist(e.artist);
                  setCardMarket(e.cardMarket);
                  if (e.flavorText) {
                    setFlavorText(e.flavorText);
                  } else {
                    setFlavorText("No Description");
                  }
                  setRarity(e.rarity);
                  if (e.cardmarket.prices.averageSellPrice) {
                    setAverageSellPrice(
                      `\u20AC ${e.cardmarket.prices.averageSellPrice}`
                    );
                  } else {
                    setAverageSellPrice("No Pricing");
                  }
                  if (e.cardmarket.url) {
                    setCardMarketUrl(e.cardmarket.url);
                    console.log(e.cardmarket.url);
                  } else {
                    setCardMarketUrl("No Market Link Provided");
                  }
                }}
              ></img>
            );
          })}
        </div>
        <div className="instructionToClick">
          <p> ...Click one of the cards to get more information!</p>
        </div>
        <div className="pokemonselected">
          <div className="pokemonselectedDiv">
            <div className="pokemonItself">{selectedPokemonCard}</div>
            <blockquote className="flavorText">{flavorText}</blockquote>
            <div className="pokemonInfo">
              <div className="pokemonSubInfoDiv">
                <div className="pokemonSubInfo">
                  <p>Avg Sale:</p>
                  <p> {averageSellPrice}</p>
                  <a
                    href={cardMarketUrl}
                    target="_blank"
                    className="marketLink"
                  >
                    Link to Market
                  </a>
                </div>
                <div className="pokemonSubInfo">
                  <p>Artist:</p>
                  <p>{artist}</p>
                </div>
                <div className="pokemonSubInfo">
                  <p>Rarity:</p>
                  <p>{rarity}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pokemonfooter">
        <a href="https://thedogapi.com/">
          Made by using API found on https://dev.pokemontcg.io/
        </a>
      </div>
      <div className="pokemonauthor">Developed by: Sunil Khatri</div>
    </div>
  );
}

export default Pokemon;
