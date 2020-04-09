import React from "react";
import classes from "./skills.module.scss";

const Skills = () => {
  return (
    <div className={classes.Skills}>
      <div className={classes.icons}>
        <i class="fab fa-js-square"></i>
        <i class="fab fa-css3-alt"></i>
        <i class="fab fa-html5"></i>
        <i class="fab fa-react"></i>
      </div>
      <div className={classes.icons}>
        <i class="fab fa-node-js"></i>
      </div>
    </div>
  );
};

export default Skills;
