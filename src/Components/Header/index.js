import React from "react";
import classes from "./header.module.scss";

const Header = props => {
  return (
    <div className={classes.Header}>
      <div className={classes.title}>
        <header>
          <h1>Edgar Cuarezma</h1>
          <h3>Web App Developer</h3>
        </header>
      </div>
      <div className={classes.polygon}></div>
    </div>
  );
};

export default Header;
