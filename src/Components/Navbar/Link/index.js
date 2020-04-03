import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  color: "black",
  textDecoration: "none",
  active: {
    color: "red"
  }
};

const Link = props => {
  return (
    <NavLink
      exact
      to={`/${props.children}`}
      style={style}
      activeStyle={style.active}
    >
      {props.children}
    </NavLink>
  );
};

export default Link;
