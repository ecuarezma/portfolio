import React from "react";
import Link from "./Link";
import classes from "./Navbar.module.css";
import style from "./Link/Link.module.scss";

const Navbar = (props) => {
  return (
    <nav className={props.darkMode ? classes.darkMode : classes.Navbar}>
      <Link>Apps</Link>
      <Link>Projects</Link>
      {/* <Link>CV</Link> */}
      <div className={style.Link}>
        <a
          href="https://docs.google.com/document/d/1RNRpD5Chat60MCSoF-Zs4XBJlnsfKJQtssRcwpdmWmA/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </div>
      {/* <Link>Blog</Link> */}
    </nav>
  );
};

export default Navbar;
