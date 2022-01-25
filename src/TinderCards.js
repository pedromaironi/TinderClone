import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import CheckCircle from "@material-ui/icons/CheckCircle";
import { blue } from "@material-ui/core/colors";
import SwipeButtons from "./SwipeButtons";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Pedro M. Toribio",
      description: "ig: pedro.marioni",
      age: 21,
      url: "https://scontent.fpop1-1.fna.fbcdn.net/v/t39.30808-6/252856266_4652737608118304_1175916575189575039_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH2VApptbUHdY8wa5thKu1CxKuY5VTOxKTEq5jlVM7EpMeF-W0dBqLljkMiE2H4UTej-B7PDxZ7ZkU9nQJBivJ1&_nc_ohc=jgdiZ2FaPQwAX_5dF-2&_nc_oc=AQn8XQLRczFEXzFtniIe6rw6Ye1UYhV0lVm8dtoGWFxEDgIo_zsGQSlxzulTa9eBXwY&_nc_ht=scontent.fpop1-1.fna&oh=00_AT_sO2Pm7t1mJgN56E7EJ0HEW06pwnsKmoUW6lHBl3Weeg&oe=61F3E693",
    },
    {
      name: "Felipe Fernandez",
      description: "Si me ves como un objeto sexual no me escribas.",
      age: 24,
      url: "https://media.discordapp.net/attachments/725519723911053333/935277392417681478/unknown.png?width=424&height=566",
    },
    {
      name: "Pedro M. Toribio",
      description: "ig: pedro.marioni",
      age: 21,
      url: "https://scontent.fpop1-1.fna.fbcdn.net/v/t39.30808-6/252856266_4652737608118304_1175916575189575039_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH2VApptbUHdY8wa5thKu1CxKuY5VTOxKTEq5jlVM7EpMeF-W0dBqLljkMiE2H4UTej-B7PDxZ7ZkU9nQJBivJ1&_nc_ohc=jgdiZ2FaPQwAX_5dF-2&_nc_oc=AQn8XQLRczFEXzFtniIe6rw6Ye1UYhV0lVm8dtoGWFxEDgIo_zsGQSlxzulTa9eBXwY&_nc_ht=scontent.fpop1-1.fna&oh=00_AT_sO2Pm7t1mJgN56E7EJ0HEW06pwnsKmoUW6lHBl3Weeg&oe=61F3E693",
    },
    {
      name: "Felipe Fernandez",
      description: "Si me ves como un objeto sexual no me escribas.",
      age: 24,
      url: "https://media.discordapp.net/attachments/725519723911053333/935277392417681478/unknown.png?width=424&height=566",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map(({ name, description, age, url }, index) => (
          <TinderCard
            className="swipe"
            key={index}
            preventSwipe={["up", "down"]}
            onSwipe={(direction) => swiped(direction, name)}
            onCardLeftScreen={() => outOfFrame(name)}
          >
            <div style={{ backgroundImage: `url(${url})` }} className="card">
              <h1 className="card__name">
                {name} {age}
                <CheckCircle fontSize="medium" color="primary" />
              </h1>
              <p className="card__activiy">Actividad reciente</p>
              <p className="card__description">{description}</p>
            </div>

          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
