import React, { Component } from "react";

import Input from "./input";
import DummyData from "../../static/assets/dummyData.json";

export default class Template extends Component {
  constructor() {
    super();

    const allTemplates = DummyData.templates;

    this.template =
      DummyData.templates[Math.floor(Math.random() * allTemplates.length)];

    this.state = {
      display: "none",
      submitted: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    event.preventDefault();

    this.setState({
      display: "block",
      submitted: true,
    });
  }

  renderTemplate() {
    return this.template.map((portion, index) => {
      if (index % 2 !== 0) {
        return (
          <Input
            wordType={portion}
            name={`input-${index}`}
            key={index}
            submitted={this.state.submitted}
          />
        );
      } else {
        return (
          <p
            className="template-text"
            key={index}
            style={{ display: this.state.display }}
          >
            {portion}
          </p>
        );
      }
    });
  }

  render() {
    return (
      <div>
        {!this.props.submitted ? (
          <form onSubmit={this.handleSubmit}>
            {this.renderTemplate()}
            <button type="submit">Submit</button>
          </form>
        ) : (
          <p>&nbsp;{this.renderTemplate()}&nbsp;</p>
        )}
      </div>
    );
  }
}
