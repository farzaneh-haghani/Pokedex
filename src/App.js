import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const App = () => (
  <div>
    <Logo appName="Pokedex" />
    <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
    <CaughtPokemon date={new Date().toLocaleDateString()} />
  </div>
);

export default App;
