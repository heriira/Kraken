import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

export class Carousel extends Component {
  render() {
    return (
      <div>
        <header
          id="gtco-header"
          class="gtco-cover gtco-cover-xs gtco-inner"
          role="banner"
        >
          <div class="gtco-container">
            <div class="row">
              <div class="col-md-12 col-md-offset-0 text-left">
                <div class="display-t">
                  <div class="display-tc">
                    <div class="row">
                      <div class="col-md-8 animate-box">
                        <h1 class="no-margin">About Us</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Officia facilis, accusamus iusto animi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Carousel;
