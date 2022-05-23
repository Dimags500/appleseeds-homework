import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.textareaRef = React.createRef();
    this.input1 = React.createRef();
  }

  componentDidMount = () => {
    this.inputRef.current.focus();

    this.input1.current.setFocuse();
  };

  getText() {
    navigator.clipboard
      .writeText(this.textareaRef.current.value)
      .then(() => console.log("added"));

    this.textareaRef.current.value = "";
  }
  readText() {
    navigator.clipboard
      .readText()
      .then((val) => (this.textareaRef.current.value = val));
  }
  render() {
    return (
      <div className="App">
        <FirstInput ref={this.input1} />
        <input placeholder="inpout 2 " ref={this.inputRef} />
        <br></br>
        <textarea ref={this.textareaRef}></textarea>
        <button
          onClick={() => {
            this.getText();
          }}
        >
          Copy
        </button>
        <button
          onClick={() => {
            this.readText();
          }}
        >
          Read Text
        </button>
      </div>
    );
  }
}

export default App;

class FirstInput extends React.Component {
  constructor() {
    super();

    this.inputRef = React.createRef();
  }
  setFocuse() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input placeholder="inpout 1 " ref={this.inputRef} />
      </div>
    );
  }
}
