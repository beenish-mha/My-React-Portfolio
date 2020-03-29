import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul class="nav nav-all">
      <li class="nav-item">
        <Link to="/">
          <li class="nav-item">Home</li>
        </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-project" href="project.html">
          Projects
        </a>
      </li>
      <Link to="/Contact">
        <li class="nav-item">Contact</li>
      </Link>
      <a class="nav-link" href="https://www.linkedin.com/in/beenish-butt/">
        linkedIn:
      </a>
      <a class="nav-link" href="https://github.com/beenish-mha">
        GitHub:
      </a>
      <h3 class="nav-title">Beenish Butt </h3>
    </ul>
  );
}

export default Navbar;
