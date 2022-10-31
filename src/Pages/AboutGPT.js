import React from "react";
import '../styles/aboutGPT.css'
import gptIcon from '../images/gpt-icon.png'
import aboutGptBanner from '../images/about-gpt-banner.png'
import blog1 from "../images/press-blogs/blog1.png"
import blog2 from "../images/press-blogs/blog2.png"
import blog3 from "../images/press-blogs/blog3.png"
import pic1 from '../images/about-gpt/pic1.png'
import pic2 from '../images/about-gpt/pic2.png'
import pic3 from '../images/about-gpt/pic3.png'
import pic4 from '../images/about-gpt/pic4.png'

const AboutGPT = () => {
  return (
    <>
      <div
        class="about-image about-gpt-banner container"
        style={{ backgroundImage: `url(${aboutGptBanner})` }}
      >
        <div class="row gpt-icon">
          <div class="col-md-6 mt-md-0 mt-3">
            <img src={gptIcon} />
          </div>
        </div>
      </div>

      <div class="about-description about-gpt-description container">
        <div class="home-second-inner">
          <div class="row">
          <div class="col-md-3 mt-md-0 mt-3 text-start"> <img src={pic1}/> <img src={pic2}/></div>
            <div class="col-md-6 mt-md-0 mt-3 text-center">
              <h2 className="about-gpt-heading"> About Girl Power Talk</h2>
              <p>
              We believe that achieving true gender equality requires a radical shift in the way young women are mentored in the workplace. At Girl Power Talk, we are passionately dedicated to empowering women – as well as men and non-binary individuals – with opportunities to confidently learn, feel valued, and build a career full of purpose. Our talented team members gain a wealth of technical skills that supercharge their potential across both digital and traditional business landscapes. We are a meritocracy of hustlers that thrive without limits. Our nurturing culture balances critique with encouragement. Let’s unlock your potential. Welcome to Girl Power Talk.
              </p>
            </div>

            <div class="col-md-3 mt-md-0 mt-3 text-end"> <img src={pic3}/> <img src={pic4}/></div>
          </div>
        </div>
      </div>

      <section id="press-blog-section" >
        <div className="container">
          <h2>Press Blogs</h2>
          <div className="row">
            <div class="card col-md-4">
              <div
                className="card-img"
                style={{ background: `url(${blog1})` }}
              ></div>
              <div class="card-body">
                <p class="card-text blog-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                </p>
              </div>
            </div>

            <div class="card col-md-4">
              <div
                className="card-img"
                style={{ background: `url(${blog2})` }}
              ></div>
              <div class="card-body">
                <p class="card-text blog-text">
                #WNCYA: The labels we fought to lose ft Rachita Sharma
                </p>
              </div>
            </div>

            <div class="card col-md-4">
              <div
                className="card-img"
                style={{ background: `url(${blog3})` }}
              ></div>
              <div class="card-body">
                <p class="card-text blog-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutGPT;
