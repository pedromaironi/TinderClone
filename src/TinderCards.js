import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import CheckCircle from "@material-ui/icons/CheckCircle";
import { blue } from "@material-ui/core/colors";
import SwipeButtons from "./SwipeButtons";
import axios from "./axios";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // TODO { data } = req.data;
      const { data } = await axios.get("/tinder/cards");

      setPeople(data);
    }

    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map(({ name, description, age, imgUrl }, index) => (
          <TinderCard
            className="swipe"
            key={index}
            preventSwipe={["up", "down"]}
            onSwipe={(direction) => swiped(direction, name)}
            onCardLeftScreen={() => outOfFrame(name)}
          >
            <div style={{ backgroundImage: `url(${imgUrl})` }} className="card">
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
