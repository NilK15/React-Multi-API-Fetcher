import { useState, useEffect } from "react";
import "../styles/dog.css";

function Dog() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchDogStuff();
  }, []);

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
      .then((res) => console.log(res));
    // .then((data) => setData(data));
  };

  return (
    <div className="dogdiv">
      <div className="dogimage">{/* <img src={data.} */}</div>
      <div className="doginfo">This will be the dog info stuffs!</div>
    </div>
  );
}

export default Dog;
