import React from "react";
import ReactDOM from "react-dom/client";
import "./8.3.css";

class BoxesApp2 extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      color: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        color: Math.floor(Math.random() * 16777215).toString(16),
        count: this.state.count + 1,
      });
      console.log(this.state.color);
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.count > 5) {
      let box = document.getElementsByClassName("box");
      console.log(box[0].classList.add("circle"));
    }
  }

  render() {
    return (
      <div>
        <div
          className="box"
          style={{ backgroundColor: "#" + this.state.color }}
        >
          {" "}
        </div>
      </div>
    );
  }
}

export default BoxesApp2;
