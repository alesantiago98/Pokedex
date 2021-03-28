import React from 'react';
import './Details.css'
//tope de barra de abilidades 225

export default function Details({pokemon}) {
  return (
    <div className='details'>
      <div className='pokemonimages'>
        <img src={pokemon.sprites.front_default} alt='pokemon front' />
        <img src={pokemon.sprites.back_default} alt='pokemon back' />
      </div>
      <div className='pokemoninfo'> 
      <h2>{pokemon.name}</h2>
      <div className='Abilities'><p>Abilities : </p><div>{pokemon.abilities.map(a => <div className='ability' key={pokemon.name + a.ability.name}>{a.ability.name}</div>)}</div></div>
      <div className='BaseExperience'>Base Experience: {pokemon.base_experience}</div>
      <div className='stats'>
        {pokemon.stats.map(s => <div  key={pokemon.name + s.stat.name} className='stat'> <p className= 'statName'> {s.stat.name} :</p>
        <p className='StatBar'><span style={{'width': `${s.base_stat*100/225}%`}} className={s.stat.name}> {s.base_stat}</span></p>
        </div>)}
      </div>
      <div >{pokemon.types.map(p => <span key={pokemon.name + p.type.name}>{p.type.name}</span>)}</div>
      </div>
    </div>
  )
}