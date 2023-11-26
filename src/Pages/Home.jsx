import React from "react";
import { InlineText } from "../components/Paragraph/Paragraph";
import { Helmet } from "react-helmet";

import "./Home.scss";

import githubLogo from "../assets/github.svg";
import logo from "../assets/logo.png";

const Home = () => (
  <div className="page-container">
    <div className="box-image fadeInFromLeft">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <div className="box__title breathing">
          We <span className="fern-text">craft</span> engaging webpages.
        </div>
        <div className="box__content">
          <div>
            <InlineText>
              Web development team crafting stunning online experiences that
              engage and inspire.
            </InlineText>{" "}
            <a href="mailto:jakub.buciuto@gmail.com" className="fern-text">
              Contact us
            </a>
          </div>

          <div className="box__content__media">
            <a
              href="https://github.com/Fern-fun"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="github" width={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="box__image">
        <img src={logo} alt="logo" />
      </div>
    </div>
  </div>
);

export default Home;
