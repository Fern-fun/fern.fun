import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo__panel">
      <ReactTypingEffect
        text={["Fern.fun"]}
        displayTextRenderer={(text, i) => {
          return (
            <div className="logo">
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return <span key={key}>{char}</span>;
              })}
            </div>
          );
        }}
      />
    </div>
  );
}

export default Logo;
