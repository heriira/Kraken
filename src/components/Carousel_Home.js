import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Cube from "assets/images/cube.png";

export class Header extends Component {
  render() {
    return (
      <div>
        <header id="gtco-header" className="gtco-cover" role="banner">
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-12 col-md-offset-0 text-left">
                <div className="display-t">
                  <div className="display-tc">
                    <div className="row">
                      <div className="col-md-5 text-center header-img animate-box">
                        <img
                          src={Cube}
                          alt="Free HTML5 Website Template by FreeHTML5.co"
                        />
                      </div>
                      <div className="col-md-7 copy animate-box">
                        <h1>Make your life simpler, try this for free.</h1>
                        <p>
                          A free template hand-crafted by FreeHTML5.co. Visit
                          our site for more awesome templates.
                        </p>
                        <p>
                          <a
                            href="http://freehtml5.co"
                            target="_blank"
                            className="btn btn-white"
                          >
                            Visit FreeHTML5.co
                          </a>
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

export default Header;
