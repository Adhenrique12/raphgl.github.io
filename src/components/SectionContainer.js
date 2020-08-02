import React from "react";
import "../defaults.css";
import "./SectionContainer.css";

const SectionContainer = (props) => {
  return (
    <section className={props.theme + "-sect"}>
      <h3 className={props.theme + "-title"}>{props.title}</h3>
      <div className="rect-grid">{props.children}</div>
    </section>
  );
};

export default SectionContainer;
