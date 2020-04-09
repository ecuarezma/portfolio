import React from "react";
import classes from "./content.module.scss";

const Content = props => {
  return <div className={classes.Content}>{props.children}</div>;
};

export default Content;
