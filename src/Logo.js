import React from "react";

const Logo = (props) => {
  // const logWhenClicked = () => console.log("Exercise A");

  console.log(props);
  return (
    <header>
      <h1>Welcome to {props.appName}</h1>
      <img onClick={props.handleClick} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pokedex" />
    </header>
  );
};

export default Logo;