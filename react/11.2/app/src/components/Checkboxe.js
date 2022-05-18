import React from "react";
import ReactDOM from "react";

class Checkboxe extends React.Component {
  constructor() {
    super();
    this.state = { status: false, text: "" };
  }

  componentDidMount() {
    this.setState((prev, props) => {
      return { status: props.status, text: props.text };
    });
  }

  handleOnChange = () => {
    this.setState((prev) => {
      return { status: !prev.status };
    });

    this.props.callback(!this.state.status);
  };

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.status}
          onChange={this.handleOnChange}
        />
        <label>{this.props.text}</label>
      </div>
    );
  }
}

export default Checkboxe;
