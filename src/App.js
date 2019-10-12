import React from 'react';
import './App.css';

const players = [
  {
  name: "Chris",
  score: 50,
  id: 1
  },
  {
  name: "Sarah",
  score: 85,
  id: 2
  },
  {
  name: "Rusty",
  score: 95,
  id: 3
  },
  {
  name: "Oakley",
  score: 80,
  id: 4
  }
];

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Player: { props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        { props.name }
      </span>

      <Counter score={ props.score } />
    </div>
  );
}

class Counter extends React.Component {
  render(){
    return(
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.props.score }</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}

const App = (props) => {
  return(
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={ players.length }
      />

      {/* Players List */}
      {players.map( players =>
        <Player
          name={ players.name }
          score={ players.score }
          key={ players.id.toString() }
        />
      )}
    </div>
  );
}

export default App;
