import React from "react";
import "./Home.scss";
import { InlineText } from "../Components/Paragraph/Paragraph";

function Home() {
  return (
    <div className="page-container">
      <div className="box-image fadeInFromLeft">
        <div>
          <div className="box__title breathing">
            We <span className="fern-text">craft</span> engageing webpages.
          </div>
          <div className="box__content">
            <InlineText>
              Web development team crafting stunning online experiences that
              engage and inspire.
            </InlineText>
            <div className="box__content__media">
              <a
                href="https://github.com/Fern-fun"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/github.svg" alt="github" width={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="box__image">
          <img src="logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
