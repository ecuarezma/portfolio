import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

const StyledWrapper = styled.div`
  margin: 1rem;
  div {
    margin: 1rem 0;
    display: flex;
    justify-content: space-around;
    font-size: 4rem;
    svg {
      color: rgb(255, 99, 71);
      &:nth-child(even) {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`;

const Skills = () => {
  return (
    <StyledWrapper>
      <div>
        <FontAwesomeIcon icon={faJsSquare} />
        <FontAwesomeIcon icon={faCss3Alt} />
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faReact} />
      </div>
      <div>
        <FontAwesomeIcon icon={faNodeJs} />
      </div>
    </StyledWrapper>
  );
};

export default Skills;
