import React from "react";
import Layout from "../components/Layout";
import resume from "../assets/resume.png";
import styled from "styled-components";

const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: white;
  img {
    width: 100%;
  }
  @media (min-width: 600px) {
    margin: 6rem 2rem 0 0;
    padding: 0;
  }
`;

const Resume = () => {
  return (
    <Layout>
      <StyledWrapper>
        <img src={resume} alt="resume" />
      </StyledWrapper>
    </Layout>
  );
};

export default Resume;
export const Head = () => <title>Edgar Cuarezma | Resume</title>;
