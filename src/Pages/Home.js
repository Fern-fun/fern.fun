import React from "react";
import "./Home.scss";
import { InlineText } from "../Components/Paragraph/Paragraph";

function Home() {
  return (
    <div className="page-container">
      <div className="box">
        <div>
          <div className="box__title">
            Craft website <span className="fern-text">faster</span>
          </div>
          <div className="box__content">
            <InlineText>
              Crafting captivating websites that captivate audiences and elevate
              brands to new heights.
            </InlineText>
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
