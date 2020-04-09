import React from "react";
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.polygon}></div>
      <div className={classes.icons}>
        <a href="mailto: ecuarezma@gmail.com">
          <i className="far fa-envelope"></i>
        </a>
        <div className={classes.verticalIcons}>
          <a href="https://www.linkedin.com/in/cuarezma/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/ecuarezma">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
