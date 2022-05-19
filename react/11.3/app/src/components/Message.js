import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.data.name}</p>
        <p> {this.props.data.text}</p>

        <button
          onClick={() => {
            this.props.edit();
          }}
        >
          Edit
        </button>
        <button onClick={this.props.send}>Send</button>
      </div>
    );
  }
}

export default Message;
