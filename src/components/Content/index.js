import React, { useEffect } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
  z-index: 0;
  @media (min-width: 600px) {
    min-height: 900px;
    width: 60%;
    margin: 2rem 0;
    margin-bottom: 6rem;
    margin-left: auto;
    font-size: 1.3rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

const Content = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Content;
