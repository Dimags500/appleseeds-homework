import React from "react";
import ReactDOM from "react-dom/client";
import Spinner from "./Spinner";

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      spinner: 1,
    };
  }

  componentDidMount() {
    this.setState({ spinner: this.randSpinner() });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  randSpinner() {
    return Math.floor(Math.random() * 3);
  }

  render() {
    if (!this.state.loading) {
      return <div>Spinner get off</div>;
    }

    return <Spinner type={this.state.spinner} />;

    //     switch (this.state.spinner) {
    //       case 1:
    //         return <Spinner type="spinner1" />;
    //       case 2:
    //         return <Spinner type="spinner2" />;
    //       case 3:
    //         return <Spinner type="spinner3" />;

    //       default:
    //         return <Spinner type="spinner1" />;
    //     }
  }
}

export default Parent;
