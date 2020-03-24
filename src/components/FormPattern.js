import React from "react";
import { Form, Button } from "react-bootstrap";

class FormPattern extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Form.Group>
          <Form.Label>
            Add new element to {this.props.name}:
            <Form.Control
              type="text"
              value={this.props.number}
              onChange={this.props.handleChange}
            />
          </Form.Label>
        </Form.Group>

        <div>
          You element in {this.props.name} is: {this.props.number}
        </div>
        <Button
          variant="secondary"
          block
          onClick={() => this.props.push(this.props.number)}
        >
          Method Push
        </Button>
        <Button variant="secondary" block onClick={this.props.pop}>
          Method Pop
        </Button>
      </Form>
    );
  }
}

export default FormPattern;
