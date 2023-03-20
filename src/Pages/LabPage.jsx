import React, { Suspense } from "react";
import { Helmet } from "react-helmet";

import "./Lab.scss";
const LabContainer = React.lazy(() =>
  import("../Components/LabContainer/LabContainer")
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
            <span class="loader"></span>
          </div>
        }
      >
        <LabContainer />
      </Suspense>
    </div>
  );
}

export default LabPage;
