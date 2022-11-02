import React from "react";
import CityDesktop from "./Images/City-Desktop.png";
import CityMobile from "./Images/City-Mobile.png";
import HexleDesktop from "./Images/Hexle-Desktop.png";
import HexleMobile from "./Images/Hexle-Mobile.png";
import ClickerDesktop from "./Images/Clicker-Desktop.png";
import ClickerMobile from "./Images/Clicker-Mobile.png";

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="proj-containers">
        <h3>"Honey Code"</h3>
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
        <img
          src={HexleDesktop}
          alt="web view preview"
          className="desktop-view"
        />
        <img
          src={HexleMobile}
          alt="mobile view preview"
          className="mobile-view"
        />
      </div>
      <div className="proj-containers">
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
        <img
          src={CityDesktop}
          alt="web view preview"
          className="desktop-view"
        />
        <img
          src={CityMobile}
          alt="mobile view preview"
          className="mobile-view"
        />
      </div>

      <div className="proj-containers">
        <h3>"Click Me"</h3>
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
        <img
          src={ClickerDesktop}
          alt="web view preview"
          className="desktop-view"
        />
        <img
          src={ClickerMobile}
          alt="mobile view preview"
          className="mobile-view"
        />
      </div>

      {/* <div className="proj-containers">
        <h3>"EweTube"</h3>
        <div>Web View Place Holder</div>
        <div>Mobile View Placeholder</div>
        <div>Description: Placeholder</div>
        <div>Site Link</div>
      </div> */}

      {/* <div className="proj-containers">
        <h3>Coming soon: "Shindoku"</h3>
      </div> */}
    </div>
  );
}

export default Projects;
