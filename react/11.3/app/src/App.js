import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Form from "./components/Form";
import Message from "./components/Message";

class App extends React.Component {
  state = {
    showFrom: true,
    showMessage: false,
    form: { name: "isName", text: "isText" },
  };

  formToggle = (data) => {
    console.log("work " + data.name);
    console.log("work " + data.text);

    // this.setState((prev) => {
    //   return { showFrom: !prev.showFrom };
    // });

    // this.setState((prev) => {
    //   return { showMessage: !prev.showMessage };
    // });

    this.showFormToggle();

    this.setState((prev) => {
      return { name: data.name, text: data.text };
    });
  };

  sendForm = () => {
    alert("form sended");
  };

  showFormToggle = () => {
    this.setState((prev) => {
      return { showMessage: !this.state.showMessage };
    });

    this.setState((prev) => {
      return { showFrom: !this.state.showFrom };
    });
  };

  render() {
    return (
      <div>
        {this.state.showFrom && (
          <Form toggle={this.formToggle} data={this.state.form} />
        )}
        {this.state.showMessage && (
          <Message
            edit={this.showFormToggle}
            send={this.sendForm}
            data={this.state}
          />
        )}
      </div>
    );
  }
}

export default App;
