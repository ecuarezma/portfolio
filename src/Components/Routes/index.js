import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import useToggleState from "../../hooks/useToggleState";

import Content from "../Content";
import Loader from "../Loader";
import Home from "../../Pages/Home";
import Apps from "../../Pages/Apps";
import Projects from "../../Pages/Projects";
// import CV from "../../Pages/CV";
import "./styles.css";

const Routes = () => {
  const [loading, toggleLoading] = useToggleState();
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/apps", name: "Apps", Component: Apps },
    { path: "/projects", name: "Projects", Component: Projects },
  ];

  useEffect(toggleLoading, []);

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
                {loading ? (
                  <Loader />
                ) : (
                  <Content>
                    <Component />
                  </Content>
                )}
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </>
  );
};

export default Routes;
