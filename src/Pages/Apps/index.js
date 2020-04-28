import React, { useEffect } from "react";
import useToggleState from "../../hooks/useToggleState";
import Card from "../../Components/Card";

import classes from "./Apps.module.scss";
import softRidersLowRes from "../../assets/soft-riders-lowRes.jpg";
import softRiders from "../../assets/soft-riders.png";

const Apps = () => {
  const [isLoading, toggleLoading] = useToggleState();

  useEffect(toggleLoading, []);

  return (
    <article className={classes.Apps}>
      <Card
        src={isLoading ? softRidersLowRes : softRiders}
        title="Soft Riders"
        link="http://www.soft-riders.com"
        caption="A curated playlist hub by host, Miki Lee"
        isLoading={isLoading}
      >
        My first live app for a client featuring API calls to various endpoints
        such as{" "}
        <em>
          <strong>Spotify</strong>
        </em>{" "}
        and{" "}
        <em>
          <strong>Vimeo</strong>
        </em>
        . In addition to featuring an email sign-up service, I utilized
        Moment.js to live stream a radio show on a set schedule.
        <br />
        <blockquote style={{ fontWeight: "300" }}>
          "As a proud owner of my first website Edgar really worked in depth
          with my vision. He was able to walk me through everything that I
          needed to know with complete transparency, optimal solutions and most
          importantly patience. I am extremely psyched to see what he does not
          only for my website moving forward but for all of his clients. 5
          stars"
          <span role="img" aria-label="star emoji">
            ⭐️⭐️⭐️⭐️⭐️
          </span>{" "}
          <br />
          <cite>- Miki Lee</cite>
        </blockquote>
      </Card>
    </article>
  );
};

export default Apps;
