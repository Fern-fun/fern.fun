import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

import "./Lab.scss";

const LabContainer = lazy(() =>
  import("../components/LabContainer/LabContainer")
);

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
      <Suspense
        fallback={
          <div className="loader-container">
            <span className="loader"></span>
          </div>
        }
      >
        <LabContainer />
      </Suspense>
    </div>
  );
}

export default LabPage;
