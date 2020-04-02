import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false
    };
  }

  render() {
    return (
      <div>
        <ul>
          <li>header</li>
          <Navbar darkMode={this.state.isDarkMode} />
          <Footer />
        </ul>
      </div>
    );
  }
}

export default App;
