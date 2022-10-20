import React from "react";
import rachitamam from "../images/pic.png";
import rachitamam2 from "../images/pic2.png";
import background from "../images/background.png";
import rachitaGradient from "../images/rachita-gradient.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../images/slick/1.png";
import two from "../images/slick/2.png";
import three from "../images/slick/3.png";
import four from "../images/slick/4.png";
import five from "../images/slick/5.png";
import six from "../images/slick/6.png";
import card1 from "../images/card-1.png";
import card2 from "../images/card-2.png";
import card3 from "../images/card-3.png";
import articleImg from "../images/article-img.png";
import moneyControl from "../images/money-control.png";
import shaboard from "../images/shaboard.png";
import suzanne from "../images/suzanne.png";
import eshe from "../images/eshe.png";
import flower from "../images/flower.png";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    adaptiveHeight: true,
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

  const cardSettings = {
    dots: true,
    autoplay: true,
    arrows: false,
    adaptiveHeight: true,
    centerPadding: "50px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  const [data, setData] = React.useState([]);
  const [imgUrl, setImgUrl] = React.useState([]);

  const blogsData = () => {
    fetch("https://girlpowertalk.com/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => {
        let slicedData = data.slice(0, 3);
        setData(slicedData);
        slicedData.forEach((el) =>
          setImgUrl((prev) => [...prev, el._links.self[0].href])
        );
      });
  };

  // console.log(imgUrl)
  const imageData = () => {
    imgUrl.forEach((item, i) =>
      fetch(item)
        .then((res) => res.json())
        .then((result) =>
          setData((prev) => [
            ...prev,
            prev.imageurl = result.yoast_head_json.og_image[0].url,
          ])
        )
    );
  };

  React.useEffect(() => {
    blogsData();
    imageData();
  }, []);

  console.log(data);

  return (
    <>
      <div class="home-page" style={{ backgroundImage: `url(${background})` }}>
        <div class="home-inner">
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div class="col-md-6 mt-md-0 mt-3">
                <img src={rachitamam} />
              </div>
              <div class="col-md-6 mt-md-0 mt-3 card-right">
                <h2>Rachita Sharma</h2>
                <h3>CEO & Co-Founder of Girl Power Talk</h3>
                <p>
                  Rachita Sharma is a technology entrepreneur, financial
                  literacy advocate and gender rights activist. Rachita is the
                  CEO of Girl Power Talk, based in India, a purpose driven
                  organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home-page container">
        <div class="home-second-inner">
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div class="col-md-6 mt-md-0 mt-3">
                <img src={rachitamam2} />
              </div>
              <div class="col-md-6 mt-md-0 mt-3 card-right">
                <h2>Rachita Sharma</h2>
                <p>
                  Rachita Sharma is a technology entrepreneur, financial
                  literacy advocate and gender rights activist. Rachita is the
                  CEO of Girl Power Talk, based in India, a purpose driven
                  organization empowering today’s most capable youth with the
                  confidence, knowledge and opportunity to become tomorrow’s
                  global leaders. Her responsibilities include corporate
                  communications, client engagement, and new business
                  development. She leads the evaluation of all new potential
                  Girl Power Talk team members and expansion into new markets.
                  Read More.
                </p>
                <a href="#" className="readmore">
                  {" "}
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container quote-container">
        <div className="quote">
          <p>
            One girl empowers another. Let’s change lives together: one girl,
            one <br /> woman and one human being at a time.
          </p>
        </div>
      </div>

      <div className="container featured-container">
        <h2>Featured In</h2>

        <Slider {...settings}>
          <div>
            <img src={one} />
          </div>
          <div>
            <img src={two} />
          </div>
          <div>
            <img src={three} />
          </div>
          <div>
            <img src={four} />
          </div>
          <div>
            <img src={five} />
          </div>
          <div>
            <img src={six} />
          </div>
        </Slider>
      </div>

      <section id="card-section">
        <div className="container featured-container">
          <Slider {...cardSettings}>
            <div className="card-container">
              <img src={card1} />
              <div className="text-container">
                <span>Rachita Sharma</span>
                <h3>CEO & Co-Founder of Girl Power Talk</h3>
                <p>
                  Rachita Sharma is a technology entrepreneur, financial
                  literacy advocate and gender rights activist. Rachita is the
                  CEO of Girl Power Talk, based in India, a purpose driven
                  organization.
                </p>
              </div>
            </div>

            <div className="card-container">
              <img src={card2} />
              <div className="text-container">
                <span>Rachita Sharma</span>
                <h3>CEO & Co-Founder of Girl Power Talk</h3>
                <p>
                  Rachita Sharma is a technology entrepreneur, financial
                  literacy advocate and gender rights activist. Rachita is the
                  CEO of Girl Power Talk, based in India, a purpose driven
                  organization.
                </p>
              </div>
            </div>

            <div className="card-container">
              <img src={card3} />
              <div className="text-container">
                <span>Rachita Sharma</span>
                <h3>CEO & Co-Founder of Girl Power Talk</h3>
                <p>
                  Rachita Sharma is a{" "}
                  <strong>
                    technology entrepreneur, financial literacy advocate and
                    gender rights activist. Rachita is the CEO of Girl Power
                    Talk, based in India,
                  </strong>{" "}
                  a purpose driven organization.
                </p>
              </div>
            </div>

            <div className="card-container">
              <img src={card3} />
              <div className="text-container">
                <span>Rachita Sharma</span>
                <h3>CEO & Co-Founder of Girl Power Talk</h3>
                <p>
                  Rachita Sharma is a technology entrepreneur, financial
                  literacy advocate and gender rights activist. Rachita is the
                  CEO of Girl Power Talk, based in India, a purpose driven
                  organization.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <div
        class="rachita-page"
        style={{ backgroundImage: `url(${rachitaGradient})` }}
      >
        <div class="rachita-inner">
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div class="col-md-6 mt-md-0 mt-3"></div>
              <div class="col-md-6 mt-md-0 mt-3 card-right">
                <h2>About Girl Power Talk</h2>
                <p>
                  Girl Power Talk strives to inspire girls with persistence,
                  empathy, and confidence. We empower young women, men, and
                  nonbinary individuals with merit-based opportunities to grow
                  and achieve their full potential. Our mission, in
                  collaboration with our sister company Blue Ocean Global
                  Technology, is to develop girls in India to become global
                  leaders. We are relentlessly committed to education, gender
                  equality, and integrating the strengths of specially abled
                  communities. We celebrate the diverse talents of each
                  individual. Through our nurturing culture of learning and
                  mentorship, we instill young people with exceptional
                  soft-skills, technical knowledge, and purpose in life. We
                  provide a platform to share the voices and stories of girls
                  and women across India. #GirlPowerTalk
                </p>
                <a href="#">Know More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs section */}

      <section id="blog-section">
        {/* <div className="container">
        <div className="row">
        <div class="col-md-4 mt-md-0 mt-3">
          <h2>hello world</h2>
        </div>
        <div class="col-md-4 mt-md-0 mt-3">
        <h2>hello world</h2>
        </div>
        <div class="col-md-4 mt-md-0 mt-3">
        <h2>hello world</h2>
        </div>
        </div>
        </div> */}

        <div className="container">
          <h2>Blogs by Rachita</h2>
          <div className="row">
            {data.map((blog, i) => {
              return (
                <div
                  class="col-md-4 mt-md-0 mt-3"
                  style={{ background: `url(${blog.imageurl})` }}
                >
                  {/* <img src={imgUrl[i]} width={"400px"} /> */}
                  <p>{blog.title.rendered}</p>
                  {/* <p> {blog.description} </p> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div
        class="article-section"
        style={{ backgroundImage: `url(${articleImg})` }}
      >
        <img className="flower" src={flower} />
        <div className="container">
          <div class="rachita-inner">
            <div class="container-fluid text-center text-md-left">
              <div class="row">
                <div class="col-md-4 mt-md-0 mt-3"></div>
                <div class="col-md-8 mt-md-0 mt-3">
                  <div class="row">
                    <h2>Featured Articles</h2>
                    <div class="col-md-6 mt-md-0 mt-3">
                      <p>
                        The golden mean: How Girl Power Talk is empowering
                        employees and communities
                      </p>{" "}
                      <img src={moneyControl} />
                    </div>
                    <div class="col-md-6 mt-md-0 mt-3">
                      <p>
                        Meet Her: Rachita Sharma, The CEO and Co-Founder of Girl
                        Power Talk
                      </p>{" "}
                      <img src={suzanne} />
                    </div>
                    <div class="col-md-6 mt-md-0 mt-3">
                      <p>Girl Power Talk Empowers Youth</p>{" "}
                      <img src={shaboard} />
                    </div>
                    <div class="col-md-6 mt-md-0 mt-3">
                      <p>
                        This Young Startup Founder Hires and Trains Girls for
                        Future-Ready Jobs
                      </p>{" "}
                      <img src={eshe} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
