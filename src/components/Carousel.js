import React from "react";
import Fade from "react-reveal/Fade";

export default function Carousel() {
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
                      <Fade buttom delay={500}>
                        <h1 className="no-margin" data-reveal-delay="200">
                          About Us
                        </h1>
                      </Fade>
                      <Fade buttom delay={1000}>
                        <p data-reveal-delay="400">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Officia facilis, accusamus iusto animi.
                        </p>
                      </Fade>
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
