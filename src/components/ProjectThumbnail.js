import React from "react";
import "../defaults.css";
import "./ProjectThumbnail.css";

const ProjectThumbnail = props => {
  return (
    <div className="project-rect">
      <img src={props.img} alt={props.projectName} />
      <h4>
        <a href={props.href}>{props.projectName}</a>
      </h4>
    </div>
  );
};

export default ProjectThumbnail;
