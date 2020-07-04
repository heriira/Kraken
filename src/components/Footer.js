import React from "react";

export default function Footer() {
  return (
    <div>
      <footer id="gtco-footer" className="gtco-section" role="contentinfo">
        <div className="gtco-container">
          <div className="row row-pb-md">
            <div className="col-md-8 col-md-offset-2 gtco-cta text-center">
              <h3>We Love To Talk About Your Business</h3>
              <p>
                <a href="www.google.com" className="btn btn-white btn-outline">
                  Contact Us
                </a>
              </p>
            </div>
          </div>
          <div className="row row-pb-md">
            <div className="col-md-4 gtco-widget gtco-footer-paragraph">
              <h3>Cube</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus placerat enim et urna sagittis, rhoncus euismod.
              </p>
            </div>
            <div className="col-md-4 gtco-footer-link">
              <div className="row">
                <div className="col-md-6">
                  <ul className="gtco-list-link">
                    <li>
                      <a href="www.google.com">Home</a>
                    </li>
                    <li>
                      <a href="www.google.com">Features</a>
                    </li>
                    <li>
                      <a href="www.google.com">Products</a>
                    </li>
                    <li>
                      <a href="www.google.com">Testimonial</a>
                    </li>
                    <li>
                      <a href="www.google.com">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <p>
                    <a href="tel://1234567890">+1 234 4565 2342</a>
                    <br />
                    <a href="www.google.com">
                      <span
                        className="__cf_email__"
                        data-cfemail="b6dfd8d0d9f6d2d9dbd7dfd898d5d9db"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 gtco-footer-subscribe">
              <form className="form-inline">
                <div className="form-group">
                  <label className="sr-only" htmlFor="exampleInputEmail3">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="gtco-copyright">
          <div className="gtco-container">
            <div className="row">
              <div className="col-md-6 text-left"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
