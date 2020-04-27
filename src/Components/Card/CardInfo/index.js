import React from "react";
import classes from "./CardInfo.module.scss";

const CardInfo = ({ children }) => {
  return (
    <div className={`${classes.CardInfo} info`}>
      <figcaption id="info">{children}</figcaption>
    </div>
  );
};

export default CardInfo;
