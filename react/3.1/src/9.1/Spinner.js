import React from "react";
import ReactDOM from "react-dom/client";
import "./spinners.css";

class Spinner extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div className={"spinner" + this.props.type}></div>;
  }
}

export default Spinner;
