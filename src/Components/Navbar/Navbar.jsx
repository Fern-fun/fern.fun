import React from "react";
import "./Navbar.scss";

import logo from "../../assets/logo.png";

function Navbar() {
  const [hamburger, setHamburger] = React.useState(false);

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-container__logo">
        <a href="/">
          <img src={logo} alt="Fern Logo" />
        </a>
      </div>
      <div className="navbar-container__hamburger">
        <button
          className={
            "hamburger hamburger--spin" + (hamburger ? " is-active" : "")
          }
          type="button"
          name="hamburger"
          onClick={hamburgerHandler}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div
        className="navbar-container__box"
        style={hamburger ? { display: "block" } : null}
      >
        <a
          href="/fern.fun/"
          onClick={(e) => (hamburger ? setHamburger((a) => !a) : null)}
        >
          <div className="home">
            <span>Home</span>
          </div>
        </a>

        <a
          href="/fern.fun/lab"
          onClick={(e) => (hamburger ? setHamburger((a) => !a) : null)}
        >
          <div className="lab">
            <span>Lab</span>
          </div>
        </a>

        <a
          href="/fern.fun/about"
          onClick={(e) => (hamburger ? setHamburger((a) => !a) : null)}
        >
          <div className="comp">
            <span>About us</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
