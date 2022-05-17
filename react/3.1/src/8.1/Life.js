import React from "react";
import ReactDOM from "react-dom/client";

class Life extends React.Component {
  constructor() {
    super();

    this.state = {
      favoriteColor: "red",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "green" });
    }, 1000);
  }

  componentDidUpdate() {
    const div = document.getElementById("hiden");
    div.innerText = "The updated favorite color is " + this.state.favoriteColor;
  }

  render() {
    return (
      <div>
        {" "}
        <h1> my favoriteColor is {this.state.favoriteColor}</h1>
        <div id="hiden"></div>
      </div>
    );
  }
}

export default Life;
