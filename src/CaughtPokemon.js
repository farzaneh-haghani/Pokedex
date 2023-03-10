import React from "react";
import { useState } from "react";


const CaughtPokemon = (props) => {
  // const [caught, setCaught] = useState(0);
  const [caught, setCaught] = useState([]);
  const pokemon = ["Squirtle", "Shuppet", "Ponyta"];


  const catchPokemon = () => {
    // setCaught(caught + 1);
    const randomElement = pokemon[Math.floor(Math.random() * (pokemon.length))];
    setCaught(caught.concat(randomElement));
  };

  return (
    <div className="caught-container">
      <p>Caught {caught.length} Pokemon on {props.date}</p>
      <button onClick={catchPokemon}>Click Me</button>
      <ul>
        {caught.map((eachCaught) => (<li>{eachCaught}</li>))}
      </ul>
    </div>
  );
};


export default CaughtPokemon;