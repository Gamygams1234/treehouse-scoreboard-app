import React from "react";

const Counter = (props) => {
  // delting state from this component and putting it to the parent element

  //   decrementScore = () => {
  //     this.setState((prevState) => ({
  //       score: prevState.score - 1,
  //     }));
  //   };

  return (
    <div className="counter">
      {/* calling the function when the button is clicked in Counter */}
      <button onClick={() => props.handleScoreChange(-1)} className="counter-action decrement">
        {" "}
        -{" "}
      </button>
      <span className="counter-score">{props.score}</span>
      <button onClick={() => props.handleScoreChange(+1)} className="counter-action increment">
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Counter;
