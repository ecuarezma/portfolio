import React from "react";
import Card from "../../Components/Card";
import classes from "./Apps.module.scss";
import image from "../../assets/soft-riders.png";

const Apps = () => {
  return (
    <article className={classes.Apps}>
      <Card src={image}>Soft Riders App</Card>
    </article>
  );
};

export default Apps;
