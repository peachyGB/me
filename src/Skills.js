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
  let imgFile = [html, css, javascript, react, rails, ruby, rest, json, github];

  return (
    <div>
      <h2>Skills</h2>
      {imgFile.map((image) => (
        <img src={image} className="skills-icon" />
      ))}
    </div>
  );
}

export default Skills;
