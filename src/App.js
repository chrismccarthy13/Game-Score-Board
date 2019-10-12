import React from 'react';
import './App.css';

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
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
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

class App extends React.Component {
  state = {
    players: [
      {
      name: "Chris",
      id: 1
      },
      {
      name: "Sarah",
      id: 2
      },
      {
      name: "Rusty",
      id: 3
      },
      {
      name: "Oakley",
      id: 4
      }
    ]
  };

  removePlayer = (id) => {
    this.setState( prevState => {
      return{
        players: prevState.players.filter( p => p.id !== id)
      };
    });
  }

  render() {
    return(
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers={ this.state.players.length }
        />

        {/* Players List */}
        { this.state.players.map( players =>
          <Player
            name={ players.name }
            id={ players.id }
            key={ players.id.toString() }
            removePlayer={ this.removePlayer }
          />
        )}
      </div>
    );
  }
}

export default App;
