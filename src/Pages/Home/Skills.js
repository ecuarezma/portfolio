import React from "react";
import classes from "./skills.module.scss";

const Skills = () => {
  return (
    <div className={classes.Skills}>
      <div className={classes.icons}>
        <i className="fab fa-js-square"></i>
        <i className="fab fa-css3-alt"></i>
        <i className="fab fa-html5"></i>
        <i className="fab fa-react"></i>
      </div>
      <div className={classes.icons}>
        <i className="fab fa-node-js"></i>
      </div>
    </div>
  );
};

export default Skills;
