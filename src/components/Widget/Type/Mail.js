import React from "react";

function Mail() {
  return (
    <div className="widget mailWidget">
      <div className="mailLogo">
        <a
          href="mailto:contact@fern.fun?subject=Message%20to%20Fern.fun&body=Hello%20..."
          target={"_blank"}
          rel="noreferrer"
        >
          <img src="/img/gmail.svg" alt="mail" />
        </a>
      </div>
    </div>
  );
}

export default Mail;
