import React, { useState, useEffect } from "react";
import useToggleState from "../hooks/useToggleState";
import Layout from "../components/Layout";

import Card from "../components/Card";
import colorApp from "../assets/colorApp.png";
import colorAppLowRes from "../assets/colorApp-lowRes.jpg";
import entrante from "../assets/entrante.png";
import entranteLowRes from "../assets/entrante-lowRes.jpg";

import styled from "styled-components";

const StyledWrapper = styled.section`
  margin: 150px 0;
  @media (min-width: 600px) {
    position: relative;
    top: 50px;
    margin: 2rem auto;
  }
`;

const Projects = () => {
  const [isLoading, toggleLoading] = useToggleState();
  const [isImage, setImage] = useState({
    entrante: { preLoadImage: entranteLowRes },
    colorApp: { preLoadImage: colorAppLowRes },
  });

  useEffect(toggleLoading, []);
  useEffect(() => {
    setImage({
      entrante: { preLoadImage: entrante },
      colorApp: { preLoadImage: colorApp },
    });
  }, []);

  return (
    <Layout>
      <StyledWrapper>
        <Card
          src={isImage.colorApp.preLoadImage}
          title="Color App"
          link="https://color-app-dbac8.firebaseapp.com/"
          caption="Create a custom palette!"
          isLoading={isLoading}
        >
          Color App was made with create-react-app and react-router. This was a
          final project done for a React course on Udemy. We made extensive use
          of the Material UI library as well as some CSSTransitions and drag and
          drop packages.
        </Card>
        <Card
          src={isImage.entrante.preLoadImage}
          title="Entrante"
          link="https://entrante-next.now.sh/"
          caption="Online showcase of artist's work."
          isLoading={isLoading}
        >
          The first website I made for myself as an illustrator fresh out of
          college. I have since gone back and refactored it as a way of applying
          what I have learned. This iteration uses Next.js with React, a far cry
          from its origins in Dreamweaver...
        </Card>
      </StyledWrapper>
    </Layout>
  );
};

export default Projects;
