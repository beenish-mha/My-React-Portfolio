import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Project() {
  return (
    <div>
      <Navbar />
      <div class="container outer-div">
        <div class="row ">
          <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
              <div class="card">
                <img
                  src="assets/1st project.jpg"
                  class="card-img-top"
                  alt="Living in the scene"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="https://beenish-mha.github.io/Living-in-the-scene/">
                      Living In The Scene
                    </a>
                  </h5>
                  <p class="card-text">
                    A mobile first web app to search for the filming locations
                    of your favourite movies.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img
                  src="assets/2nd project.png"
                  class="card-img-top"
                  alt="myCookBook"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="https://team-phoenix-project2.herokuapp.com/">
                      myCookBook
                    </a>
                  </h5>
                  <p class="card-text">
                    A place to create and save your own recipes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
              <div class="card">
                <img
                  src="assets\employes directory.jpg"
                  class="card-img-top"
                  alt="employes directory"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href=" https://react-employee-directory-b.herokuapp.com/">
                      React-Employee-Directory
                    </a>
                  </h5>
                  <p class="card-text">Employee directory created in React</p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img
                  src="assets/office day planner.jpg"
                  class="card-img-top"
                  alt="office day planner"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href=" https://beenish-mha.github.io/Office-Day-Planner/">
                      Office Day Planner
                    </a>
                  </h5>
                  <p class="card-text">A Day Planner for office hours.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
              <div class="card">
                <img
                  src="assets/Employee Tracker.jpg"
                  class="card-img-top"
                  alt="employee tracer"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <a href=" https://beenish-mha.github.io/MySQL-Employee-Tracker/">
                      {" "}
                      Employee Tracker
                    </a>
                  </h5>
                  <p class="card-text">
                    managing a company's employees using node, inquirer, and
                    MySQL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Project;
