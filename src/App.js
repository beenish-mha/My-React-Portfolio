import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/project" exact component={Project} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
