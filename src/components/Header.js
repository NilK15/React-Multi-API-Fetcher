// import logo from "../svg/nasa.svg";
import "../styles/header.css";
import nasapic from "../img/space.jpg";

const showHideDiv = (divClass) => {
  if (divClass === "nasadiv") {
    document.body.classList.add("bodybackgroundnasa");
    let nasa = document.getElementsByClassName("nasadiv");
    nasa[0].classList.remove("nasadivshow");
    let divToShow = document.getElementsByClassName(divClass);
    divToShow[0].classList.add("nasadivshow");
  }
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
