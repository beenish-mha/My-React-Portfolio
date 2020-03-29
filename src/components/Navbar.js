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
      <Link to="/project">
        <li class="nav-item">Projects</li>
      </Link>
      <Link to="/contact">
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
