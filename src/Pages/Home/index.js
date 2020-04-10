import React from "react";
import Skills from "./Skills";
import classes from "./Home.module.scss";
import profile from "../../assets/profile.jpg";

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.profile}>
        <img className={classes.profileImage} src={profile} alt="profile" />
      </div>

      <div className={classes.chevronDown}>
        <div></div>
        <div></div>
      </div>

      <article className={classes.content}>
        <p>
          <em>
            "Having walked many paths in life, each one has shaped me into who I
            am today"
          </em>
        </p>
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
