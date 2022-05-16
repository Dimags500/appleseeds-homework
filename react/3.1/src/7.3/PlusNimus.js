import React from "react";
import ReactDOM from "react-dom/client";

class PlusMinus extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      color: "white",
    };
  }

  incriment = () => {
    if (this.state.value == 0) {
      this.setState({ color: "white" });
    }
    if (this.state.value >= 10) {
      alert("max value is 10");
      return;
    }
    this.setState({ value: this.state.value + 1 });
    if (this.state.value >= 1) {
      this.setState({ color: "green" });
    }
  };

  dicrement = () => {
    if (this.state.value == 0) {
      this.setState({ color: "white" });
    }
    if (this.state.value < -10) {
      alert("min value is -10");
      return;
    }
    if (this.state.value <= 1) {
      this.setState({ color: "red" });
    }
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.incriment}> + </button>
        <label style={{ backgroundColor: this.state.color }}>
          .................{this.state.value}........
        </label>
        <button onClick={this.dicrement}> - </button>
      </div>
    );
  }
}

export default PlusMinus;
