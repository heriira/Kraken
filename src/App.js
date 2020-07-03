import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
