import React, { useState, useEffect } from "react";
import Skills from "./Skills";
import Quotes from "./Quotes";

import classes from "./Home.module.scss";
import profile from "../../assets/profile.jpg";
import profileLowRes from "../../assets/profile-lowRes.jpg";

const Home = () => {
  const [preLoadImage, setImage] = useState(profileLowRes);

  useEffect(() => {
    setImage(profile);
  }, []);

  return (
    <div className={classes.Home}>
      <div className={classes.profile}>
        <img
          className={classes.profileImage}
          src={preLoadImage}
          alt={profileLowRes}
        />
      </div>

      <div className={classes.chevronDown}>
        <div id="left" />
        <div id="right" />
      </div>

      <article className={classes.content}>
        <div className={classes.quotes}>
          <Quotes />
        </div>
        <Skills />
        <hr />
        <p>
          I use all the tools available to me to create modern, simplistic and
          effective apps.
          <br />
          <br />
          Full-time parent, baker, artist, and programmer.
          <br />
          <br />
          <strong>
            <span>I would love to work with you on your next project!</span>
          </strong>
        </p>
      </article>
    </div>
  );
};

export default Home;
