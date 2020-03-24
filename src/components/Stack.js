import React from "react";
import FormPattern from "./FormPattern.js";
import { Form, Button } from "react-bootstrap";

class Stack extends React.Component {
  constructor() {
    super();
    this.state = { items: [], number: 0 };
  }

  pushToStack = element => {
    let items = this.state.items;
    items.push(element);
    this.setState({ items });
  };

  popFromStack = () => {
    let items = this.state.items;
    console.log(items);
    if (this.state.items.length == 0) return "Underflow";
    let element = items.pop();
    this.setState({ items });
    return element;
  };

  isEmpty = () => {
    console.log(this.state.items.length);
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
          methodName1="push"
          methodName2="pop"
          number={this.state.number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          add={this.pushToStack}
          remove={this.popFromStack}
        />
        <p>{this.isEmpty()}</p>
      </div>
    );
  }
}

export default Stack;
