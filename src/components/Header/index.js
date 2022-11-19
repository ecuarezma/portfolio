import React from "react";
import ParticlesComponent from "../Particles";
import { Link } from "gatsby";
import "@fontsource/raleway";
import styled from "styled-components";

const StyledWrapper = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1000;

  .header {
    font-family: "Raleway", sans-serif;
    color: rgb(253, 245, 230);
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    span {
      display: none;
    }
    @media (min-width: 600px) {
      h1,
      h3,
      span {
        display: inline;
      }
      margin: 1rem 0;
      h1 {
        letter-spacing: 0.2rem;
        font-size: 2.5rem;
      }
      h3 {
        letter-spacing: 0.2rem;
        font-size: 1.5rem;
      }
      span {
        margin: 0.5rem;
        font-size: 3rem;
        opacity: 0.5;
      }
    }
    @media (max-height: 600px) and (min-width: 600px) {
      margin: 0;
      h1 {
        letter-spacing: 0.2rem;
        font-size: 2rem;
      }
      h3 {
        letter-spacing: 0.2rem;
        font-size: 1.2rem;
      }
    }
    h1,
    h3 {
      text-align: center;
      margin: 0;
      padding: 0;
    }
    h3 {
      font-weight: 200;
    }
  }
`;

const Header = () => (
  <>
    <StyledWrapper>
      <Link to="/" className="header">
        <h1>Edgar Cuarezma</h1>
        <span>|</span>
        <h3>Full Stack Developer</h3>
      </Link>
    </StyledWrapper>
    <ParticlesComponent />
  </>
);

export default Header;
