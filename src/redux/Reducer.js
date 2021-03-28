
const initialState = {
  pokemonSearched: [],
  pokemonTeam: [],
  pokemonEvolution: {},
  pokemonDetail: {},
  previousAndNextPokemon: []
}


export default function rootReducer (state = initialState, action){
  switch (action.type){
    case 'ADD_POKEMON_SEARCHED':
      return{
        ...state,
        pokemonSearched: state.pokemonSearched.concat(action.payload)
      }
    case 'REMOVE_POKEMON_SEARCHED':
      return{
        ...state,
        pokemonSearched: state.pokemonSearched.filter(pokemon => pokemon.id !== action.payload)
      }
    case 'ADD_POKEMON_TO_TEAM':
      return{
        ...state,
        pokemonTeam: state.pokemonTeam.concat(action.payload)
      }
    case 'REMOVE_POKEMON_FROM_TEAM':
      return{
        ...state,
        pokemonTeam: state.pokemonTeam.filter(pokemon => pokemon.id !== action.payload)
      }
    case 'SEARCH_POKEMON_EVOLUTION':
      return{
        ...state,
        pokemonEvolution: action.payload
      }
    case 'POKEMON_DETAIL':
      return {
        ...state,
        pokemonDetail: action.payload
      }
    case 'SEARCH_PREVIOUS_AND_NEXT':
      return{
        ...state,
        previousAndNextPokemon: [action.payload-1, action.payload+1]
      }
    default: 
    return state;
  }
}