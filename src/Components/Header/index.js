import React from "react";
import classes from "./header.module.css";

const Header = props => {
  return (
    <div className={classes.Header}>
      <div className={classes.title}>
        <header>Edgar Cuarezma</header>
      </div>
      <div className={classes.polygon}></div>
    </div>
  );
};

export default Header;
