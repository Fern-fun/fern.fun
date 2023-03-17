import React from "react";
import { Paragraph } from "../Components/Paragraph/Paragraph";
import TeamContainer from "../Components/TeamContainer/TeamContainer";

function About() {
  return (
    <div className="page-container">
      <div className="box-text fadeInFromLeft">
        <div className="box__title breathing">
          About <span className="fern-text">us</span>
        </div>
        <div className="box-text__content">
          <Paragraph>
            Welcome to Fern.fun! We are a small but mighty team of three
            programmers Our specialization is in crafting top-notch websites and
            server tools Our focus is on building long-lasting relationships
            with our clients and delivering projects that exceed expectations
          </Paragraph>
        </div>
      </div>
      <TeamContainer />
    </div>
  );
}

export default About;
