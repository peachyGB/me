import React from "react";
import CityDesktop from "./Images/City-Desktop.png";
import CityMobile from "./Images/City-Mobile.png";
function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="proj-containers">
        <h3>"Guess That City"</h3>
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
        <div>Description: Placeholder</div>
        <a href="https://main.d2xofwl3vq6p19.amplifyapp.com/" target="_blank">
          View Full Site Here
        </a>
      </div>
      <div className="proj-containers">
        <h3>"Click Me!"</h3>
        <div>Web View Place Holder</div>
        <div>Mobile View Placeholder</div>
        <div>Description: Placeholder</div>
        <div>Site Link</div>
      </div>
      <div className="proj-containers">
        <h3>"EweTube"</h3>
        <div>Web View Place Holder</div>
        <div>Mobile View Placeholder</div>
        <div>Description: Placeholder</div>
        <div>Site Link</div>
      </div>
      <div className="proj-containers">
        <h3>Coming soon: "Hex Guesser"</h3>
        <div>Description: Placeholder</div>
        <div>GitHub Link</div>
      </div>
      {/* <div className="proj-containers">
        <h3>Coming soon: "Shindoku"</h3>
      </div> */}
    </div>
  );
}

export default Projects;