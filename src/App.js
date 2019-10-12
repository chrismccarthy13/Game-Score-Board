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

      <Counter />
    </div>
  );
}

class Counter extends React.Component {
  state = {
    score: 0
  };

  addScore = () => {
    this.setState( prevState => ({
      score: prevState.score + 1
    }));
  }

  minusScore = () => {
    this.setState( prevState => ({
      score: prevState.score - 1
    }));
  }

  render(){
    return(
      <div className="counter">
        <button className="counter-action decrement" onClick={ this.minusScore } > - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={ this.addScore } > + </button>
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
          key={ players.id.toString() }
        />
      )}
    </div>
  );
}

export default App;
