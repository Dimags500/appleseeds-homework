import React from "react";
import ReactDOM from "react-dom/client";
import "../App.css";

class Button extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <button className={this.props.data.style}>{this.props.data.text} </button>
    );
  }
}

export default Button;
