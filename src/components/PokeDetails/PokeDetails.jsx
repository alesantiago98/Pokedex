import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchPokemonEvolutions, searchPreviousandNextPokemon, pokemonDetail } from '../../redux/Actions.js'
import { Link } from 'react-router-dom';
import Evolutions from '../Evolutions/Evolutions.jsx';
import Details from '../Details/Details.jsx';
import './PokeDetails.css'

function PokemonDetails({ pokemon, evolutions, previousandnext, searchPokemonEvolutions, pokemonDetail, searchPreviousandNextPokemon }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (Object.keys(pokemon).length > 0) {
      searchPokemonEvolutions(pokemon.species.url);
      searchPreviousandNextPokemon(pokemon.id);
      setActive(true);
    }
    return () => { setActive(false) }
  }, [pokemon, searchPokemonEvolutions, searchPreviousandNextPokemon])

  function prevandnextpokemon(id) {
    if (id > 0 && id < 899) {
      return pokemonDetail(id)
    }
    return null
  }
  return (
    <div>
      {active ?
        <div>
          <div className='buttons'>
            <button className='button' onClick={() => { prevandnextpokemon(previousandnext[0]) }}>
              <Link className='buttonleft' to={`/pokemon/${previousandnext[0]}`} key={pokemon.name + previousandnext[0]}>{previousandnext[0]}
              </Link>
            </button>
            <button className='button' onClick={() => { prevandnextpokemon(previousandnext[1]) }}>
              <Link className='buttonright' to={`/pokemon/${previousandnext[1]}`} key={pokemon.name + previousandnext[1]}>{previousandnext[1]}
              </Link>
            </button>
          </div>
          <div className='Details'>
            <Details pokemon={pokemon} />
            <Evolutions evolutions={evolutions} />
          </div>
        </div>
        : <div>loading</div>}
    </div>

  )
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemonDetail,
    evolutions: state.pokemonEvolution,
    previousandnext: state.previousAndNextPokemon
  }
}
function mapDispatchToProps(dispatch) {
  return {
    searchPokemonEvolutions: pokemon => dispatch(searchPokemonEvolutions(pokemon)),
    searchPreviousandNextPokemon: id => dispatch(searchPreviousandNextPokemon(id)),
    pokemonDetail: id => dispatch(pokemonDetail(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)