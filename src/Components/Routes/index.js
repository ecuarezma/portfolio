import React from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Content from "../Content";
import Home from "../../Pages/Home";
import Apps from "../../Pages/Apps";
import Projects from "../../Pages/Projects";
// import CV from "../../Pages/CV";
import "./styles.css";

const Routes = () => {
  const routeProps = [
    { path: "/", name: "Home", Component: Home },
    { path: "/apps", name: "Apps", Component: Apps },
    { path: "/projects", name: "Projects", Component: Projects },
  ];

  const routes = routeProps.map(({ path, Component }) => (
    <Route key={path} exact path={path}>
      {({ match }) => (
        <CSSTransition
          in={match != null}
          timeout={500}
          classNames="page"
          unmountOnExit
        >
          <div className="page">
            <Content>
              <Component />
            </Content>
          </div>
        </CSSTransition>
      )}
    </Route>
  ));

  return (
    <TransitionGroup>
      <Switch>
        {routes}
        <Route
          render={() => (
            <Content>
              <Home />
            </Content>
          )}
        />
      </Switch>
    </TransitionGroup>
  );
};

export default Routes;
