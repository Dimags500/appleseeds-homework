import React from "react";
import ReactDOM from "react-dom/client";
import "../App.css";

class Incriment extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incriment = () => {
    let { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.incriment}>click</button>
        <p>{this.state.count}</p>
        <p>......................................</p>
      </div>
    );
  }
}

export default Incriment;
