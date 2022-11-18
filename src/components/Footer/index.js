import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const StyledWrapper = styled.footer`
  position: fixed;
  height: 100px;
  width: 70%;
  bottom: 0;
  right: 0;
  @media (min-width: 600px) {
    position: relative;
    height: 100px;
    width: 100%;
    background: #5c9897;
    background-image: ${({ theme }) => theme.colors.pattern};
  }
  @media (max-height: 750px) and (min-width: 1000px) {
    height: 80px;
  }
  @media (max-height: 640px) and (min-width: 1000px) {
    height: 60px;
  }
  .polygon {
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.blue};
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    @media (min-width: 600px) {
      display: none;
    }
  }
  .icons {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    bottom: 80px;
    font-size: 1.7rem;
    svg {
      transition: ease-in 100ms;
    }
    svg:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
    @media (min-width: 600px) {
      bottom: 0;
      height: 100%;
      font-size: 3rem;
      align-items: center;
      justify-content: space-between;
      z-index: 1000;
      .contact {
        display: flex;
        align-items: center;
        a {
          font-size: 1.5rem;
        }
      }
      .contact::after {
        content: "ecuarezma@gmail.com";
        color: ${({ theme }) => theme.colors.mainBgColor};
        font-size: 1.5rem;
      }
    }
    @media (max-height: 600px) and (min-width: 1000px) {
      align-items: flex-end;
      /* .contact::after {
        font-size: 1.5rem;
        padding-left: 0.5rem;
      } */
    }
    @media (max-height: 750px) and (min-width: 1000px) {
      align-items: flex-end;
      font-size: 2.5rem;
      .contact::after {
        font-size: 1.5rem;
        padding-left: 0.5rem;
      }
    }
    .vertical-icons {
      margin: 0 5px;
      display: flex;
      flex-flow: column nowrap;
      @media (min-width: 600px) {
        flex-flow: row nowrap;
      }
    }
    svg {
      margin: 5px;
      color: ${({ theme }) => theme.colors.mainBgColor};
      @media (min-width: 600px) {
        margin: 1rem;
      }
      @media (max-height: 640px) and (min-width: 1000px) {
        margin: 0.5rem;
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledWrapper>
      <div className="polygon" />
      <div className="icons">
        <div className="contact">
          <a href="mailto: ecuarezma@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div className="vertical-icons">
          <a href="https://www.linkedin.com/in/cuarezma/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/ecuarezma">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Footer;
