import React from "react";
import { useState } from "react";
import github from "./Images/github.png";
import email from "./Images/email.png";
import linkedin from "./Images/linkedin.png";
import phone from "./Images/phone.png";
import resume from "./Images/resume.png";
import resdoc from "./Images/resume.pdf";

function Contact() {
  let [toolText, setToolText] = useState("Copy Email to Clipboard");
  function copyText() {
    let email = "burnsidegeorgia@gmail.com";
    navigator.clipboard.writeText(email);
    setToolText("Copied!");
  }

  return (
    <div>
      {/* <h2>Contact</h2> */}
      <div id="contact">
        {/* <a href={resdoc} target="_blank">
          <img src={resume} alt="link to resume" className="contact-icons" />
        </a> */}

        <div class="tooltip">
          <button id="emailBtn" onClick={copyText}>
            <span class="tooltiptext" id="myTooltip">
              {toolText}
            </span>
            <img
              src={email}
              alt="copy email address"
              className="contact-icons"
            />
          </button>
        </div>

        <a href="tel:8459013906">
          <img
            src={phone}
            alt="link to phone number"
            className="contact-icons"
          />
        </a>
        <a href="https://www.linkedin.com/in/georgia-burnside/" target="_blank">
          <img
            src={linkedin}
            alt="link to linked in"
            className="contact-icons"
          />
        </a>
        <a href="https://github.com/peachyGB" target="_blank">
          <img src={github} alt="link to github" className="contact-icons" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
