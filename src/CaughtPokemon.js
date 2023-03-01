import React from "react";
import { useState } from "react";


const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState(0);

  const catchPokemon = () => {
    setCaught(caught + 1);
  };

  return (
    <>
      <p>Caught {caught} Pokemon on {props.date}</p>
      <button onClick={catchPokemon}>Click Me</button>
    </>
  );
};


export default CaughtPokemon;