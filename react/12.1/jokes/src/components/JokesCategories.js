import React from "react";
import axios from "axios";

class JokesCategories extends React.Component {
  state = {
    joke: "some jokke will bw here",
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const res = await axios.get("https://api.chucknorris.io/jokes/categories");

    console.log(res);
    this.setState(() => {
      return { categories: res.data };
    });
  }
  async getJokeByCategory(category) {
    const res = await axios.get(
      "https://api.chucknorris.io/jokes/random?category=" + category
    );

    this.setState(() => {
      return { joke: res.data.value };
    });
  }

  categoryOnClick(e) {
    console.log(e.target.id);
    this.getJokeByCategory(e.target.id);
  }

  createCategoriesBtns() {
    let btns = [];
    let categories = this.state.categories;
    for (let i = 0; i < categories.length; i++) {
      let item = (
        <button
          key={categories[i]}
          id={categories[i]}
          onClick={(e) => this.categoryOnClick(e)}
        >
          {categories[i]}
        </button>
      );

      btns.push(item);
    }

    return btns;
  }
  render() {
    return (
      <div>
        <h3>Joke by Category</h3>
        <div>{this.createCategoriesBtns()}</div>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

export default JokesCategories;
