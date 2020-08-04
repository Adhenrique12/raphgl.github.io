import React from "react";
import "../defaults.css";
import "./Footer.css";

export default Footer = () => {
  return (
    <footer>
      ©2020 · Rafael Lopes
      <div class="credits">
        <div>
          The website's theme{" "}
          <a href="https://github.com/RaphGL/VampyricDark">Vampyric Dark</a>
        </div>
        <div>
          <a href="https://icons.getbootstrap.com/">Icons</a> provided by
          Bootstrap
        </div>
      </div>
    </footer>
  );
};
