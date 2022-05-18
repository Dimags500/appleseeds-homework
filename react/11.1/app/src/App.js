import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Button from "./components/Button";

class App extends React.Component {
  colors = ["blue", "red", "yellow"];
  callFromChild(color) {
    console.log(color);
  }

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
    return <div>{this.generateBtns()}</div>;
  }
}

export default App;
