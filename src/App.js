import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import "./App.css";
import PokemonMoves from "./PokemonMoves";

const App = () => {
  return (
    <div className="App">
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMoves />
    </div>
  );
};


const logWhenClicked = () => console.log("Exercise A");


export default App;
