import React from "react";
import "./Header.css";
import "../defaults.css";

const Header = () => {
  return (
    <header>
      <div>
        <a href="index.html">RaphGL</a>
      </div>
      <nav>
        <div className="hamburger-menu">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
        <ul>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">What I Use</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
