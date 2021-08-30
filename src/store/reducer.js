import initialState from './initialState'
import {
    CLICK,
    FETCH_POKEMON_PENDING,
    FETCH_POKEMON_SUCESS,
    SHOW_POKEMON
} from "./action";

/**
 * Création du Reducer
 * @param state
 * @param action
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
                pokemons: action.pokemons,
                pending: false
            }
        case FETCH_POKEMON_PENDING:
            return {
                ...state,
                pending: true
            }
        case SHOW_POKEMON:
            return {
                ...state,
                onScreen: action.onScreen
            }
        default:
            return state
    }
}

export default reducer