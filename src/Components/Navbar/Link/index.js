import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Link.module.scss";

const Link = props => {
  return (
    <div className={classes.Link}>
      <NavLink
        exact
        to={`/${props.children.toLowerCase()}`}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </div>
  );
};

export default Link;
