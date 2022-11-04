import React from "react";
import Slider from "react-slick";
import "../styles/about.css";
import background from "../images/background.png";
import aboutRachita from "../images/about-rachita.png";
import slickCard1 from "../images/slick-card/slick-card-1.png";
import slickCard2 from "../images/slick-card/slick-card-2.png";
import slickCard3 from "../images/slick-card/slick-card-3.png";
import passion1 from "../images/passion/passion1.png";
import passion2 from "../images/passion/passion2.png";
import passion3 from "../images/passion/passion3.png";
import blog1 from "../images/press-blogs/blog1.png"
import blog2 from "../images/press-blogs/blog2.png"
import blog3 from "../images/press-blogs/blog3.png"

const About = () => {
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    adaptiveHeight: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: "unslick", // destroys slick
      },
    ],
  };

  return (
    <>
      <div
        class="about-image container"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <h1>About Rachita Sharma</h1>
            <img src={aboutRachita} />
          </div>
        </div>
      </div>
      
      <div class="about-description container">
        <div class="home-second-inner">
          <div class="row">
            <div class="col-md-12 mt-md-0 mt-3 text-center">
              <h2 className="aboutme-heading"> About Me</h2>
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

          <div class="row">
            <div class="col-md-12 mt-md-0 mt-3 text-center slick">
              <Slider {...settings}>
                <div>
                  <img src={slickCard1} />
                </div>
                <div>
                  <img src={slickCard2} />
                </div>
                <div>
                  <img src={slickCard3} />
                </div>
                <div>
                  <img src={slickCard1} />
                </div>
                <div>
                  <img src={slickCard2} />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      //
      <section id="passion-section" style={{ backgroundImage: `url(${background})` }} >
        <div className="container">
          <h2>Rachita's Passion</h2>
          <div className="row">
            <div class="card col-md-4">
              <div
                className="card-img"
                style={{ background: `url(${passion1})` }}
              ></div>
              <div class="card-body">
                <h5 class="card-title passion-title">Graphic Designing</h5>
                <p class="card-text passion-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                </p>
              </div>
            </div>

            <div class="card col-md-4">
              <div
                className="card-img"
                style={{ background: `url(${passion2})` }}
              ></div>
              <div class="card-body">
                <h5 class="card-title passion-title">Web Development</h5>
                <p class="card-text passion-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                </p>
              </div>
            </div>

            <div class="card col-md-4">
              <div
                className="card-img"
                style={{ background: `url(${passion3})` }}
              ></div>
              <div class="card-body">
                <h5 class="card-title passion-title">Social Media Marketing</h5>
                <p class="card-text passion-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


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

export default About;
