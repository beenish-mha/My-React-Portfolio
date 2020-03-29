import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul class="nav nav-all">
      <Link to="/">
        <li class="nav-link">Home</li>
      </Link>

      <Link to="/project">
        <li class="nav-link">Projects</li>
      </Link>
      <Link to="/contact">
        <li class="nav-link">Contact</li>
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
