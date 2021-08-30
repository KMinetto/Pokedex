import React from "react";

const PokemonItem = ({ pokemon }) => {
    const imgSrc = pokemon.isCaught ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png' : pokemon.image
  return (
    <li className="pokemon-item">
      <img
        alt={pokemon.name}
        src={ imgSrc }
      />
    { pokemon.name }
    </li>
  );
};

export default PokemonItem;
