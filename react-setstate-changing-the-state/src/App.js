import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      power: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }
  handleClick() {
    this.setState((lastState) => {
      return {
        count: lastState.count * 2,
        power: lastState.power + 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 1,
        power: 0
      };
    });
  }
  handleDecrease() {
    this.setState((last) => {
      return {
        count: last.count / 2,
        power: last.power - 1
      };
    });
  }
  render() {
    return (
      <div>
        <h1>
          2<sup>{this.state.power}</sup> = {this.state.count}
        </h1>
        <button onClick={this.handleClick}>Add!</button>
        <button onClick={this.handleDecrease}>Decrease!</button>
        <button onClick={this.handleReset}>Reset!</button>
      </div>
    );
  }
}

export default App;
