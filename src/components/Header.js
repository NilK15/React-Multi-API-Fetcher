// import logo from "../svg/nasa.svg";
import "../styles/header.css";
import nasapic from "../img/space.jpg";

const BODY_BACKGROUND_NASA_DIV = "bodybackgroundnasadiv";
const BODY_BACKGROUND_DOG_DIV = "bodybackgrounddogdiv";
const BODY_BACKGROUND_POKEMON_DIV = "bodybackgroundpokemondiv";
const BODY_BACKGROUND_GOOGLE_DIV = "bodybackgroundgooglediv";

const removeDivs = (div) => {
  // let divArray = ["nasadiv", "dogdiv", "pokemondiv", "googlediv"];
  let divArray = ["nasadiv", "dogdiv", "pokemondiv"];
  let arrayWithoutExcludedDiv = [];
  divArray.filter((e) => e !== div).map((e) => arrayWithoutExcludedDiv.push(e));
  console.log(arrayWithoutExcludedDiv);

  arrayWithoutExcludedDiv.forEach((e) => {
    let divToRemove = document.getElementsByClassName(e);
    if (divToRemove[0].classList.contains(`${e}show`)) {
      divToRemove[0].classList.remove(`${e}show`);
    }
  });
  document.body.classList.remove(
    BODY_BACKGROUND_NASA_DIV,
    BODY_BACKGROUND_DOG_DIV,
    BODY_BACKGROUND_POKEMON_DIV,
    BODY_BACKGROUND_GOOGLE_DIV
  );
  const pokestring = `bodybackground${div}`;
  document.body.classList.add(`bodybackground${div}`);
  let divToShow = document.getElementsByClassName(div);
  divToShow[0].classList.add(`${div}show`);
};

const hideShow = (innerHTML, divToShow) => {
  let buttons = document.getElementsByClassName("navbutton");
  for (const element of buttons) {
    if (element.innerHTML === innerHTML) {
      element.classList.add("selected");
    } else {
      element.classList.remove("selected");
    }
  }
  removeDivs(divToShow);
};

function Header() {
  return (
    <header className="Header">
      <div className="Header-title"> API Fetcher </div>
      <nav className="navbar">
        <button
          className="navbutton"
          onClick={() => hideShow("Nasa", "nasadiv")}
        >
          Nasa
        </button>
        <button className="navbutton" onClick={() => hideShow("Dog", "dogdiv")}>
          Dog
        </button>
        <button
          className="navbutton"
          onClick={() => hideShow("Pokemon", "pokemondiv")}
        >
          Pokemon
        </button>
        <button
          className="navbutton"
          onClick={() => hideShow("Google", "googlediv")}
        >
          Google
        </button>
      </nav>
    </header>
  );
}

export default Header;
