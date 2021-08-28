import initialState from './initialState'
import { CLICK, FETCH_POKEMON_SUCESS } from "./action";

/**
 * Création du Reducer
 * @param state
 * @returns {{click: number}}
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK:
            return {
                ...state,
                click: state.click + 1
            }
        case FETCH_POKEMON_SUCESS:
            return {
                ...state,
                pokemons: action.pokemons
            }
        default:
            return state
    }
}

export default reducer