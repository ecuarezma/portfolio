import React from "react";
import classes from "./home.module.scss";
import profile from "../../assets/profile.jpg";

const Home = props => {
  return (
    <div className={classes.Home}>
      <div className={classes.polygon}>
        <img className={classes.profile} src={profile} alt="profile" />
        <img className={classes.profile} src={profile} alt="profile" />
        <img className={classes.profile} src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Home;
