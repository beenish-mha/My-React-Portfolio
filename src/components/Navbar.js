import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav nav-all">
      <Link to="/">
        <li className="nav-link">Home</li>
      </Link>

      <Link to="/project">
        <li className="nav-link">Projects</li>
      </Link>
      <Link to="/contact">
        <li className="nav-link">Contact</li>
      </Link>
      <a className="nav-link" href="https://www.linkedin.com/in/beenish-butt/">
        linkedIn:
      </a>
      <a className="nav-link" href="https://github.com/beenish-mha">
        GitHub:
      </a>
      <h3 className="nav-title">Beenish Butt </h3>
    </ul>
  );
}

export default Navbar;
