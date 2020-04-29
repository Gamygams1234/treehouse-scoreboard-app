import React from "react";

const Counter = (props) => {
  let index = props.index;

  return (
    <div className="counter">
      {/* calling the function when the button is clicked in Counter */}
      <button onClick={() => props.handleScoreChange(index, -1)} className="counter-action decrement">
        {" "}
        -{" "}
      </button>
      <span className="counter-score">{props.score}</span>
      <button onClick={() => props.handleScoreChange(index, +1)} className="counter-action increment">
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Counter;
