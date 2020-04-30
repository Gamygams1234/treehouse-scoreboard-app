import React, { Component } from "react";

export default class AddPlayerForm extends Component {
  state = {
    name: "",
  };
  handleChange = (e) => {
    this.setState({
      // could pass in name: e.target.value
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddPlayer(this.state);
    this.setState({
      name: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" id="name" value={this.state.name} placeholder="Enter a player's name" />
        <input type="submit" placeholder="Add Player" />
      </form>
    );
  }
}
