import {fetchPokemonPending, fetchPokemonSuccess} from "./action";

const numberOfPokemon = 300;
const urls = [];

for (let i = 1; i <= numberOfPokemon; i++) {
    urls.push(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
}

const requests = urls.map(url => fetch(url))

/**
 * Récupération des pokémons depuis l'API PokéApi
 * @returns {(function(*): void)|*}
 */
export default () => {
    return dispatch => {
        dispatch(fetchPokemonPending())

        Promise.all(requests)
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(pokemons => pokemons.map(pokemon => ({
                id: pokemon.id,
                name: pokemon.name,
                captureRate: pokemon.capture_rate,
                isCaught: false,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
            })))
            .then(pokemons => dispatch(fetchPokemonSuccess(pokemons)));
    }
}