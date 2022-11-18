import React, { useState, useEffect } from "react";
import Skills from "../components/Main/Skills";
import Quotes from "../components/Main/Quotes";
import Layout from "../components/Layout";

import profile from "../assets/profile.jpg";
import profileLowRes from "../assets/profile-lowRes.jpg";
import styled from "styled-components";

const StyledWrapper = styled.section`
  margin: 45px 0;
  margin-bottom: 100px;

  .profile {
    margin: 1rem;
    clip-path: polygon(100% 0, 100% 85%, 50% 95%, 0 85%, 0 0);
    .profile-image {
      width: 100%;
    }
    @media (min-width: 1200px) {
      margin: 1rem 10%;
    }
  }

  .chevronDown {
    display: flex;
    margin: -1rem 1rem 1rem 1rem;
    div {
      margin: 0;
      padding: 0;
      border-bottom: 2px solid #8c7a7a;
      width: 100%;
      transform: rotate(15deg) translateX(4px);
      &:last-child {
        transform: rotate(-15deg) translateX(-4px);
      }
    }

    @media (min-width: 600px) {
      div {
        transform: rotate(15deg) translateX(5px);
        &:last-child {
          transform: rotate(-15deg) translateX(-5px);
        }
      }
    }
    @media (min-width: 1200px) {
      margin: 0 10%;
      margin-bottom: 4rem;
      div {
        transform: rotate(15deg) translateX(5px);
        &:last-child {
          transform: rotate(-15deg) translateX(-5px);
        }
      }
    }
    @media (min-width: 1400px) {
      div {
        transform: rotate(15deg) translateX(6px);
        &:last-child {
          transform: rotate(-15deg) translateX(-6px);
        }
      }
    }
  }

  .content {
    text-align: center;
    margin: 2rem 1rem;
    .quotes {
      min-height: 150px;
      display: flex;
      align-items: center;
    }
  }

  hr {
    margin: 1rem;
    border: 0;
    border-bottom: 2px dashed rgba(17, 10, 10, 0.6);
  }
`;

const Home = () => {
  const [preLoadImage, setImage] = useState(profileLowRes);

  useEffect(() => {
    setImage(profile);
  }, []);

  return (
    <Layout>
      <StyledWrapper>
        <div className="profile">
          <img
            className="profile-image"
            src={preLoadImage}
            alt={profileLowRes}
          />
        </div>

        <div className="chevronDown">
          <div id="left" />
          <div id="right" />
        </div>

        <article className="content">
          <div className="quotes">
            <Quotes />
          </div>
          <Skills />
          <hr />
          <p>
            I use all the tools available to me to create modern, simplistic and
            effective apps.
            <br />
            <br />
            Full-time parent, baker, artist, and programmer.
            <br />
            <br />
            <strong>
              <span>I would love to work with you on your next project!</span>
            </strong>
          </p>
        </article>
      </StyledWrapper>
    </Layout>
  );
};

export default Home;
export const Head = () => <title>Edgar Cuarezma | Home</title>;
