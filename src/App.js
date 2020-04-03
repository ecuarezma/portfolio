import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Apps from "./Pages/Apps";
import Projects from "./Pages/Projects";
import CV from "./Pages/CV";
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
          <Route path="/" exact render={() => <Home />} />
          <Route path="/Apps" exact render={() => <Apps />} />
          <Route path="/Projects" exact render={() => <Projects />} />
          <Route path="/CV" exact render={() => <CV />} />
        </Switch>
        <Navbar darkMode={this.state.isDarkMode} />
        <Footer />
      </div>
    );
  }
}

export default App;
