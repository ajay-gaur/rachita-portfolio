import React from "react";
import '../styles/aboutGPT.css'
import gptIcon from '../images/gpt-icon.png'
import aboutGptBanner from '../images/about-gpt-banner.png'

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
            <div class="col-md-12 mt-md-0 mt-3 text-center">
              <h2 className="about-gpt-heading"> About Girl Power Talk</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                ullamcorper consectetur ullamcorper porta aliquam hendrerit vel
                netus in. Volutpat, vel fringilla pulvinar blandit turpis cum mi
                imperdiet. Gravida sed euismod arcu faucibus tempus tempus.
                Aliquet risus netus dolor, ac nulla. Est interdum integer purus
                odio porttitor nullam. Maecenas ligula mauris diam aliquam dui,
                morbi posuere augue. Ac nunc, egestas congue faucibus sit.
                Malesuada egestas adipiscing ultricies id sit adipiscing egestas
                iaculis duis. Aliquet ipsum, arcu blandit sapien elementum quis
                sem. Vel odio elit nullam gravida. Tortor turpis sed lectus sit
                donec aliquam ipsum ultricies. Maecenas consequat nec
                scelerisque blandit cras mi ullamcorper lacus nibh. Elementum
                pellentesque purus nibh feugiat non suspendisse lacus. Vivamus
                nec orci in cras enim.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-md-0 mt-3 text-center">
              <h2 className="awards-heading"> Awards</h2>
              <p>
                Rachita has been honored with several accolades in recognition
                of her work to empower youth, provide opportunities to women,
                and lead a revolutionaly enterprise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutGPT;
