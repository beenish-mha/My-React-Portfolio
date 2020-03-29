import React from "react";
import Navbar from "./Navbar";

function Project() {
  return (
    <div>
      <Navbar />
      <div className="container outer-div">
        <div className="row ">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
              <div className="card">
                <img
                  src="assets/1st project.jpg"
                  className="card-img-top"
                  alt="Living in the scene"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="https://beenish-mha.github.io/Living-in-the-scene/">
                      Living In The Scene
                    </a>
                  </h5>
                  <p className="card-text">
                    A mobile first web app to search for the filming locations
                    of your favourite movies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img
                  src="assets/2nd project.png"
                  className="card-img-top"
                  alt="myCookBook"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="https://team-phoenix-project2.herokuapp.com/">
                      myCookBook
                    </a>
                  </h5>
                  <p className="card-text">
                    A place to create and save your own recipes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
              <div className="card">
                <img
                  src="assets/office day planner.jpg"
                  className="card-img-top"
                  alt="Living in the scene"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href=" https://beenish-mha.github.io/Office-Day-Planner/">
                      Office Day Planner
                    </a>
                  </h5>
                  <p className="card-text">A Day Planner for office hours.</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img
                  src="assets/Employee Tracker.jpg"
                  className="card-img-top"
                  alt="employee tracer"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href=" https://beenish-mha.github.io/MySQL-Employee-Tracker/">
                      {" "}
                      Employee Tracker
                    </a>
                  </h5>
                  <p className="card-text">
                    managing a company's employees using node, inquirer, and
                    MySQL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
