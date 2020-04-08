import React from "react";
import classes from "./home.module.scss";
import profile from "../../assets/profile.jpg";

const Home = props => {
  return (
    <div className={classes.Home}>
      <div className={classes.polygon}>
        <img className={classes.profile} src={profile} alt="profile" />
      </div>
      <article className={classes.content}>
        <p>
          Having walked many paths in life, I strive to learn the depths of web
          programming.
        </p>
      </article>
    </div>
  );
};

export default Home;
