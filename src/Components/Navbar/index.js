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

const StyledLink = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap");
  width: 100%;
  padding: 2px;
  background-color: ${({ theme }) => theme.colors.orange};
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainBgColor};
  @media (min-width: 600px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
    margin: 1rem;
    padding: 0;
    width: 200px;
    height: 200px;
    cursor: pointer;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    transition: all 200ms ease-out;
    &::before {
      content: "";
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      background-color: ${({ theme }) => theme.colors.orange};
      width: 90%;
      height: 90%;
      transition: all 200ms ease-out;
    }
    &:nth-child(2) {
      margin-left: auto;
    }

    @media (min-width: 900px) {
      width: 225px;
      height: 225px;
    }
    @media (min-width: 1200px) {
      width: 250px;
      height: 250px;
      margin: 0.5rem 1rem;
    }
    @media (max-height: 900px) and (min-width: 1000px) {
      width: 220px;
      height: 220px;
      margin: 0;
      &:nth-child(2) {
        margin-left: auto;
      }
    }
    @media (max-height: 750px) and (min-width: 1000px) {
      width: 200px;
      height: 200px;
    }
    @media (max-height: 640px) and (min-width: 1000px) {
      width: 180px;
      height: 180px;
    }

    &:first-child {
      border-top: 2px solid ${({ theme }) => theme.colors.mainBgColor};
    }
    &:last-child {
      border-bottom: none;
    }

    .active {
      font-weight: normal;
      transition: all 200ms ease-in;
      @media (min-width: 600px) {
        color: ${({ theme }) => theme.colors.orange};
        background-color: #efefef;
        font-weight: 700;
      }
    }
  }
  a {
    padding-left: 0.5rem;
    vertical-align: middle;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.mainBgColor};
    transition: all 200ms ease-out;
    @media (min-width: 600px) {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      width: 80%;
      height: 80%;
      font-family: "Comfortaa", cursive;
      font-size: 2rem;
      font-weight: 700;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      &:hover {
        color: ${({ theme }) => theme.colors.orange};
        background-color: #efefef;
        font-weight: 700;
      }
    }
    &:focus {
      background-color: none;
    }
    @media (min-width: 900px) {
      font-size: 2.5rem;
    }
    @media (max-height: 900px) and (min-width: 1000px) {
      font-size: 2rem;
    }
    @media (max-height: 700px) and (min-width: 1000px) {
      font-size: 1.8rem;
    }
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
