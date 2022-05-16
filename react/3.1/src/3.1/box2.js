import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./boxes.css";
import Box3 from "./Box3";

class Box2 extends React.Component {
  render() {
    return (
      <div className="box2">
        <Box3 />
      </div>
    );
  }
}

export default Box2;
