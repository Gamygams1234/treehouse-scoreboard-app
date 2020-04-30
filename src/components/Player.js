import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
class Player extends PureComponent {
  // this will show what prop types we need on every component and page
  static propTypes = {
    handleScoreChange: PropTypes.func,
    removePlayer: PropTypes.func,
    // this will throw an error if a prop is not passed through
    name: PropTypes.string.isRequired,
    score: PropTypes.number,
    id: PropTypes.number,
    index: PropTypes.number,
  };
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
