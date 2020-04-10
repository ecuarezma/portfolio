import React from "react";
import classes from "./Card.module.scss";

const Card = props => {
  return (
    <div className={classes.Card}>
      <figcaption>{props.children}</figcaption>
      <img src={props.src} alt="" />
    </div>
  );
};

export default Card;
