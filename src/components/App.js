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
  handleAddPlayer = (player) => {
    player.id = Math.random();
    player.score = 0;
    let players = [...this.state.players, player];
    this.setState({
      players: players,
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
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player name={player.name} id={player.id} key={player.id.toString()} index={index} removePlayer={this.handleRemovePlayer} handleScoreChange={this.handleScoreChange} score={player.score} />
        ))}
        <AddPlayerForm handleAddPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
