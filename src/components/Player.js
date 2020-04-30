import React, { PureComponent } from "react";
import Counter from "./Counter";
class Player extends PureComponent {
  render() {
    // this is destructuring in s class component
    const { name, handleScoreChange, removePlayer, id, index, score } = this.props;
    console.log(name + " rendered");
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>

        <Counter handleScoreChange={handleScoreChange} score={score} index={index} />
      </div>
    );
  }
}

export default Player;
