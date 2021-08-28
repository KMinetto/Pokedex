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