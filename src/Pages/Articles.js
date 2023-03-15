import React from "react";
import { useParams } from "react-router-dom";

import { labs } from "../Components/LabContainer/Labs";

function Articles() {
  const { id } = useParams();

  if (labs[id] !== undefined) {
    import(`../Components/LabContainer/${labs[id].content}`).then((module) => {
      return (
        <div className="page-container">
          <div>
            <div className="article">
              <div className="article__title">
                <h1>{labs[id].title}</h1>
                <div className="article__title__author">
                  <div className="article__title__author__name">
                    <div>{labs[id].author}</div>
                  </div>
                </div>
              </div>
              <div className="article__content">{module.default}</div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    return (
      <div className="page-container">
        <div>404</div>
      </div>
    );
  }
}

export default Articles;
