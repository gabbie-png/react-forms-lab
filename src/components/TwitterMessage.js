import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  render() {
    let totalChar = this.props.maxChars - this.state.value.length
    return (
      <div>
        {totalChar}
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default TwitterMessage;
