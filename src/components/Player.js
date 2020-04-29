import React from "react";
import Counter from "./Counter";
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>
          ✖
        </button>
        {props.name}
      </span>
      {/*getting the function from props and passing it on */}
      <Counter handleScoreChange={props.handleScoreChange} score={props.score} />
    </div>
  );
};

export default Player;
