// actions need to be addPokemonsearched, removePokemonsearched, addPokemonToTeam, 
//removePokemonFromFavorites, searchPokemonEvolutions and searchPreviousandNextPokemon

export function addPokemonSearched(pokemon) {
  return function (dispatch) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(r => r.json())
      .then(data => dispatch({
        type: 'ADD_POKEMON_SEARCHED',
        payload: data
      })
      ).catch(err => {console.log(err)});
  };
};

export function removePokemonsearched(pokemon) {
  return {
    type: 'REMOVE_POKEMON_SEARCHED',
    payload: pokemon
  };
};

export function addPokemonToTeam(pokemon) {
  return {
    type: 'ADD_POKEMON_TO_TEAM',
    payload: pokemon
  };
};

export function removePokemonFromTeam(pokemon) {
  return {
    type: 'REMOVE_POKEMON_FROM_TEAM',
    payload: pokemon
  };
};

export  function searchPokemonEvolutions(pokemon) {
  return function (dispatch) {
    fetch(pokemon)
      .then(r => r.json())
      .then((result) =>
         fetch(result.evolution_chain.url)
          .then(res => res.json())
          .then((evdata) => dispatch({
            type: 'SEARCH_POKEMON_EVOLUTION',
            payload: evdata
          })
          ).catch(err => {console.log(err)})).catch(err => {console.log(err)})
  }
}

export function pokemonDetail(pokemon){
  return function (dispatch) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(r => r.json())
      .then(data => dispatch({
        type: 'POKEMON_DETAIL',
        payload: data
      })
      ).catch(err => {console.log(err)});
  };
}

export function searchPreviousandNextPokemon(pokemon) {
  return {
    type: 'SEARCH_PREVIOUS_AND_NEXT',
    payload: pokemon
  }
}