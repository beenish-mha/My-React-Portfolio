import React from "react";

function Navbar() {
  return (
    <ul class="nav nav-all">
      <li class="nav-item">
        <a class="nav-link nav-home" href="index.html">
          Home
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-project" href="project.html">
          Projects
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-contact" href="contact.html">
          Contact
        </a>
      </li>
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
