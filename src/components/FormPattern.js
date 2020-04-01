import React from "react";
import {Button, Form} from "react-bootstrap";

class FormPattern extends React.Component {
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
                    <p>
                        Your element in {this.props.name} is: {this.props.number}
                    </p>
                </div>
                <Button
                    variant="secondary"
                    block
                    onClick={() => this.props.add(this.props.number)}
                >
                    Method {this.props.methodName1}
                </Button>
                <Button variant="secondary" block onClick={this.props.remove}>
                    Method {this.props.methodName2}
                </Button>
            </Form>
        );
    }
}

export default FormPattern;
