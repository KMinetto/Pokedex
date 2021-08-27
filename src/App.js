import React from "react";
import "./styles.css";

//Redux
import { connect } from "react-redux"
import { CLICK } from "./store/action";

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";

const App = ({ click }) => {
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
        click: () => dispatch({ type: CLICK })
    }
}

/**
 * Ajout du state dans App
 */
export default connect(null, mapDispatchToProps)(App);