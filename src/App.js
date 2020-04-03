import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
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
        <Header />
        <Switch>
          <Route path="/" render={() => <Home />} />
          <Route />
          <Route />
        </Switch>
        <Navbar darkMode={this.state.isDarkMode} />
        <Footer />
      </div>
    );
  }
}

export default App;
