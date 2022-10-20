import React from "react";
import Particles from "react-tsparticles";
import config from "./particles";
import classes from "./Header.module.scss";

const Header = (props) => {
  const handleClick = () => {
    props.history.push("/");
  };

  return (
    <>
      <header className={classes.Header}>
        <div className={classes.title} onClick={handleClick}>
          <h1>Edgar Cuarezma</h1>
          <h3>Full Stack Developer</h3>
        </div>
      </header>
      <Particles className={classes.polygon} params={config} />
    </>
  );
};

export default Header;
