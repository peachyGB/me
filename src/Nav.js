import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="nav">
      <Link to="/" className="navBtn">
        // Peachy
      </Link>
      <Link to="/projects" className="navBtn">
        // Projects
      </Link>
    </div>
  );
}

export default Nav;
