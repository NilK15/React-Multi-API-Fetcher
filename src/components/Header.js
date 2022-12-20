// import logo from "../svg/nasa.svg";
import "../styles/header.css";

const showHideDiv = (div) => {
  let nasa = document.getElementsByClassName("nasadiv");
  // let dog = document.getElementsByClassName("dogdic");
  // let pokemon = document.getElementsByClassName("pokemondiv");
  // let google = document.getElementsByClassName("googlediv");

  nasa[0].classList.remove("nasadivshow");
  // dog[0].classList.remove("dogdivshow");
  // pokemon[0].classList.remove("pokemondivshow");
  // google[0].classList.remove("googledivshow");
  let divToShow = document.getElementsByClassName(div);
  divToShow[0].classList.add("nasadivshow");
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
  console.log(buttons);
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
