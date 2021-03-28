import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.jsx';
import './Team.css'

function Team(props) {
  return (
    <div>
      <h3>My Team</h3>
      <hr/>
      <div className='Team'>
        {props.team.map(p =>
          <div>
            <Card
              key={p.id}
              name={p.name}
              height={p.height}
              weight={p.weight}
              types={p.types}
              img={p.img}
              id={p.id}
            />
          </div>)}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    team: state.pokemonTeam
  }
}

export default connect(mapStateToProps, null)(Team)