import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.polygon} />
      <div className={classes.icons}>
        <div className={classes.contact}>
          <a href="mailto: ecuarezma@gmail.com">
            <i className="far fa-envelope" />
          </a>
        </div>
        <div className={classes.verticalIcons}>
          <a href="https://www.linkedin.com/in/cuarezma/">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://github.com/ecuarezma">
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
