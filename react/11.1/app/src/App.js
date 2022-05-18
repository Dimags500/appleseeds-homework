import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Button from "./components/Button";

class App extends React.Component {
  constructor() {
    super();
    this.state = { color: "" };
  }
  colors = ["blue", "red", "yellow"];
  callFromChild = (color) => {
    this.setState(() => {
      return { color: color };
    });
  };

  generateBtns() {
    const arr = [];
    for (let i = 0; i < this.colors.length; i++) {
      arr.push(
        <Button
          color={this.colors[i]}
          callback={this.callFromChild}
          num={i}
          key={i}
        />
      );
    }

    return arr;
  }

  render() {
    return (
      <div>
        {this.generateBtns()}
        {`state in parent ${this.state.color}`}
      </div>
    );
  }
}

export default App;
