import React from "react";
import axios from "axios";

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = { term: [] };
  }

  serchCallback(e) {
    this.setState(() => {
      return { term: e.target.value };
    });

    this.props.callback(e.target.value);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <input onChange={(e) => this.serchCallback(e)} />
      </div>
    );
  }
}

export default SearchBar;
