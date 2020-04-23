import React, { Component } from "react";

import Header from "./Components/Header";
import Routes from "./Components/Routes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  render() {
    return (
      <div className={"background"}>
        <Header />
        <Routes />
        <Navbar darkMode={this.state.isDarkMode} />
        <Footer />
      </div>
    );
  }
}

export default App;
