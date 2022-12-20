import { useState } from "react";
import "../styles/nasa.css";

const changeBG = () => {
  let x = document.getElementsByClassName("Header");
  x[0].classList.add("show");
};

function Nasa() {
  const [data, setData] = useState("");

  const fetchImage = () => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=jozRCXDTPwLMG0Q3Kw3mWpSfV5bVxzWLNj6q5TC2"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div className="nasadiv">
      <button className="imagebutton" onClick={() => fetchImage()}>
        Image of the Day
      </button>
      <img className="nasaimage" src={data.url} alt="nothing here"></img>
    </div>
  );
}

export default Nasa;
