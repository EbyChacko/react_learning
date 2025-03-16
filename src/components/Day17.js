import React, { Component } from 'react';

class Day17 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className="wrapper">
        <h4 className="days">Day 17</h4>
        <h2>Counter App using Class Component</h2>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Day17;