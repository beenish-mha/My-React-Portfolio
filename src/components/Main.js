import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Main() {
  return (
    <div>
      <Navbar />
      <div className="container outer-div">
        <div className="row inner-div">
          <div className="row">
            <div className="col-md-4">
              <h2>
                <span className="label label-default about-me">About Me</span>
              </h2>
              <img src="/assets/myimg.jpg" className="my-pic" alt="Beenish" />
            </div>
            <div className="col-md-8">
              <section className="mainCollection">
                <p>
                  {" "}
                  My name is Beenish Munir Butt.
                  <br />
                  Full Stack Web Developer with a background in computer
                  science. Pride myself on clear communication skills, a strong
                  teamwork ethic and the agility to adapt to changes in
                  technology and the environment in which I work. Fully
                  dedicated to my work and studies and keen on learning more.
                  <p>
                    I did Masters in E-Commerce from BZU Multan in 2005. Then I
                    started my family and planned to lookafter them full time.
                  </p>
                  <p>
                    I live in North Wales with my husband, two mischievous boys,
                    adorable little girl and a cutest cat.
                    <br />
                    Now all my kids are in school, I decided to pursue my career
                    in Web Development so I searched so many courses and finally
                    joined Coding Boot Camp in The University of Manchester.
                    <br />
                    It's a good opportunity for me to reskill, improve and learn
                    new technologies.
                  </p>
                  <p>
                    When I was doing my Masters in E-Commerce, for my final
                    project I developed a result system of my department which
                    was running on the entranet of the Commerce department.
                  </p>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Main;
