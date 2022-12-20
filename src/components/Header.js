// import logo from "../svg/nasa.svg";
import "../styles/header.css";

const changeBG = (value) => {
  let buttons = document.getElementsByClassName("navbutton");
  for (const element of buttons) {
    element.classList.remove("selected");
    if (element.innerHTML === value) {
      element.classList.add("selected");
    }
    // if (element.getAttribute("innerHTML") == "Dog") {
    //   buttons[0].classList.add("selected");
    // }
  }
};

function Header() {
  return (
    <header className="Header">
      <div className="Header-title"> API Fetcher </div>
      <nav className="navbar">
        <button className="navbutton" onClick={() => changeBG("Nasa")}>
          Nasa
        </button>
        <button className="navbutton" onClick={() => changeBG("Dog")}>
          Dog
        </button>
        <button className="navbutton" onClick={() => changeBG("Pokemon")}>
          Pokemon
        </button>
        <button className="navbutton" onClick={() => changeBG("Google")}>
          Google
        </button>
      </nav>
    </header>
  );
}

export default Header;
