import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container outer-div">
        <div className="card">
          <div className="card-body">
            <h2>Contact Details</h2>
            <hr />
            <h4>Email:</h4>
            beeni.khurram@gmail.com
            <h4>Contact No:</h4>
            07576225884
            <h4>Resume:</h4>
            <a href="https://docs.google.com/document/d/1Zx-IjGEoSGX5xLlddNBd5-C7_x0Q2hr8PvFJtZMBJA4/edit?usp=sharing">
              My Resume
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
