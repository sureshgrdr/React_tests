//Class Component
import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Suresh", job: "VIP" };
  }
  render() {
    return (
      <div className="component">
        <h1>Class Component</h1>
        <br />
        <p>{`${this.state.name} is a ${this.state.job} Year: ${this.props.age}`}</p>
      </div>
    );
  }
}

export default ClassComponent;
