import React from 'react';
import './About.css'

export default function About() {
  return (
    <div>
      <h3>Pokedex App</h3>
      <hr/>
      <div className='AboutInfo'>
      <p>Pokedex app created with React, Redux, CSS, JavaScript.</p>
      <p>On the homepage you can search any pokemon by name or
      id and it will show a new card with the basic info of the pokemon.</p>
      <p>If you press the random button on the navigation bar,
      it will show you the basic info of a random pokemon 
      between the 1st and the 898th pokemon in the pokedex.</p>
      <p>Every card has a More Info button that will show you a new page 
      with the complete info of the pokemon.
      It will show you its abilities, its basic stats, 
      a front and back image, and its previous and next evolutions (There might be some issues with this).</p>
      <p>Every card has a pokeball button that includes the pokemon in your team, 
      and in the team page you can see every card of the pokemon you chose.</p>
      <p>Every card has a delete button that deletes the card from the home page.</p>
      </div>
    </div>
  )
}