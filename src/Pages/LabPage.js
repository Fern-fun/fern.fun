import React from "react";
import { Helmet } from "react-helmet";

import "./Lab.scss";
import LabContainer from "../Components/LabContainer/LabContainer";

function LabPage() {
  return (
    <div className="page-container smoothShow">
      <Helmet>
        <title>Lab</title>
      </Helmet>
      <div className="page-box">
        <div className="page-box__title">LAB</div>
        <div className="page-box__content">projects and components :D</div>
      </div>

      <LabContainer />
    </div>
  );
}

export default LabPage;
