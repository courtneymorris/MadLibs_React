import React, { Component } from "react";

import DummyData from "../../static/assets/dummyData.json";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      textInput: event.target.value,
    });
  }

  render() {
    return (
      <div className="input-wrapper">
        {!this.props.submitted ? (
          <input
            placeholder={this.props.wordType}
            value={this.state.textInput}
            onChange={this.handleChange}
          />
        ) : (
          <p>{this.state.textInput}</p>
        )}
      </div>
    );
  }
}
