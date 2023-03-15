import React from "react";
import "./Navbar.scss";

function Navbar() {
  const [hamburger, setHamburger] = React.useState(false);

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className="navbar-container smoothShow">
      <div className="navbar-container__logo">
        <a href="/">
          <img src="/logo.png" alt="Fern Logo" />
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
          href="/"
          onClick={(e) => (hamburger ? setHamburger((a) => !a) : null)}
        >
          <div className="home">
            <span>Home</span>
          </div>
        </a>

        <a
          href="/lab"
          onClick={(e) => (hamburger ? setHamburger((a) => !a) : null)}
        >
          <div className="lab">
            <span>Lab</span>
          </div>
        </a>

        <a
          href="/c"
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
