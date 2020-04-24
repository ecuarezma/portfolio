import React from "react";
import classes from "./Card.module.scss";

const Card = ({ link, title, src, children }) => {
  return (
    <div className={classes.Card}>
      <h4>
        <a href={link}>{title}</a>
      </h4>
      <img src={src} alt="" />
      <figcaption>{children}</figcaption>
    </div>
  );
};

export default Card;
