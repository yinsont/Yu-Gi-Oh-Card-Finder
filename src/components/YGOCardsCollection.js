import React from "react";
import YGOCard from "./YGOCard";
import { Card } from "semantic-ui-react";

function YGOCardsCollection({YGOCards}) {
  // console.log(YGOCards[0])
  return (
    <Card.Group width = '180' itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      {YGOCards.map(card => {
         return <YGOCard card = {card}/>
      })}
    </Card.Group>
  );
}

export default YGOCardsCollection;
