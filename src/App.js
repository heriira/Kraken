import React from "react";
import { Switch, Route } from "react-router-dom";

import "assets/css/animate.css";
import "assets/css/icomoon.css";
import "assets/css/themify-icons.css";
import "assets/css/bootstrap.css";
import "assets/css/magnific-popup.css";
import "assets/css/owl.carousel.min.css";
import "assets/css/owl.theme.default.min.css";
import "assets/css/style.css";

import Home from "pages/Home";
import About from "pages/About";
import Contact from "pages/Contact";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
