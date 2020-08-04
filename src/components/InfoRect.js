import React from "react";
import "../defaults.css";
import "./InfoRect.css";

export default InfoRect = props => {
  return (
    <div class="info-rect">
      <h4>{props.title}</h4>
      <ul>
        <li>test</li>
      </ul>
    </div>
  );
};
