// import logo from "../svg/nasa.svg";
import "../styles/header.css";
import nasapic from "../img/space.jpg";

const removeDivs = (div) => {
  let divToExclude = div;
  // let divArray = ["nasadiv", "dogdiv", "pokemondiv", "googlediv"];
  let divArray = ["nasadiv", "dogdiv"];
  let arrayWithoutExcludedDiv = [];
  divArray
    .filter((e) => e !== divToExclude)
    .map((e) => arrayWithoutExcludedDiv.push(e));

  arrayWithoutExcludedDiv.forEach((e) => {
    let divToRemove = document.getElementsByClassName(e);
    if (divToRemove[0].classList.contains(`${e}show`)) {
      divToRemove[0].classList.remove(`${e}show`);
    }
  });
  document.body.classList.remove(
    "bodybackgroundnasadiv",
    "bodybackgrounddogdiv",
    "bodybackgroundpokemondiv",
    "bodybackgroundgooglediv"
  );
  document.body.classList.add(`bodybackground${div}`);
  let divToShow = document.getElementsByClassName(div);
  divToShow[0].classList.add(`${div}show`);
};

const showHideDiv = (divClass) => {
  removeDivs(divClass);
  // if (divClass === "nasadiv") {
  //   // let dogDivToRemove = document.getElementsByClassName("dogdiv");
  //   // if (dogDivToRemove[0].classList.contains("dogdivshow")) {
  //   //   dogDivToRemove[0].classList.remove("dogdivshow");
  //   // }

  //   // let pokemonDivToRemove = document.getElementsByClassName("pokemondiv");
  //   // if (pokemonDivToRemove[0].classList.contains("pokemondivshow")) {
  //   //   pokemonDivToRemove[0].classList.remove("pokemondivshow");
  //   // }

  //   // let googleDivToRemove = document.getElementsByClassName("googlediv");
  //   // if (googleDivToRemove[0].classList.contains("googledivshow")) {
  //   //   googleDivToRemove[0].classList.remove("googledivshow");
  //   // }

  //   document.body.classList.remove(
  //     "bodybackgroundnasadiv",
  //     "bodybackgrounddogdiv",
  //     "bodybackgroundpokemondiv",
  //     "bodybackgroundgooglediv"
  //   );
  //   document.body.classList.add(`bodybackground${divClass}`);
  //   let divToShow = document.getElementsByClassName(divClass);
  //   divToShow[0].classList.add(`${divClass}show`);
  // } else if (divClass === "dogdiv") {
  //   let nasaDivToRemove = document.getElementsByClassName("nasadiv");
  //   if (nasaDivToRemove[0].classList.contains("nasadivshow")) {
  //     nasaDivToRemove[0].classList.remove("nasadivshow");
  //   }

  //   // let pokemonDivToRemove = document.getElementsByClassName("pokemondiv");
  //   // if (pokemonDivToRemove[0].classList.contains("pokemondivshow")) {
  //   //   pokemonDivToRemove[0].classList.remove("pokemondivshow");
  //   // }

  //   // let googleDivToRemove = document.getElementsByClassName("googlediv");
  //   // if (googleDivToRemove[0].classList.contains("googledivshow")) {
  //   //   googleDivToRemove[0].classList.remove("googledivshow");
  //   // }
  //   document.body.classList.remove(
  //     "bodybackgroundnasa",
  //     "bodybackgrounddog",
  //     "bodybackgroundpokemon",
  //     "bodybackgroundgoogle"
  //   );
  //   document.body.classList.add("bodybackgrounddog");
  //   let divToShow = document.getElementsByClassName(divClass);
  //   // divToShow[0].classList.add(`nasadivshow);

  //   // let divToShow = document.getElementsByClassName(divClass);
  //   // divToShow[0].classList.add("dogdivshow");
  // }
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
  showHideDiv(divToShow);
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
