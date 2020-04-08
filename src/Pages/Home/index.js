import React from "react";
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
          Having walked many paths in life, I strive to learn the depths of web
          programming.
        </p>
        <p>
          Having walked many paths in life, I strive to learn the depths of web
          programming.
        </p>
        <p>
          Having walked many paths in life, I strive to learn the depths of web
          programming.
        </p>
        <p>
          Having walked many paths in life, I strive to learn the depths of web
          programming.
        </p>
        <p>
          Having walked many paths in life, I strive to learn the depths of web
          programming.
        </p>
      </article>
    </div>
  );
};

export default Home;
