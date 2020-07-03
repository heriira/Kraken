import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export class Carousel extends Component {
  render() {
    return (
      <div>
        <header
          id="gtco-header"
          className="gtco-cover gtco-cover-xs gtco-inner"
          role="banner"
        >
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-12 col-md-offset-0 text-left">
                <div className="display-t">
                  <div className="display-tc">
                    <div className="row">
                      <div className="col-md-8 animate-box">
                        <h1 className="no-margin">About Us</h1>
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
