import React, { useEffect } from "react";
import "./styles.css";

//Redux
import { connect } from "react-redux"
import {CLICK} from "./store/action";

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import fetchPokemons from "./store/fetchPokemons";

const App = ({ click, fetchPokemons }) => {

    useEffect(() => {
        fetchPokemons()
    }, [fetchPokemons])

  return (
    <div className="App">
        <button onClick={() => click()}>click</button>
      <GameBoy />
      <PokeList />
    </div>
  );
};

/**
 * Dispatch pour l'action
 * @param dispatch
 * @returns {{click: (function(): *)}}
 */
const mapDispatchToProps = dispatch => {
    return {
        fetchPokemons: () => dispatch(fetchPokemons()),
        click: () => dispatch({ type: CLICK })
    }
}

/**
 * Ajout du state dans App
 */
export default connect(null, mapDispatchToProps)(App);
