import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component {
  onClickHandler = () => {
    this.props.callback(this.props.color);
  };

  render() {
    return (
      <div>
        <button onClick={this.onClickHandler}>
          {`btn ${this.props.num} color is ${this.props.color}`}{" "}
        </button>
      </div>
    );
  }
}

export default Button;
