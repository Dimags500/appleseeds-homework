import React from "react";
import axios from "axios";

class RandJoke extends React.Component {
  state = {
    joke: "some jokke will bw here",
  };

  async getJOke() {
    const res = await axios.get("https://api.chucknorris.io/jokes/random");

    this.setState(() => {
      return { joke: res.data.value };
    });
  }
  render() {
    return (
      <div>
        <h3>Random Joke</h3>
        <p>{this.state.joke}</p>
        <button onClick={() => this.getJOke()}>Get Some Joke</button>
      </div>
    );
  }
}

export default RandJoke;
