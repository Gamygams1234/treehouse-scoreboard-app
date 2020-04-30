import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Gamy",
        score: 0,
        id: 1,
      },
      {
        name: "Chris",
        score: 0,
        id: 2,
      },
      {
        name: "Ronak",
        score: 0,
        id: 3,
      },
      {
        name: "Lisa",
        score: 0,
        id: 4,
      },
    ],
  };
  // writing the handle score change to get passed to the child
  getHighScore = () => {
    const scores = this.state.players.map((p) => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };
  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevPlayerId += 1),
          },
        ],
      };
    });
  };
  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
  };
  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        {/* Took out the header title because we are defaulting it in the Header Component */}
        <Header totalPlayers={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player name={player.name} id={player.id} key={player.id.toString()} index={index} removePlayer={this.handleRemovePlayer} handleScoreChange={this.handleScoreChange} score={player.score} isHighScore={highScore === player.score} />
        ))}
        <AddPlayerForm handleAddPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
