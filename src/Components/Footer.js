import React from "react";
import footerback from "../images/footer-background.png";
import "./Footer.css";
import envelope from '../images/envelope.png'
import fb from '../images/social-media-icons/fb.png'
import youtube from '../images/social-media-icons/youtube.png'
import insta from '../images/social-media-icons/insta.png'
import linkedin from '../images/social-media-icons/linkedin.png'

const Footer = () => {
  return (
    // <div>
      <footer class="page-footer font-small blue pt-4" style={{ backgroundImage: `url(${footerback})` }} >
        <div class="container">
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div class="col-md-6 mt-md-0 mt-3">
                {/* <h5 class="text-uppercase">Footer Content</h5>
                <p>
                  Here you can use rows and columns to organize your footer
                  content.
                </p> */}
              </div>
              <div class="col-md-6 mt-md-0 mt-3 form-container">
                <h1> Write a note to Rachita Sharma </h1>
                <div class="mb-3">
                  {/* <label for="formGroupExampleInput" class="form-label">
                    Example label
                  </label> */}
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Full Name*"
                  />
                </div>
                <div class="mb-3">
                  {/* <label for="formGroupExampleInput2" class="form-label">
                    Another label
                  </label> */}
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone Number"
                      aria-label="Phone Number"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Website Url"
                      aria-label="Website Url"
                    />
                  </div>
                </div>
                 <div className="row">
                  <div className="col">
                  <input
                      type="text"
                      class="form-control"
                      placeholder="Message"
                      aria-label="Message"
                    />
                  </div>
                 </div>
                 <div className="btn-container">
                  <button>Submit</button>
                 </div>
                  <div className="form-bottom">
                  <div>
                    <div><img src={envelope} /> <span>rachitasharma@girlpowertalk.com</span></div> 
                  </div>
                  <div>
                  <img src={fb} />
                  <img src={youtube} />
                  <img src={insta} />
                  <img src={linkedin} />
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    // </div>
  );
};

export default Footer;
