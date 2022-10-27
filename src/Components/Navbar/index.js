import React from "react";
import NavLink from "./NavLink";

import styled from "styled-components";

const StyledNavbar = styled.nav`
  position: fixed;
  width: 100vw;
  bottom: 0;
  transition: none;

  @media (min-width: 600px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 35%;
    z-index: 300;
  }

  @media (max-height: 600px) and (min-width: 1000px) {
    display: block;
    margin: 0 10%;
    width: 30%;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink>Apps</NavLink>
      <NavLink>Projects</NavLink>
      <NavLink>CV</NavLink>
      {/* <StyledLink>
        <a
          href="https://docs.google.com/document/d/1RNRpD5Chat60MCSoF-Zs4XBJlnsfKJQtssRcwpdmWmA/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </StyledLink> */}
      {/* <Link>Blog</Link> */}
    </StyledNavbar>
  );
};

export default Navbar;
