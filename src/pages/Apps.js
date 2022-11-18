import React, { useState, useEffect } from "react";
import useToggleState from "../hooks/useToggleState";
import Layout from "../components/Layout";
import Card from "../components/Card";

import softRidersLowRes from "../assets/soft-riders-lowRes.jpg";
import softRiders from "../assets/soft-riders.png";

import styled from "styled-components";

const StyledWrapper = styled.section`
  margin: 180px 0;
  @media (min-width: 600px) {
    position: relative;
    top: 50px;
    margin: 2rem auto;
  }
`;

const Apps = () => {
  const [isLoading, toggleLoading] = useToggleState();
  const [preLoadImage, setImage] = useState(softRidersLowRes);

  useEffect(toggleLoading, []);
  useEffect(() => {
    setImage(softRiders);
  }, []);

  return (
    <Layout>
      <StyledWrapper>
        <Card
          src={preLoadImage}
          title="Soft Riders"
          link="http://www.soft-riders.com"
          caption="A curated playlist hub by host, Miki Lee"
          isLoading={isLoading}
        >
          My first live app for a client featuring API calls to various
          endpoints such as{" "}
          <em>
            <strong>Spotify</strong>
          </em>{" "}
          and{" "}
          <em>
            <strong>Vimeo</strong>
          </em>
          . In addition to featuring an email sign-up service, I utilized
          Moment.js to live stream a radio show on a set schedule.
          <br />
          <blockquote style={{ fontWeight: "300" }}>
            "As a proud owner of my first website Edgar really worked in depth
            with my vision. He was able to walk me through everything that I
            needed to know with complete transparency, optimal solutions and
            most importantly patience. I am extremely psyched to see what he
            does not only for my website moving forward but for all of his
            clients. 5 stars"
            <span role="img" aria-label="star emoji">
              ⭐️⭐️⭐️⭐️⭐️
            </span>{" "}
            <br />
            <cite>- Miki Lee</cite>
          </blockquote>
        </Card>
      </StyledWrapper>
    </Layout>
  );
};

export default Apps;
export const Head = () => <title>Edgar Cuarezma | Apps</title>;
