import {React, useState, useEffect} from "react";
import YGOCardsCollection from "./YGOCardsCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function YGOPage() {

  const [YGOCards, setYGOCards] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then(response => response.json())
    .then(data => setYGOCards(data.data))
  }, [])
  
  const onSearch = (input) => {
    console.log(input)
    setSearch(input)
  }

  const addNewYGOCard = (newYGOCard) => {
    setYGOCards([...YGOCards, newYGOCard])
  }
  console.log(YGOCards)
  // console.log(YGOCards[1].card_images[0].image_url_cropped)
  // const filteredYGOCards = YGOCards.filter((YGOCard) => {
  //   return YGOCard.name.toLowerCase().includes(search.toLowerCase())
  // })

  return (  
    <Container>
      <h1>Yu-Gi-Oh Card Searcher</h1>
      <br />
      {/* <PokemonForm addNewYGOCard = {addNewYGOCard}/> */}
      <br />
      <Search onSearch = {onSearch} search = {search}/>
      <br />
      <YGOCardsCollection YGOCards = {YGOCards}/>
    </Container>
  );
}

export default YGOPage;
