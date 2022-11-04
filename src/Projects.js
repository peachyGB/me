import React from "react";
import Hexagon from "./Images/hexagon.png";
import Globe from "./Images/globe.png";
import Click from "./Images/click.png";

function Projects() {
  return (
    <div id="projects">
      {/* <h2>Projects</h2> */}
      <div className="proj-containers">
        <img src={Hexagon} alt="Honey Code Icon" className="siteIcon" />
        <h3>Honey Code</h3>
        <div className="proj-descriptions">
          I wont pretend this isnt a Wordle dupe, but Honey Code uses pretty
          colors instead! This one is a work in progess and updates are bing
          made daily.
        </div>
        <a
          className="website-link"
          href="https://main.dujwbk2t2ztij.amplifyapp.com/"
          target="_blank"
        >
          <button>View Full Site</button>
        </a>
        <br />
      </div>
      <div className="proj-containers">
        <img src={Globe} alt="Honey Code Icon" className="siteIcon" />
        <h3>"Guess That City"</h3>
        <div className="proj-descriptions">
          Enjoy a simple guessing game while learning about world cities at the
          same time.
        </div>
        <a
          className="website-link"
          href="https://main.d2xofwl3vq6p19.amplifyapp.com/"
          target="_blank"
        >
          <button>View Full Site</button>
        </a>
        <br />
      </div>

      <div className="proj-containers">
        <h3>"Click Me"</h3>
        <img src={Click} alt="Honey Code Icon" className="siteIcon" />
        <div className="proj-descriptions">
          Just click. As fast as you can. Go.
        </div>
        <a
          className="website-link"
          href="https://main.dxtx5qki2taax.amplifyapp.com/"
          target="_blank"
        >
          <button>View Full Site</button>
        </a>
        <br />
      </div>
    </div>
  );
}

export default Projects;
