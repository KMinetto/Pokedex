import React from "react";

//Redux
import { connect } from "react-redux"

import PokemonItem from "./PokemonItem";

const PokeList = ({ click, pokemons }) => {

    console.log(pokemons)

  return (
    <div className="list-container">
      <h2>Essais : { click }</h2>
      <h2> { pokemons.filter(pokemon => pokemon.isCaught).length } / {
          pokemons.length
      }</h2>
      <ul>
          {
              pokemons.map(pokemon => (
                  <PokemonItem key={pokemon.id} pokemon={pokemon} />
              ))
          }
      </ul>
    </div>
  );
};

/**
 * Récupération du state
 * @param click
 * @returns {{click}}
 */
const mapStateToProps = ({ click, pokemons }) => {
    return {
        click,
        pokemons
    }
}

export default connect(mapStateToProps)(PokeList);
