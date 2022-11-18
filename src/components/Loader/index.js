import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 0 auto;
  font-size: 1.5rem;
  p {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const Loader = () => (
  <StyledWrapper>
    <p>Loading...</p>
  </StyledWrapper>
);

export default Loader;
