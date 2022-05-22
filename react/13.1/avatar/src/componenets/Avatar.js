import React from "react";
import axios from "axios";
import "./main.css";

class Avatar extends React.Component {
  constructor() {
    super();

    this.state = { data: [] };
  }

  componentDidMount() {
    this.setState(() => {
      return { data: this.props.data[0] };
    });
  }

  render() {
    return (
      <div className="avatar">
        {this.state.data.name}

        <img src={this.state.data.picture}></img>
      </div>
    );
  }
}

export default Avatar;
