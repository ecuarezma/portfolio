import React from "react";
import Layout from "../components/Layout";
import resume from "../assets/resume.jpg";
import styled from "styled-components";

const StyledWrapper = styled.div`
  header,
  #tsparticles {
    display: none;
  }
  img {
    width: 100%;
  }
  @media (min-width: 600px) {
    img {
      width: 75%;
      margin: 5rem;
    }
  }
`;

const CV = () => {
  return (
    <StyledWrapper>
      <Layout>
        <img src={resume} alt="resume" />
      </Layout>
    </StyledWrapper>
  );
};

export default CV;
