import React from "react";
import NavLink from "./NavLink";

import styled from "styled-components";

const StyledNavbar = styled.nav`
  position: fixed;
  width: 100vw;
  bottom: 0;
  transition: none;
  z-index: 300;

  @media (min-width: 600px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 35%;
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
      <NavLink>Resume</NavLink>
    </StyledNavbar>
  );
};

export default Navbar;
