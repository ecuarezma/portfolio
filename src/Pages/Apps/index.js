import React from "react";
import Card from "../../Components/Card";

import classes from "./Apps.module.scss";
import softRiders from "../../assets/soft-riders.png";

const Apps = () => {
  return (
    <article className={classes.Apps}>
      <Card
        src={softRiders}
        title="Soft Riders"
        link="http://www.soft-riders.com"
      >
        A curated playlist hub by host, Miki Lee
      </Card>
    </article>
  );
};

export default Apps;
