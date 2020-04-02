import React from "react";
import Link from "./Link";
import classes from "./navbar.module.css";

const Navbar = props => {
  return (
    <div className={props.darkMode ? classes.darkMode : classes.Navbar}>
      <Link>Apps</Link>
      <Link>Projects</Link>
      <Link>CV</Link>
      <Link>Blog</Link>
    </div>
  );
};

export default Navbar;
