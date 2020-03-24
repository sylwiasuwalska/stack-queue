import React from "react";
import FormPattern from "./FormPattern.js";
import { Form, Button } from "react-bootstrap";

class Queue extends React.Component {
  constructor() {
    super();
    this.state = { items: [], number: 0 };
  }

  enqueue = element => {
    let items = this.state.items;
    items.push(element);
    this.setState({ items });
  };

  dequeue = () => {
    let items = this.state.items;
    if (this.state.items.length == 0) return "Underflow";
    let element = items.shift();
    this.setState({ items });
    return element;
  };

  isEmpty = () => {
    if (!this.state.items.length == 0) {
      return this.printQueue();
    } else {
      return "Queue is empty";
    }
  };

  printQueue = () => {
    var str = "";
    for (let i = 0; i < this.state.items.length; i++)
      str += this.state.items[i] + " ";
    return `Current queue: ${str}`;
  };

  handleChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="Queue">
        <section>
          <h2>Queue</h2>
          <p>FIFO - Fast In First Out</p>
        </section>
        <FormPattern
          name="queue"
          methodName1="enqueue"
          methodName2="dequeue"
          number={this.state.number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          add={this.enqueue}
          remove={this.dequeue}
        />
        <p>{this.isEmpty()}</p>
      </div>
    );
  }
}

export default Queue;
