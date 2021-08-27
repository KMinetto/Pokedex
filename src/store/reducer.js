import initialState from './initialState'
import { CLICK } from "./action";

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
        default:
            return state
    }
}

export default reducer