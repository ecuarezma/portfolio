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
      >
        Create a custom palette!
      </Card>
      <Card
        src={entrante}
        title="Entrante"
        link="https://entrante-next.now.sh/"
      >
        Online showcase of artist's work.
      </Card>
    </article>
  );
};

export default Projects;
