import React from "react";
import Layout from "../components/Layout";
import resume from "../assets/resume.png";
import styled from "styled-components";

const StyledWrapper = styled.section`
  position: relative;
  background-color: white;
  width: 100%;
  height: 100%;
  z-index: -1000;
  img {
    position: absolute;
    width: 100%;
    top: 75px;
    bottom: 0;
    margin: auto;
  }
  @media (min-width: 600px) {
    all: unset;
    background-color: white;
    margin: 4rem 2rem 2rem 0;
    img {
      position: relative;
    }
  }
`;

const CV = () => {
  return (
    <Layout>
      <StyledWrapper>
        <img src={resume} alt="resume" />
      </StyledWrapper>
    </Layout>
  );
};

export default CV;
