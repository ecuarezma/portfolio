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
  z-index: 200;
  @media (min-width: 1200px) {
    justify-content: center;
    right: 0;
    width: 60%;
  }

  .title {
    margin-top: 1rem;
    font-family: "Raleway", sans-serif;
    color: rgb(164, 164, 164);
    z-index: 200;
    text-decoration: none;
    cursor: pointer;
    @media (min-width: 600px) {
      margin: 1rem 0;
      h1 {
        letter-spacing: 0.2rem;
        font-size: 2.5rem;
      }
      h3 {
        letter-spacing: 0.2rem;
        font-size: 1.5rem;
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
      <Link to="/" className="title">
        <h1>Edgar Cuarezma</h1>
        <h3>Full Stack Developer</h3>
      </Link>
    </StyledWrapper>
    <ParticlesComponent />
  </>
);

export default Header;
