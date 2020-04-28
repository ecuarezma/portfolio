import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Content from "../Content";
import Home from "../../Pages/Home";
import Apps from "../../Pages/Apps";
import Projects from "../../Pages/Projects";
// import CV from "../../Pages/CV";
import "./styles.css";

const Routes = () => {
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/apps", name: "Apps", Component: Apps },
    { path: "/projects", name: "Projects", Component: Projects },
  ];

  return (
    <>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
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
      ))}
    </>
  );
};

export default Routes;
