import React from "react";
// import classes from "./CardInfo.module.scss";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.borderBlue};
  padding: 1rem;
  text-align: center;
  z-index: -100;
  @media (min-width: 600px) {
    margin: 0 10%;
  }
  @media (min-width: 900px) {
    margin: 0 15%;
  }
  @media (min-width: 1200px) {
    margin: 0 20%;
  }
  figcaption {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.mainBgColor};
  }
`;

const CardInfo = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="info">
        <figcaption id="info">{children}</figcaption>
      </div>
    </StyledWrapper>
  );
};

export default CardInfo;
