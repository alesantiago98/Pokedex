import React from 'react';
import './Cards.css'
import Card from '../Card/Card.jsx';
import { connect } from 'react-redux'

function Cards(props) {

  if (props.pokemons.length > 0) {
    return (
      <div className='pokeSearch'>
        {props.pokemons.map(p =>
          <div key={p.id} className='cards'>
            <Card
              key={p.id}
              name={p.name}
              height={p.height}
              weight={p.weight}
              types={p.types}
              img={p.sprites.front_default}
              id={p.id}
            />
          </div>)}
      </div>
    )
  }
  else {
    return (
      <div className='noPokemons'>
        <h4>There are no Pokemons</h4>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    pokemons: state.pokemonSearched
  }
}

export default connect( mapStateToProps, null)(Cards)