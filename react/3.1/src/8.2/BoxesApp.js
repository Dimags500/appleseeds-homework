import React from "react";
import ReactDOM from "react-dom/client";
import "./8.2.css";

class BoxesApp extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  hideBoxes() {
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "none";
    document.getElementById("box3").style.display = "none";
  }

  showBoxes() {
    document.getElementById("box1").style.display = "block";
    document.getElementById("box2").style.display = "block";
    document.getElementById("box3").style.display = "block";
  }

  componentDidMount() {
    setTimeout(() => {
      this.showBoxes();
    }, 1000);

    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.count >= 4) {
      this.hideBoxes();
    }
  }

  render() {
    return (
      <div>
        <div id="box1" className="box"></div>
        <div id="box2" className="box"></div>
        <div id="box3" className="box"></div>
      </div>
    );
  }
}

export default BoxesApp;
