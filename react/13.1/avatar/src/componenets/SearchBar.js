import React from "react";
import axios from "axios";

class SearchBar extends React.Component {
  constructor() {
    super();

    this.searchRef = React.createRef();
  }

  serchCallback(e) {
    this.props.callback(this.searchRef.current.value);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <input onChange={(e) => this.serchCallback(e)} ref={this.searchRef} />
      </div>
    );
  }
}

export default SearchBar;
