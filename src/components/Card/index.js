import React from "react";
import useToggleState from "../../hooks/useToggleState";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

import Loader from "../../components/Loader";
import styled from "styled-components";
import CardInfo from "./CardInfo";
import "./CardInfo/info.css";

const StyledWrapper = styled.div`
  margin-top: 2rem;
  border: 10px solid;
  border-image: linear-gradient(
      rgba(0, 0, 0, 0) 25%,
      ${({ theme }) => theme.colors.borderBlue}
    )
    5;
  @media (min-width: 600px) {
    margin: 3rem 10% 0 10%;
  }
  @media (min-width: 900px) {
    margin: 3rem 15% 0 15%;
  }
  @media (min-width: 1200px) {
    border: 1rem solid;
    border-image: linear-gradient(
        rgba(0, 0, 0, 0) 25%,
        ${({ theme }) => theme.colors.borderBlue}
      )
      5;
    margin: 4rem 20% 0 20%;
  }

  .image {
    min-height: 200px;
    min-width: 200px;
    border: 2px solid ${({ theme }) => theme.colors.textColor};
    box-sizing: border-box;
    @media (min-width: 600px) {
      border: none;
      min-height: 180px;
    }
    @media (min-width: 900px) {
      min-height: 200px;
    }
    @media (min-width: 1100px) {
      min-height: 250px;
    }
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  h4 {
    margin: 0;
    margin-left: auto;
    background-color: ${({ theme }) => theme.colors.orange};
    opacity: 0.8;
    width: 40%;
    padding: 5px;
    text-align: center;
    border-radius: 10px 10px 0 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainBgColor};
    & a {
      color: ${({ theme }) => theme.colors.mainBgColor};
      text-decoration: none;
    }
  }
  .caption {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.mainBgColor};
    background-color: ${({ theme }) => theme.colors.borderBlue};
    .icon svg {
      width: 10px;
      height: 10px;
      border: 2px solid ${({ theme }) => theme.colors.mainBgColor};
      border-radius: 100%;
      padding: 3px;
    }
  }
`;

const Card = ({ link, title, src, caption, isLoading, children }) => {
  const [isShowing, toggleShow] = useToggleState(false);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <StyledWrapper>
        <h4>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h4>
        <div className="image">
          <img src={src} alt="App" />
        </div>
        <div className="caption">
          <figcaption>{caption}</figcaption>
          <div className="icon" onClick={toggleShow}>
            <FontAwesomeIcon icon={faInfo} />
          </div>
        </div>
      </StyledWrapper>

      <CSSTransition
        in={isShowing}
        timeout={300}
        classNames="info"
        unmountOnExit
      >
        <CardInfo>{children}</CardInfo>
      </CSSTransition>
    </>
  );
};

export default Card;
