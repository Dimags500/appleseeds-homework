import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    text: "",
  };

  onChangeName = (e) => {
    this.setState(() => {
      return { name: e.target.value };
    });
  };
  onChangeText = (e) => {
    this.setState(() => {
      return { text: e.target.value };
    });
  };

  onSubmitHendler = (e) => {
    e.preventDefault();

    this.props.toggle(this.state);
  };

  componentDidMount() {
    this.setState(() => {
      return { name: this.props.data.name, text: this.props.data.text };
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHendler}>
          <label>Name</label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.onChangeName}
          />
          <br />
          <label>some text</label>

          <textarea
            id="text"
            value={this.state.text}
            onChange={this.onChangeText}
          />
          <button type="submit">Confirm</button>
        </form>
      </div>
    );
  }
}

export default Form;
