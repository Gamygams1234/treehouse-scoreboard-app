import React, { Component } from "react";

export default class AddPlayerForm extends Component {
  // passing a reference to the input
  playerInput = React.createRef();
  // with this we can delete our state and our handleChange function
  // this can be used when we do not have to have control of every keystroke
  // we can also make this a functional component since we are no longer using state in this instance

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={this.playerInput} type="text" id="name" placeholder="Enter a player's name" />
        <input type="submit" placeholder="Add Player" />
      </form>
    );
  }
}
