import React from "react";
import classes from "./header.module.scss";

const Header = props => {
  return (
    <header className={classes.Header}>
      <div className={classes.title}>
        <h1>Edgar Cuarezma</h1>
        <h3>Full Stack Developer</h3>
      </div>
      <div className={classes.polygon}></div>
    </header>
  );
};

export default Header;
