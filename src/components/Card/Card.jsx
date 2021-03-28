import React, {useState, useEffect } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import icon from '../../img/icon.png';
import { removePokemonsearched, addPokemonToTeam, removePokemonFromTeam, pokemonDetail } from '../../redux/Actions'

function Card(props) {
  const [active, setActive] = useState(false);
  let classtype = props.types[0].type.name;
  let classes = `card ${classtype}`;
  let correctweight = props.weight / 10;
  let correctheight = props.height / 10;

  useEffect(() => {
    if(props.team.filter(pokemon => pokemon.name === props.name).length > 0){
      setActive(true)
    }
    else {
      setActive(false)
    }
  }, [active, props.name, props.team])

  function toggle(){
    setActive(!active)
  }

  function addToTeam() {
    if(props.team.filter(pokemon => pokemon.name === props.name).length > 0){
      return props.removePokemonFromTeam(props.id)
    }
    else {
      return props.addPokemonToTeam(props)
    }
  }

  return (
    <div className={classes} >
      <button onClick={() => props.removePokemonsearched(props.id)} className='Button'>X</button>
      <div className='Cardtitle'>
        <h3 className='PokemonName'>{props.name}</h3>
        <h3 className='id'>#{props.id}</h3>
      </div>
      <div className='info'>
        <div className='height'>
          <p>Height</p>
          <p> {correctheight} m</p>
        </div>
        <div className='weight'>
          <p>Weight</p>
          <p>{correctweight} kg</p>
        </div>
        <img src={props.img} className='pokeimage' alt='pokemon front' />
      </div>
      <div className='types'>{props.types.map(p => <span key={props.name + p.type.name}>{p.type.name}</span>)}</div>
      <Link to={`/pokemon/${props.id}`}>
        <button onClick={() => props.pokemonDetail(props.id)} className='moreInfo'>More Info</button>
      </Link>
      <button className='buttonteam' onClick={() => {addToTeam(); toggle();}}>
        <img className={active ? 'active' : 'inactive'} src={icon} alt='pokeball icon'/>
      </button>
    </div>
  )
}

function mapStateToProps(state){
  return {
    team: state.pokemonTeam,
    pokemons: state.pokemonSearched
  }
}

function mapDispatchToProps(dispatch){
  return{
    removePokemonsearched: pokemon => dispatch(removePokemonsearched(pokemon)),
    addPokemonToTeam: pokemon => dispatch(addPokemonToTeam(pokemon)),
    removePokemonFromTeam: pokemon => dispatch(removePokemonFromTeam(pokemon)),
    pokemonDetail: pokemon => dispatch(pokemonDetail(pokemon))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)