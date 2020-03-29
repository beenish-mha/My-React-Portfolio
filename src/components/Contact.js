import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div class="container outer-div">
        <div class="card">
          <div class="card-body">
            <h2>Contact Details</h2>
            <hr />
            <h4>Email:</h4>
            beeni.khurram@gmail.com
            <h4>Contact No:</h4>
            0123456789
            <h4>Resume:</h4>
            <a href="https://docs.google.com/document/d/1Zx-IjGEoSGX5xLlddNBd5-C7_x0Q2hr8PvFJtZMBJA4/edit?usp=sharing">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
