import React from "react";
import footerback from "../images/footer-background.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="page-footer font-small blue pt-4" style={{ backgroundImage: `url(${footerback})` }} >
        <div class="container">
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div class="col-md-6 mt-md-0 mt-3">
                <h5 class="text-uppercase">Footer Content</h5>
                <p>
                  Here you can use rows and columns to organize your footer
                  content.
                </p>
              </div>
              <div class="col-md-6 mt-md-0 mt-3">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    Example label
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Example input placeholder"
                  />
                </div>
                <div class="mb-3">
                  <label for="formGroupExampleInput2" class="form-label">
                    Another label
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Another input placeholder"
                  />
                </div>
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
