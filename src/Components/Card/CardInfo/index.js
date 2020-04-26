import React from "react";
import classes from "./CardInfo.module.scss";

const CardInfo = ({ children }) => {
  return (
    <div className={`${classes.CardInfo} info`}>
      <figcaption id="info">
        <p>{children}</p>
      </figcaption>
    </div>
  );
};

export default CardInfo;
