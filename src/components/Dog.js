import { useState } from "react";
import "../styles/dog.css";

function Dog() {
  const [dogData, setDogData] = useState(["I'll be getting replaced :)"]);
  const [dogName, setDogName] = useState("");
  const [dogError, setError] = useState("");

  const fetchDogStuff = () => {
    // let nasaDateCollection = document.getElementsByClassName("nasadate");
    // let nasaExplanationCollection =
    //   document.getElementsByClassName("nasaexplanation");
    // let nasaImageCollection = document.getElementsByClassName("nasaimage");
    // let nasaInfoCollection =
    //   document.getElementsByClassName("nasainfoinvisible");

    // nasaDateCollection[0].classList.toggle("nasadate");
    // nasaExplanationCollection[0].classList.toggle("nasaexplanation");
    // nasaImageCollection[0].classList.toggle("nasaimage");

    // nasaInfoCollection[0].classList.add("nasainfo");
    // nasaInfoCollection[0].classList.toggle("nasainfoinvisible");

    fetch(
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
      {
        headers: {
          "x-api-key":
            "live_9YenUrdQQOoqV2HwOtgLRBIu815GK4NvfUtG7CUurW3484RGPZI8JTgQB5nA5ffa",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setDogData(data);
        setDogName(data[0].breeds[0].name);
      })
      .catch((error) => setError(error));
  };

  return (
    <div className="dogdiv">
      <button
        className="dogbutton"
        onClick={() => {
          fetchDogStuff();
        }}
      >
        Retrieve Doge
      </button>
      <img
        className="dogimage"
        src={dogData[0].url}
        alt="Nothing to see here!"
      ></img>
      <div className="doginfo">
        This will be the dog info stuffs!
        <p>
          <strong>Height: </strong> {dogName}
        </p>
      </div>
    </div>
  );
}

export default Dog;
