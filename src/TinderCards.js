import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Pedro M. Toribio",
      description: "ig: pedro.marioni",
      url: "https://scontent.fpop1-1.fna.fbcdn.net/v/t39.30808-6/252856266_4652737608118304_1175916575189575039_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH2VApptbUHdY8wa5thKu1CxKuY5VTOxKTEq5jlVM7EpMeF-W0dBqLljkMiE2H4UTej-B7PDxZ7ZkU9nQJBivJ1&_nc_ohc=jgdiZ2FaPQwAX_5dF-2&_nc_oc=AQn8XQLRczFEXzFtniIe6rw6Ye1UYhV0lVm8dtoGWFxEDgIo_zsGQSlxzulTa9eBXwY&_nc_ht=scontent.fpop1-1.fna&oh=00_AT_sO2Pm7t1mJgN56E7EJ0HEW06pwnsKmoUW6lHBl3Weeg&oe=61F3E693",
    },
    {
      name: "Pedro M. Toribio",
      description: "ig: pedro.marioni",
      url: "https://scontent.fpop1-1.fna.fbcdn.net/v/t39.30808-6/252856266_4652737608118304_1175916575189575039_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH2VApptbUHdY8wa5thKu1CxKuY5VTOxKTEq5jlVM7EpMeF-W0dBqLljkMiE2H4UTej-B7PDxZ7ZkU9nQJBivJ1&_nc_ohc=jgdiZ2FaPQwAX_5dF-2&_nc_oc=AQn8XQLRczFEXzFtniIe6rw6Ye1UYhV0lVm8dtoGWFxEDgIo_zsGQSlxzulTa9eBXwY&_nc_ht=scontent.fpop1-1.fna&oh=00_AT_sO2Pm7t1mJgN56E7EJ0HEW06pwnsKmoUW6lHBl3Weeg&oe=61F3E693",
    },
  ]);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map(({ name, description, url }) => (
          <TinderCard>
            <h1>{name}</h1>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
