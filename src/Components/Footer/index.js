import React from "react";
import classes from "./footer.module.scss";

const Footer = props => {
  return (
    <div className={classes.Footer}>
      <div className={classes.polygon}></div>
      <div className={classes.icons}>
        <i class="far fa-envelope"></i>
        <div className={classes.verticalIcons}>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
