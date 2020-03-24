import React from "react";

class Stack extends React.Component {
  constructor() {
    super();
    this.state = { items: [], value: "" };
  }

  push = element => {
    let items = this.state.items;
    this.items.push(element);
    this.setState({ items });
  };

  pop = () => {
    let items = this.state.items;
    if (this.state.items.length == 0) return "Underflow";
    let element = this.items.pop(element);
    this.setState({ items });
    return element;
  };

  isEmpty = () => {
    return this.state.items.length == 0;
  };

  printStack = () => {
    var str = "";
    for (let i = 0; i < this.state.items.length; i++)
      str += this.state.items[i] + " ";
    return str;
  };

  handleSubmit = event => {
    event.preventDefault();
    let value = event.target.value;

    //this.setState({ value: value });
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="Stack">
        <section>
          <h2>Stack</h2>
          <form>
            <label>
              <input type="text" name="name" onClick={this.handleSubmit} />
            </label>
            <input type="submit" />
          </form>
        </section>
      </div>
    );
  }
}

export default Stack;
