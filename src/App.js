import React, { useEffect } from "react";
import "./styles.css";

//Redux
import { connect } from "react-redux"
import { CLICK, showPokemonAction, capturePokemonAction } from "./store/action";


import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import fetchPokemons from "./store/fetchPokemons";
import Loader from "./components/Loader";

const App = ({ click, fetchPokemons, pending, showPokemon, capturePokemon, pokemons }) => {

    useEffect(() => {
        fetchPokemons()
    }, [fetchPokemons])

    useEffect(() => {
        console.log(pokemons)
    }, [pokemons])

    if (pending) {
        return <Loader />
    }

  return (
    <div className="App">
      <GameBoy showPokemon={ () => showPokemon(pokemons) } capturePokemon={ capturePokemon } />
      <PokeList />
    </div>
  );
};

const mapStateToProps = ({ pending, pokemons }) => {
    return {
        pending,
        pokemons
    }
}

/**
 * Dispatch pour l'action
 * @param dispatch
 * @returns {{click: (function(): *)}}
 */
const mapDispatchToProps = dispatch => {
    return {
        fetchPokemons: () => dispatch(fetchPokemons()),
        click: () => dispatch({ type: CLICK }),
        showPokemon: pokemons => dispatch(showPokemonAction(pokemons)),
        capturePokemon: () => dispatch(capturePokemonAction())
    }
}

/**
 * Ajout du state dans App
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
