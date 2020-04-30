import React from "react";

// we can also destructure like this by unpacking at the top
const Counter = ({ index, handleScoreChange, score }) => {
  return (
    <div className="counter">
      {/* calling the function when the button is clicked in Counter */}
      <button onClick={() => handleScoreChange(index, -1)} className="counter-action decrement">
        {" "}
        -{" "}
      </button>
      <span className="counter-score">{score}</span>
      <button onClick={() => handleScoreChange(index, +1)} className="counter-action increment">
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Counter;
