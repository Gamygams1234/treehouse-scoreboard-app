import React, { PureComponent } from "react";
import Counter from "./Counter";
class Player extends PureComponent {
  render() {
    console.log(this.props.name + " rendered");
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>
            ✖
          </button>
          {this.props.name}
        </span>

        <Counter id={this.props.id} handleScoreChange={this.props.handleScoreChange} score={this.props.score} index={this.props.index} />
      </div>
    );
  }
}

export default Player;
