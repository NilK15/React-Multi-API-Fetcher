import { useState } from "react";
import "../styles/dog.css";

function Dog() {
  const [dogData, setDogData] = useState(["I'll be getting replaced :)"]);
  const [dogName, setDogName] = useState("");
  const [dogHeight, setDogHeight] = useState("");
  const [dogWeight, setDogWeight] = useState("");
  const [dogBredFor, setDogBredFor] = useState("");
  const [dogLife, setDogLife] = useState("");
  const [dogTempArray, setDogTempArray] = useState("");
  const [dogError, setError] = useState("");

  const fetchDogStuff = () => {
    let divToHideShowColletion =
      document.getElementsByClassName("fetcheddogstuff");
    divToHideShowColletion[0].classList.add("fetcheddogstuffshow");

    console.log(divToHideShowColletion);
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
        Retrieve "The Doge"
      </button>
      <div className="fetcheddogstuff">
        <div className="divtocenterimage">
          <img
            className="dogimage"
            src={dogData[0].url}
            alt="Nothing to see here!"
          ></img>
        </div>
        <div className="doginfo">
          <p>
            <strong>Breed Name: </strong> {dogName}
          </p>
          <p>
            <strong>Height: </strong> {dogName}
          </p>
          <p>
            <strong>Weight: </strong> {dogName}
          </p>
          <p>
            <strong>Temperament: </strong> {dogName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dog;
