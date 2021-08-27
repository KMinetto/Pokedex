import React from "react";

//Redux
import { connect } from "react-redux"

import PokemonItem from "./PokemonItem";

const PokeList = ({ click }) => {
  return (
    <div className="list-container">
      <h2>Essais : { click }</h2>
      <h2>Pokedex</h2>
      <ul>
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
      </ul>
    </div>
  );
};

/**
 * Récupération du state
 * @param click
 * @returns {{click}}
 */
const mapStateToProps = ({ click }) => {
    return {
        click
    }
}

export default connect(mapStateToProps)(PokeList);
