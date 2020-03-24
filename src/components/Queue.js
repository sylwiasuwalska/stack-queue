import React from "react";
import FormPattern from "./FormPattern.js";
import { Form, Button } from "react-bootstrap";

class Queue extends React.Component {
  constructor() {
    super();
    this.state = { items: [], number: 0 };
  }

  pushToQueue = element => {
    let items = this.state.items;
    items.push(element);
    this.setState({ items });
  };

  popFromQueue = () => {
    let items = this.state.items;
    if (this.state.items.length == 0) return "Underflow";
    let element = items.pop();
    this.setState({ items });
    return element;
  };

  isEmpty = () => {
    if (!this.state.items.length == 0) {
      return this.printStack();
    } else {
      return "Stack is empty";
    }
  };

  printStack = () => {
    var str = "";
    for (let i = 0; i < this.state.items.length; i++)
      str += this.state.items[i] + " ";
    return `Current stack: ${str}`;
  };

  handleChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="Stack">
        <section>
          <h2>Stack</h2>
        </section>
        <FormPattern
          name={"stack"}
          number={this.state.number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          push={this.pushToStack}
          pop={this.popFromStack}
        />
        <p>{this.isEmpty()}</p>
      </div>
    );
  }
}

export default Queue;
