import React from "react";
import ReactDOM from "react-dom/client";
import "./Cards.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img img src={this.props.data.url} />
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.text}</p>
        <div>
          <span>
            <a href={this.props.data.link1}>link1</a>
          </span>
          <span>
            <a href={this.props.data.link2}>link2</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Card;
