import React from "react";
import { withRouter } from "react-router-dom";
import classes from "./header.module.scss";

const Header = props => {
  const handleClick = () => {
    props.history.push("/");
  };

  return (
    <header className={classes.Header}>
      <div className={classes.title} onClick={handleClick}>
        <h1>Edgar Cuarezma</h1>
        <h3>Full Stack Developer</h3>
      </div>
      <div className={classes.polygon}></div>
    </header>
  );
};

export default withRouter(Header);
