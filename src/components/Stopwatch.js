import React, { Component } from "react";

export default class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0,
  };
  handleStopwatch = () => {
    this.setState({
      isRunning: !this.state.isRunning,
    });
    if (!this.state.isRunning) {
      this.setState({
        previousTime: Date.now(),
      });
    }
  };
  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 100);
  }
  // this is to prevnent  any memory leaks in the app incase something does happen
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState((prevState) => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime),
      }));
    }
  };
  handleReset = () => {
    if (!this.state.isRunning) {
      this.setState({
        elapsedTime: 0,
      });
    }
  };
  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? "Stop" : "Start"}</button> <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
