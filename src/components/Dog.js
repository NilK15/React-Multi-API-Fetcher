import { useState } from "react";
import "../styles/dog.css";

function Dog() {
  const [dogData, setDogData] = useState(["I'll be getting replaced :)"]);
  const [dogName, setDogName] = useState("");
  const [dogHeight, setDogHeight] = useState("");
  const [dogWeight, setDogWeight] = useState("");
  const [dogBredFor, setDogBredFor] = useState("Not Supplied by API");
  const [dogLife, setDogLife] = useState("");
  const [dogTemperament, setDogTemperament] = useState("");
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
        setDogHeight(data[0].breeds[0].height.metric);
        setDogWeight(data[0].breeds[0].weight.metric);
        setDogTemperament(data[0].breeds[0].temperament);
        setDogLife(data[0].breeds[0].life_span);
        setDogBredFor(data[0].breeds[0].bred_for);
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
            <strong>Height: </strong> {dogHeight} "
          </p>
          <p>
            <strong>Weight: </strong> {dogWeight} lbs
          </p>
          <p>
            <strong>Life Span: </strong> {dogLife}
          </p>
          <p>
            <strong>Bred For: </strong> {dogBredFor}
          </p>
          <p>
            <strong>Temperament: </strong> {dogTemperament}
          </p>
        </div>
      </div>
      <div className="dogfooter">
        <a href="https://thedogapi.com/">
          Made by using API found on https://thedogapi.com/
        </a>
      </div>
      <div className="dogauthor">Developed by: Sunil Khatri</div>
    </div>
  );
}

export default Dog;
