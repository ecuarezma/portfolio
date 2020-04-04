import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./link.module.css";

const Link = props => {
  return (
    <div>
      <NavLink
        exact
        to={`/${props.children}`}
        className={classes.Link}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </div>
  );
};

export default Link;
