import {React, useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addNewPokemon}) {
  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [front, setFront] = useState('')
  const [back, setBack] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeHp = (e) => {
    setHp(e.target.value)
  }
  const handleChangeFront = (e) => {
    setFront(e.target.value)
  }
  const handleChangeBack = (e) => {
    setBack(e.target.value)
  }

  let newPokemon = {
    name: name,
    hp: hp,
    sprites: {
      front: front,
      back: back
    }
  }
  
  const createPokemon = () => {
    fetch(`http://localhost:3001/pokemon`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        sprites: {
          front: front,
          back: back
        }
      })
    })
    .then (addNewPokemon(newPokemon))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          createPokemon()
        }}
      >
        <Form.Group widths="equal">
          <Form.Input onChange = {handleChangeName} value = {name} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange = {handleChangeHp} fluid label="hp" placeholder="hp" name="hp" value = {hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value = {front}
            onChange = {handleChangeFront}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value = {back}
            onChange={handleChangeBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
