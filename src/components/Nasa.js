import { useState } from "react";
import "../styles/nasa.css";
import nasaLogo from "../svg/nasa.svg";

function Nasa() {
  const [data, setData] = useState("");

  const fetchImage = () => {
    let nasaDateCollection = document.getElementsByClassName("nasadate");
    let nasaExplanationCollection =
      document.getElementsByClassName("nasaexplanation");
    let nasaImageCollection = document.getElementsByClassName("nasaimage");
    let nasaInfoCollection =
      document.getElementsByClassName("nasainfoinvisible");

    nasaDateCollection[0].classList.toggle("nasadate");
    nasaExplanationCollection[0].classList.toggle("nasaexplanation");
    nasaImageCollection[0].classList.toggle("nasaimage");

    nasaInfoCollection[0].classList.add("nasainfo");
    nasaInfoCollection[0].classList.toggle("nasainfoinvisible");

    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=jozRCXDTPwLMG0Q3Kw3mWpSfV5bVxzWLNj6q5TC2"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div className="nasadiv">
      <div className="logobuttondiv">
        <img className="nasaLogo" src={nasaLogo} alt="I'M LOADING RELAX!"></img>
        <button className="imagebutton" onClick={() => fetchImage()}>
          Image of the Day
        </button>
      </div>
      <div className="fetchedstuffdiv">
        <img
          className="nasaimage nasaimagedetails"
          src={data.url}
          alt="I'M LOADING RELAX!"
        ></img>
        <div className="nasainfoinvisible nasadatexp">
          <p className="nasadate">
            <strong>Date: </strong>
            {data.date}
          </p>
          <p className="nasaexplanation">
            <strong>Explanation: </strong>
            {data.explanation}
          </p>
        </div>
      </div>
      <div className="nasafooter">
        <a href="https://api.nasa.gov/">
          Made by using API found on https://api.nasa.gov/
        </a>
      </div>
      <div className="nasaauthor">Developed by: Sunil Khatri</div>
    </div>
  );
}

export default Nasa;
