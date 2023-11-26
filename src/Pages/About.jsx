import React from "react";
import { InlineText } from "../components/Paragraph/Paragraph";
import TeamContainer from "../components/TeamContainer/TeamContainer";

const About = () => (
  <div className="page-container">
    <div className="box-text fadeInFromLeft">
      <div className="box__title breathing">
        About <span className="fern-text">us</span>
      </div>
      <div className="box-text__content">
        <InlineText>
          Welcome to Fern.fun! We are a small but mighty team of programmers.
          Our specialization is in crafting top-notch websites and server tools.
          Our focus is on building long-lasting relationships with our clients
          and delivering projects that exceed expectations.
        </InlineText>
        <a href="mailto:jakub.buciuto@gmail.com" className="fern-text">
          {" "}
          Contact us
        </a>
      </div>
    </div>
    <TeamContainer />
  </div>
);

export default About;
