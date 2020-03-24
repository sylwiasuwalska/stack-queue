import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import Stack from "./components/Stack.js";
import Queue from "./components/Queue.js";

function App() {
  return (
    <div className="App">
      <Jumbotron className="header" fluid>
        <Container>
          <h1>Stack, Queue, Linked List</h1>
          <p>
            Project created in relation to the course Algorithms I by Princton
            University, published on Coursera.
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <Stack />
          </Col>
          <Col>
            <Queue />
          </Col>
        </Row>
      </Container>

      <footer></footer>
    </div>
  );
}

export default App;
