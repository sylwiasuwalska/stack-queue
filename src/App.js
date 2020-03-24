import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Stack from "./components/Stack.js";
import Queue from "./components/Queue.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stack, Queue, Linked List</h1>
        <p>
          Project created in relation to the course Algorithms I by Princton
          University, published on Coursera.
        </p>
      </header>
      <section>
        <Stack />
        <Queue />
      </section>

      <footer></footer>
    </div>
  );
}

export default App;
