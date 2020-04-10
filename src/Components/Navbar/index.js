import React from "react";
import Link from "./Link";
import classes from "./Navbar.module.css";

const Navbar = props => {
  return (
    <nav className={props.darkMode ? classes.darkMode : classes.Navbar}>
      <Link>Apps</Link>
      <Link>Projects</Link>
      <Link>CV</Link>
      <Link>Blog</Link>
    </nav>
  );
};

export default Navbar;
