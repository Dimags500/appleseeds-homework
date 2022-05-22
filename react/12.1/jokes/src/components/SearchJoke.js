import React from "react";
import axios from "axios";

class SearchJoke extends React.Component {
  state = {
    joke: "some jokke will bw here",
    serchTerm: "",
  };

  async getJOke(term) {
    const res = await axios.get(
      "https://api.chucknorris.io/jokes/search?query=" + term
    );

    this.setState(() => {
      let min = Math.ceil(0);
      let max = Math.floor(res.data.result.length);
      let joke = Math.floor(Math.random() * (max - min)) + min;

      return { joke: res.data.result[joke].value };
    });
  }
  render() {
    return (
      <div>
        <h3>Search Joke</h3>
        <input
          onChange={(e) =>
            this.setState(() => {
              return { serchTerm: e.target.value };
            })
          }
        />
        <button onClick={() => this.getJOke(this.state.serchTerm)}>
          Search
        </button>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

export default SearchJoke;
