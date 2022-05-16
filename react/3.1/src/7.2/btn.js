import React from "react";
import ReactDOM from "react-dom/client";
import Show from "./show";

class Btn extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    if (this.state.show) {
      return (
        <div>
          <button onClick={this.toggle}>hide</button>
          <Show />
        </div>
      );
    }

    return <button onClick={this.toggle}>Show</button>;
  }
}

export default Btn;
