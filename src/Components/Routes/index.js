import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Apps from "../../Pages/Apps";
import Projects from "../../Pages/Projects";
import CV from "../../Pages/CV";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/Apps" exact render={() => <Apps />} />
      <Route path="/Projects" exact render={() => <Projects />} />
      <Route path="/CV" exact render={() => <CV />} />
    </Switch>
  );
};

export default Routes;
