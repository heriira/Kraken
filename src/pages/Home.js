import React, { Component, Fragment } from "react";

import Header from "components/Header";
import Footer from "components/Footer";
import Up from "components/Up";
import Carousel from "components/Carousel_Home";

import Client1 from "assets/images/client_1.png";
import Client2 from "assets/images/client_2.png";
import Client3 from "assets/images/client_3.png";
import Client4 from "assets/images/client_4.png";
import Client5 from "assets/images/client_5.png";

import Img1 from "assets/images/img_1.jpg";
import Img2 from "assets/images/img_2.jpg";
import Imgc from "assets/images/img_md_1.jpg";
import Img3 from "assets/images/img_3.jpg";
import Img4 from "assets/images/img_4.jpg";

import Person1 from "assets/images/person_1.jpg";
import Person2 from "assets/images/person_2.jpg";
import Person3 from "assets/images/person_3.jpg";

var Image1 = {
  backgroundImage: `url(${Img1})`,
};
var Image2 = {
  backgroundImage: `url(${Img2})`,
};
var Imagec = {
  backgroundImage: `url(${Imgc})`,
};
var Image3 = {
  backgroundImage: `url(${Img3})`,
};
var Image4 = {
  backgroundImage: `url(${Img4})`,
};

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <div class="gtco-loader"></div>
        <div id="page">
          <Header />
          <Carousel />
          <div className="gtco-client">
            <div className="gtco-container">
              <div className="row">
                <div className="col-md-2 col-md-offset-1 text-center client col-sm-6 col-xs-6 col-xs-offset-0 col-sm-offset-0">
                  <img
                    src={Client1}
                    alt="Free Website Template by FreeHTML5.co"
                    className="img-responsive"
                  />
                </div>
                <div className="col-md-2 text-center client col-sm-6 col-xs-6 col-xs-offset-0 col-sm-offset-0">
                  <img
                    src={Client2}
                    alt="Free Website Template by FreeHTML5.co"
                    className="img-responsive"
                  />
                </div>
                <div className="col-md-2 text-center client col-sm-6 col-xs-6 col-xs-offset-0 col-sm-offset-0">
                  <img
                    src={Client3}
                    alt="Free Website Template by FreeHTML5.co"
                    className="img-responsive"
                  />
                </div>
                <div className="col-md-2 text-center client col-sm-6 col-xs-6 col-xs-offset-0 col-sm-offset-0">
                  <img
                    src={Client4}
                    alt="Free Website Template by FreeHTML5.co"
                    className="img-responsive"
                  />
                </div>
                <div className="col-md-2 text-center client col-sm-6 col-xs-6 col-xs-offset-0 col-sm-offset-0">
                  <img
                    src={Client5}
                    alt="Free Website Template by FreeHTML5.co"
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="gtco-services gtco-section">
            <div class="gtco-container">
              <div class="row row-pb-sm">
                <div class="col-md-8 col-md-offset-2 gtco-heading text-center">
                  <h2>Make your life simpler.</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus placerat enim et urna sagittis, rhoncus euismod
                    erat tincidunt. Donec tincidunt volutpat erat.
                  </p>
                  <p>
                    <a
                      href="https://vimeo.com/channels/staffpicks/93951774"
                      class="btn btn-special popup-vimeo"
                    >
                      Watch The Video
                    </a>
                  </p>
                </div>
              </div>
              <div class="row row-pb-md">
                <div class="col-md-4 col-sm-4 service-wrap">
                  <div class="service">
                    <h3>
                      <i class="ti-pie-chart"></i> Marketing
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consectetur voluptatibus nesciunt, est alias deleniti
                      ipsum fuga ullam maxime repudiandae neque, ad. Maiores
                      quis atque, culpa rem inventore vero amet praesentium,
                      quam sint, magnam reprehenderit doloremque.
                    </p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4 service-wrap">
                  <div class="service animate-change">
                    <h3>
                      <i class="ti-ruler-pencil"></i> Design
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minima quidem quae, assumenda dolores ad pariatur!
                      Deleniti debitis, voluptatem! Omnis enim magnam
                      perspiciatis, natus. Ipsum distinctio, voluptatibus vero
                      laboriosam sequi! Officia fuga quam eveniet quo similique!
                    </p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4 service-wrap">
                  <div class="service">
                    <h3>
                      <i class="ti-settings"></i> Development
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dicta aperiam, maiores officia alias accusantium fugiat,
                      doloremque voluptas, voluptatem dolore vel animi
                      praesentium saepe unde consequuntur, eum asperiores odit
                      aliquam error nulla impedit repellendus. Nesciunt,
                      delectus.
                    </p>
                  </div>
                </div>
                <div class="clearfix visible-md-block visible-sm-block"></div>
              </div>
            </div>
          </div>
          <div className="gtco-section gtco-products">
            <div className="gtco-container">
              <div className="row row-pb-sm">
                <div className="col-md-8 col-md-offset-2 gtco-heading text-center">
                  <h2>Popular Products</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus placerat enim et urna sagittis, rhoncus euismod
                    erat tincidunt. Donec tincidunt volutpat erat.
                  </p>
                </div>
              </div>
              <div className="row row-pb-md">
                <div className="col-md-4 col-sm-4">
                  <a
                    href="#"
                    className="gtco-item two-row bg-img animate-box"
                    style={Image1}
                  >
                    <div className="overlay">
                      <i className="ti-arrow-top-right" />
                      <div className="copy">
                        <h3>Paper Hot Cup</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <img
                      src={Image1}
                      className="hidden"
                      alt="Free HTML5 Website Template by FreeHTML5.co"
                    />{" "}
                  </a>
                  <a
                    href="#"
                    className="gtco-item two-row bg-img animate-box"
                    style={Image2}
                  >
                    <div className="overlay">
                      <i className="ti-arrow-top-right" />
                      <div className="copy">
                        <h3>Notepad Mockup</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <img
                      src={Image2}
                      className="hidden"
                      alt="Free HTML5 Website Template by FreeHTML5.co"
                    />
                  </a>
                </div>
                <div className="col-md-4 col-sm-4">
                  <a
                    href="#"
                    className="gtco-item one-row bg-img animate-box"
                    style={Imagec}
                  >
                    <div className="overlay">
                      <i className="ti-arrow-top-right" />
                      <div className="copy">
                        <h3>Paper Pouch</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <img
                      src={Imagec}
                      className="hidden"
                      alt="Free HTML5 Website Template by FreeHTML5.co"
                    />
                  </a>
                </div>
                <div className="col-md-4 col-sm-4">
                  <a
                    href="#"
                    className="gtco-item two-row bg-img animate-box"
                    style={Image3}
                  >
                    <div className="overlay">
                      <i className="ti-arrow-top-right" />
                      <div className="copy">
                        <h3>Fancy 3D</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <img
                      src={Image3}
                      className="hidden"
                      alt="Free HTML5 Website Template by FreeHTML5.co"
                    />{" "}
                  </a>
                  <a
                    href="#"
                    className="gtco-item two-row bg-img animate-box"
                    style={Image4}
                  >
                    <div className="overlay">
                      <i className="ti-arrow-top-right" />
                      <div className="copy">
                        <h3>Hard Cover Book</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <img
                      src={Image4}
                      className="hidden"
                      alt="Free HTML5 Website Template by FreeHTML5.co"
                    />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <p>
                    <a
                      href="http://freehtml5.co"
                      target="_blank"
                      className="btn btn-special"
                    >
                      Visit Gettemplates.co
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="gtco-section gtco-testimonial gtco-gray">
            <div className="gtco-container">
              <div className="row row-pb-sm">
                <div className="col-md-8 col-md-offset-2 gtco-heading text-center">
                  <h2>People Love Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus placerat enim et urna sagittis, rhoncus euismod
                    erat tincidunt. Donec tincidunt volutpat erat.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6 animate-box">
                  <div className="gtco-testimony gtco-left">
                    <div>
                      <img
                        src={Person1}
                        alt="Free Website template by FreeHTML5.co"
                      />
                    </div>
                    <blockquote>
                      <p>
                        “Design must be functional and functionality must be
                        translated into visual aesthetics, without any reliance
                        on gimmicks that have to be explained.”
                        <cite className="author">— Ferdinand A. Porsche</cite>
                      </p>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 animate-box">
                  <div className="gtco-testimony gtco-left">
                    <div>
                      <img
                        src={Person2}
                        alt="Free Website template by FreeHTML5.co"
                      />
                    </div>
                    <blockquote>
                      <p>
                        “Creativity is just connecting things. When you ask
                        creative people how they did something, they feel a
                        little guilty because they didn’t really do it, they
                        just saw something. It seemed obvious to them after a
                        while.”
                        <cite className="author">— Steve Jobs</cite>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6 animate-box">
                  <div className="gtco-testimony gtco-left">
                    <div>
                      <img
                        src={Person3}
                        alt="Free Website template by FreeHTML5.co"
                      />
                    </div>
                    <blockquote>
                      <p>
                        “I think design would be better if designers were much
                        more skeptical about its applications. If you believe in
                        the potency of your craft, where you choose to dole it
                        out is not something to take lightly.”
                        <cite className="author">— Frank Chimero</cite>
                      </p>
                    </blockquote>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 animate-box">
                  <div className="gtco-testimony gtco-left">
                    <div>
                      <img
                        src={Person1}
                        alt="Free Website template by FreeHTML5.co"
                      />
                    </div>
                    <blockquote>
                      <p>
                        “Design must be functional and functionality must be
                        translated into visual aesthetics, without any reliance
                        on gimmicks that have to be explained.”
                        <cite className="author">— Ferdinand A. Porsche</cite>
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <Up />
      </Fragment>
    );
  }
}

export default Home;
