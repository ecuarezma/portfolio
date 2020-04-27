import React, { useEffect } from "react";
import classes from "./Content.module.scss";

const Content = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <div className={classes.Content}>{props.children}</div>;
};

export default Content;
