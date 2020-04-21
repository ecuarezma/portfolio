import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Home from "../../Pages/Home";
import Apps from "../../Pages/Apps";
import Projects from "../../Pages/Projects";
import CV from "../../Pages/CV";
import "./styles.css";

const Routes = () => {
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/apps", name: "Apps", Component: Apps },
    { path: "/projects", name: "Projects", Component: Projects },
  ];

  return (
    <>
      {/* <Route path="/" exact render={() => <Home />} />
      <Route path="/Apps" exact render={() => <Apps />} />
      <Route path="/Projects" exact render={() => <Projects />} />
      <Route path="/CV" exact render={() => <CV />} /> */}
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
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </>
  );
};

export default Routes;

// function Example() {
//   return (
//     <Router>
//       <>
//         <Container className="container">
//           {routes.map(({ path, Component }) => (
//             <Route key={path} exact path={path}>
//               {({ match }) => (
//                 <CSSTransition
//                   in={match != null}
//                   timeout={300}
//                   classNames="page"
//                   unmountOnExit
//                 >
//                   <div className="page">
//                     <Component />
//                   </div>
//                 </CSSTransition>
//               )}
//             </Route>
//           ))}
//         </Container>
//       </>
//     </Router>
//   )
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<Example />, rootElement)
