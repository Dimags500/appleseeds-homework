import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./boxes.css";
import Box4 from "./Box4";

class Box3 extends React.Component {
  render() {
    return (
      <div className="box3">
        <Box4 />
        <Box4 />
      </div>
    );
  }
}

export default Box3;
