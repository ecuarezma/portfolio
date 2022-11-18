import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import config from "./config";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 150px;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 40%, 0% 100%);
  z-index: 100;
  @media (min-width: 600px) {
    height: 150px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  @media (max-height: 600px) and (min-width: 600px) {
    height: 75px;
  }
`;

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <StyledWrapper>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={config}
      />
    </StyledWrapper>
  );
};
export default ParticlesComponent;
