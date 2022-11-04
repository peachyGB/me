import React from "react";
import html from "./Images/html-5.png";
import css from "./Images/css3.png";
import javascript from "./Images/javascript.png";
import react from "./Images/react.png";
import rails from "./Images/rails.png";
import ruby from "./Images/ruby.png";
import rest from "./Images/rest-api.png";
import json from "./Images/json.png";
import github from "./Images/github.png";

function Skills() {
  //renders icons relevant to each of my skill sets. (Still need to make Adobe and Avid icons in white. Need to keep that grid of 3s tho.)
  let imgFile = [html, css, javascript, react, rails, ruby, rest, json, github];

  return (
    <div>
      {/* <h2>Skills</h2> */}
      <div className="skills-grid">
        {imgFile.map((image) => (
          <img src={image} className="skills-icon" />
        ))}
      </div>
    </div>
  );
}

export default Skills;
