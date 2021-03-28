import React from 'react';
import NavBar from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Team from './components/Team/Team'
import PokemonDetails from './components/PokeDetails/PokeDetails';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={NavBar} />
      <Route path='/about' component={About} />
      <Route path='/team' component={Team}/>
      <Route path='/pokemon/:pokemonId' component={PokemonDetails}/>
      <Route exact path='/' component={Cards}/>
    </div>
  );
}

export default App;
