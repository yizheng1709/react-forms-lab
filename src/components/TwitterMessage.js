import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  updateState = (e) => {
    this.setState({message: e.target.value}
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.updateState} type="text" name="message" id="message" value={this.state.message}/>
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
