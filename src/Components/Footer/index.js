import React from "react";
import classes from "./footer.module.scss";

const Footer = props => {
  return (
    <div className={classes.Footer}>
      <div className={classes.polygon}></div>
      <div className={classes.icons}>
        <a href="mailto: ecuarezma@gmail.com">
          <i class="far fa-envelope"></i>
        </a>
        <div className={classes.verticalIcons}>
          <a href="https://www.linkedin.com/in/cuarezma/">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/ecuarezma">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
