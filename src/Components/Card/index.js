import React from "react";
import classes from "./Card.module.scss";

const Card = props => {
  return (
    <div className={classes.Card}>
      <h4>{props.title}</h4>
      <img src={props.src} alt="" />
      <figcaption>{props.children}</figcaption>
    </div>
  );
};

export default Card;
