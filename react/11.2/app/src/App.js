import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react";
import "./App.css";
import Checkboxe from "./components/Checkboxe";

class App extends React.Component {
  checkboxeStatus = (status) => {
    console.log("status in parent " + status);
  };
  render() {
    return (
      <div className="App">
        <Checkboxe status={true} text="first" callback={this.checkboxeStatus} />
        <Checkboxe
          status={false}
          text="second"
          callback={this.checkboxeStatus}
        />
        <Checkboxe status={true} text="third" callback={this.checkboxeStatus} />
        <Checkboxe status={false} text="last" callback={this.checkboxeStatus} />
      </div>
    );
  }
}

export default App;
