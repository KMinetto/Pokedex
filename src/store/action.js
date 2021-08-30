/**
 * Création d'une Action
 * @type {string}
 */
export const CLICK = 'CLICK'

/**
 * API
 * @type {string}
 */
export const FETCH_POKEMON_SUCESS = 'FETCH_POKEMON_SUCESS'

export const fetchPokemonSuccess = (pokemons) => ({
    type: FETCH_POKEMON_SUCESS,
    pokemons
})

/**
 * En train de charger
 * @type {string}
 */
export const FETCH_POKEMON_PENDING = 'FETCH_POKEMON_PENDING'

export const fetchPokemonPending = (pokemons) => ({
    type: FETCH_POKEMON_PENDING
})

/**
 * Montre un Pokemon
 * @type {string}
 */
export const SHOW_POKEMON = 'SHOW_POKEMON'

export const showPokemonAction = (pokemons) => {
    const filteredPokemons = pokemons.filter(pokemon => !pokemon.isCaught)
    const max = filteredPokemons.length
    const rand = Math.floor(Math.random() * max)
    const onScreen = filteredPokemons[rand]

    return dispatch => dispatch({ type: SHOW_POKEMON, onScreen })
}

/**
 * Capture des pokémons
 * @type {string}
 */
export const CAPTURE_POKEMON = 'CAPTURE_POKEMON'

export const capturePokemonAction = () => {
    console.log('catch')
    const rand = Math.floor(Math.random() * 255)
    return dispatch => dispatch({ type: CAPTURE_POKEMON, rand })
}