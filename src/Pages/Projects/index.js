import React from "react";
import Card from "../../Components/Card";
import colorApp from "../../assets/colorApp.png";
import entrante from "../../assets/entrante.png";

import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <article className={classes.Projects}>
      <Card src={colorApp} title="Color App">
        Create a custom palette!
      </Card>
      <Card src={entrante} title="Entrante">
        Online showcase of artist's work.
      </Card>
    </article>
  );
};

export default Projects;
