import React, { useState } from 'react';
import './Nav.css';
import logo from '../../img/logo.svg';
import {Link} from 'react-router-dom';
import { addPokemonSearched } from '../../redux/Actions'
import { connect } from 'react-redux'

const styles = {
  textDecoration: 'none', padding: '1rem', color: 'black'
}

function NavBar(props) {
  const [pokemon, setPokemon] = useState('');
  const min = 1;
  const max = 898;
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function handleChange(event){
    setPokemon(event.target.value)
  }
  function handleSubmit(e){
      e.preventDefault()
      props.addPokemonSearched(pokemon)
      setPokemon('')
  }
  return (
    <nav className='navbar'>
      <div className='title'>
        <Link to='/'>
        <img src={logo} alt='pokemon logo' />
        </Link>
        <Link  style={styles} to= '/about'>About</Link>
        <Link style={styles} to= '/team'>My Team</Link>
      </div>
      <div className='form'>
        <form
          onSubmit={(e) => { handleSubmit(e) }}> 
          <input className='searchinput' type='text' placeholder='Pokemon' value={pokemon}
            onChange={(e) => { handleChange(e)}} />
          <input className='submitbutton' type='submit' value='Search' />
        </form>
        <button className='randomPokemon' onClick={() => props.addPokemonSearched(getRandomInt(min, max))}>Random Pokemon</button>
      </div>
    </nav>
  )
}

function mapStateToProps (state) {
  return {
    pokemon: state.pokemonSearched
  }
}
function mapDispatchToProps (dispatch){
  return {
    addPokemonSearched: (pokemon) => dispatch(addPokemonSearched(pokemon))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)