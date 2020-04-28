import React, { useEffect } from "react";
import useToggleState from "../../hooks/useToggleState";

import Card from "../../Components/Card";
import colorApp from "../../assets/colorApp.png";
import colorAppLowRes from "../../assets/colorApp-lowRes.jpg";
import entrante from "../../assets/entrante.png";
import entranteLowRes from "../../assets/entrante-lowRes.jpg";

import classes from "./Projects.module.scss";

const Projects = () => {
  const [isLoading, toggleLoading] = useToggleState();

  useEffect(toggleLoading, []);

  return (
    <article className={classes.Projects}>
      <Card
        src={isLoading ? colorAppLowRes : colorApp}
        title="Color App"
        link="https://color-app-dbac8.firebaseapp.com/"
        caption="Create a custom palette!"
        isLoading={isLoading}
      >
        Color App was made with create-react-app and react-router. This was a
        final project done for a React course on Udemy. We made extensive use of
        the Material UI library as well as some CSSTransitions and drag and drop
        packages.
      </Card>
      <Card
        src={isLoading ? entranteLowRes : entrante}
        title="Entrante"
        link="https://entrante-next.now.sh/"
        caption="Online showcase of artist's work."
        isLoading={isLoading}
      >
        The first website I made for myself as an illustrator fresh out of
        college. I have since gone back and refactored it as a way of applying
        what I have learned. This iteration uses Next.js with React, a far cry
        from its origins in Dreamweaver...
      </Card>
    </article>
  );
};

export default Projects;
