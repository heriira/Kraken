import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/images/logo.png";

export default function Header(props) {
  return (
    <div>
      <nav className="gtco-nav" role="navigation">
        <div className="gtco-container">
          <div className="row">
            <div className="col-sm-2 col-xs-12">
              <div id="gtco-logo">
                <Link to="/">
                  <img
                    src={Logo}
                    alt="Free HTML5 Website Template by FreeHTML5.co"
                  />
                </Link>
              </div>
            </div>
            <div className="col-xs-10 text-right menu-1">
              <ul>
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li className="has-dropdown">
                  <a href="services.html">Services</a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">eCommerce</a>
                    </li>
                    <li>
                      <a href="#">Branding</a>
                    </li>
                    <li>
                      <a href="#">API</a>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <a href="#">Dropdown</a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">HTML5</a>
                    </li>
                    <li>
                      <a href="#">CSS3</a>
                    </li>
                    <li>
                      <a href="#">Sass</a>
                    </li>
                    <li>
                      <a href="#">jQuery</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="portfolio.html">Portfolio</a>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
