import React from "react";

import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  z-index: 1000;
`;

const CV = () => {
  return (
    <StyledWrapper>
      <a href="https://docs.google.com/document/d/1RNRpD5Chat60MCSoF-Zs4XBJlnsfKJQtssRcwpdmWmA/edit?usp=sharing">
        cv is here
      </a>
    </StyledWrapper>
  );
};

export default CV;
