import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul>
          <li>header</li>
          <li>particle</li>
          <li>image</li>
          <Navbar />
          <li>footer</li>
        </ul>
      </div>
    );
  }
}

export default App;
