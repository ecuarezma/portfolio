import React from "react";

import Card from "../../Components/Card";
import colorApp from "../../assets/colorApp.png";
import entrante from "../../assets/entrante.png";

import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <article className={classes.Projects}>
      <Card
        src={colorApp}
        title="Color App"
        link="https://color-app-dbac8.firebaseapp.com/"
        caption="Create a custom palette!"
      >
        App was made with create-react-app and react-router. This was a final
        project done for a React course on Udemy. We made extensive use of the
        Material UI library as well as some CSSTransitions and drag and drop
        packages.
      </Card>
      <Card
        src={entrante}
        title="Entrante"
        link="https://entrante-next.now.sh/"
        caption="Online showcase of artist's work."
      ></Card>
    </article>
  );
};

export default Projects;
