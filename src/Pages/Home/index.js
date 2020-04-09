import React from "react";
import Skills from "./Skills";
import classes from "./home.module.scss";
import profile from "../../assets/profile.jpg";

const Home = props => {
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
          "Having walked many paths in life, each one has shaped me into what I
          am today"
        </p>
        <Skills />
        <hr />
      </article>
    </div>
  );
};

export default Home;
