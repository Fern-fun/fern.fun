import React, { useState } from "react";
import "./UnderConstructions.css";
import { Helmet } from "react-helmet";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/react";

function UnderConstructions() {
  const [clicked, setClicked] = useState(false);

  const onClickHandler = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Under construction</title>
      </Helmet>
      <div onClick={onClickHandler} className="loader">
        <ClimbingBoxLoader
          color={"#1d1d1d"}
          loading={true}
          css={css`
            display: block;
            margin: auto auto;
          `}
          size={10}
        />
      </div>

      <div className="main">
        {clicked ? (
          <img src="https://i.pinimg.com/originals/fd/3c/cd/fd3ccd7b49e366b4206f5ac7f8fa8dac.gif" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default UnderConstructions;
