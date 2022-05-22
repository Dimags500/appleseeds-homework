import React from "react";
import RandJoke from "./RandJoke";
import JokesCategories from "./JokesCategories";
import SearchJoke from "./SearchJoke";

class Main extends React.Component {
  render() {
    return (
      <div>
        <RandJoke />
        <JokesCategories />
        <SearchJoke />
      </div>
    );
  }
}

export default Main;
