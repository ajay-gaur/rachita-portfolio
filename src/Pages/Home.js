import React from "react";
import "../styles/home.css";
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
import articleImg from "../images/article-img.png";
import moneyControl from "../images/money-control.png";
import shaboard from "../images/shaboard.png";
import suzanne from "../images/suzanne.png";
import eshe from "../images/eshe.png";
import flower from "../images/flower.png";
import business1 from "../images/business-1.png";
import business2 from "../images/business-2.png";
import business3 from "../images/business-3.png";
import vector from "../images/Vector.png";
import rachita1 from "../images/rachita1.png";
import rachita2 from "../images/rachita2.png";
import rachita3 from "../images/rachita3.png";
import arrowDown from "../images/arrow-down.png";
import fb from '../images/social-icons-banner/fb.png'
import youtube from '../images/social-icons-banner/youtube.png'
import insta from '../images/social-icons-banner/insta.png'
import linkedin from '../images/social-icons-banner/linkedin.png'

const Home = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots-feature slick-dots",
    arrows: false,
    centerMode: true,
    infinite: true,
    speed: 500,
    useCSS: true,
    slidesToShow: 5,
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

  const vlogSettings = {
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,

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
    centerMode: true,
    arrows: false,
    useCSS: true,
    useTransform: true,
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

  const rachitaSettings = {
    dots: true,
    autoplay: false,
    arrows: false,
    adaptiveHeight: false,
    centerPadding: "50px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // stagePadding: 50,
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

  const [pressData, setPressData] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [cardData, setCardData] = React.useState([]);
  const [vlogData, setVlogData] = React.useState([]);
  const [video, setVideo] = React.useState();
  const ref = React.createRef();

  const getPressData = () => {
    fetch("https://girlpowertalk.com/wp-json/wp/v2/ourpress")
      .then((res) => res.json())
      .then((data) => setPressData(data.slice(0, 3)));
  };

  const blogsData = () => {
    fetch("https://girlpowertalk.com/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => setData(data.slice(0, 3)));
  };

  const getCardsData = () => {
    fetch("https://girlpowertalk.com/wp-json/wp/v2/testimonials")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          if (item.title.rendered === "Joshua Jones, CFP®") {
            data.splice(data.indexOf(item), 1);
          }
        });
        setCardData(data);
      });
  };

  const getVlogData = () => {
    fetch("https://girlpowertalk.com/wp-json/wp/v2/ourvideos")
      .then((res) => res.json())
      .then((data) => {
        setVlogData(data);
        setVideo(data[0]);
      });
  };

  React.useEffect(() => {
    blogsData();
    getCardsData();
    getPressData();
    getVlogData();
  }, []);

  const next = () => ref.current.slickNext();

  return (
    <>
      {/* Top banner section */}
      <div class="home-page" style={{ backgroundImage: `url(${background})` }}>
        <div class="home-inner">
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div class="col-md-6 mt-md-0 mt-3 rachita-home-img">
                <img src={rachitamam} />
              </div>
              <div class="col-md-6 mt-md-0 mt-3 card-right">
                <h1>Rachita Sharma</h1>
                <h3>CEO & Co-Founder of Girl Power Talk</h3>
                <p>
                  Rachita Sharma is a technology entrepreneur, financial
                  literacy advocate and gender rights activist. Rachita is the
                  CEO of Girl Power Talk, based in India, a purpose driven
                  organization.
                </p>
                <div className="social-media-icons">
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

      {/* About Rachita section */}
      <div class="home-page container">
        <div class="home-second-inner">
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div class="col-md-6 mt-md-0 mt-3">
                <img src={rachitamam2} />
              </div>
              <div class="col-md-6 mt-md-0 mt-3 card-right">
                <h2>About Rachita</h2>
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
                <a href="/about" className="readmore">
                  {" "}
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote section */}
      <div className="container quote-container">
        <div className="quote">
          <p>
            One girl empowers another. Let’s change lives together: one girl,
            one <br /> woman and one human being at a time.
          </p>
        </div>
      </div>

      {/* Featured partner slick slide section */}
      <div className="featured-container">
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

      {/* Featured people slick slide section */}
      <section id="card-section">
        <div className="container featured-container">
          <Slider {...cardSettings}>
            {cardData.map((item) => {
              let contentText =
                new DOMParser()
                  .parseFromString(item.excerpt.rendered, "text/html")
                  .documentElement.textContent.slice(0, 150) + "...";
              return (
                <div className="card-container">
                  <img src={item.yoast_head_json.og_image[0].url} />
                  <div className="text-container">
                    <span>{item.title.rendered}</span>
                    <p>{contentText}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      {/* About Girl Power Talk section */}
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
                <a href="/aboutgpt">Know More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs section */}
      <section id="blog-section">
        <div className="container">
          <h2>Blogs by Rachita</h2>
          <div className="row">
            {data &&
              data.map((blog, i) => {
                return (
                  <div class="card col-md-4">
                    <div
                      className="card-img"
                      style={{
                        background: `url(${blog.yoast_head_json.og_image[0].url})`,
                      }}
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title">{blog.title.rendered}</h5>
                      <p class="card-text"></p>
                      <a
                        href={blog.guid.rendered}
                        target="_blank"
                        class="btn btn-primary"
                        rel="noreferrer"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Article section */}
      <div
        class="article-section"
        style={{ backgroundImage: `url(${articleImg})` }}
      >
        <img className="flower" src={flower} alt="flower-img" />
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

      {/* News section */}
      <section id="News-section">
        <div className="container">
          <h1>In The News </h1>
          <div className="row">
            {pressData &&
              pressData.map((press, i) => {
                return (
                  <div class="card col-md-4">
                    <div
                      className="card-img"
                      style={{
                        background: `url(${press.yoast_head_json.og_image[0].url})`,
                      }}
                    >
                      <h5 class="card-title">{press.title.rendered}</h5>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="news-btn">
          <a
            href="https://girlpowertalk.com/press/"
            className="readmore"
            target="_blank"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
      </section>

      {/* Business section */}
      <section id="business-section">
        <div className="container">
          <div className="row">
            <div class="card col-md-4">
              <div
                className="card-img"
                style={{ background: `url(${business1})` }}
              >
                <div className="inner-content">
                  <h5 class="card-title">Collaboration</h5>
                  <p class="card-text">
                    Get in touch with us for collaboration opportunities
                  </p>
                </div>
              </div>
            </div>

            <div class="card col-md-4">
              <div
                className="card-img"
                style={{ background: `url(${business2})` }}
              >
                <div className="inner-content">
                  <h5 class="card-title">Business & Media</h5>
                  <p class="card-text">
                    Get in touch with us for business & media inquiries.
                  </p>
                </div>
              </div>
            </div>

            <div class="card col-md-4">
              <div
                className="card-img"
                style={{ background: `url(${business3})` }}
              >
                <div className="inner-content">
                  <h5 class="card-title">General Contact</h5>
                  <p class="card-text">
                    Looking to speak with me directly about suggestions and
                    feedbacks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vlog video section */}
      <section className="vlog-section">
        <div class="d-flex align-items-start">
          <div
            class="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <div className="heading">
              <h2> All Vlogs</h2>
              <img src={vector} />
            </div>
            <Slider ref={ref} {...vlogSettings}>
              {vlogData.map((vlog, i) => {
                return (
                  <div className="item">
                    <button
                      onClick={() => setVideo(vlog)}
                      class={i === 0 ? "nav-link active" : "nav-link"}
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="false"
                    >
                      {vlog.title.rendered}
                    </button>
                  </div>
                );
              })}
            </Slider>
            <div className="arrow-down-container">
              <img src={arrowDown} onClick={next} alt="arrow-down" />
            </div>
          </div>
        </div>

        <div class="tab-content" id="v-pills-tabContent">
          <div className="videos">
            <h2>Videos</h2>
          </div>
          <div
            class="tabe-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <iframe
              width="1027"
              height="600"
              src={
                video &&
                video.content.rendered.split(" ")[1].slice(5).replace('"', "")
              }
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="view-btn">
            <a href="#">View All</a>
          </div>
        </div>
      </section>

      {/* Rachita images section */}
      <section id="rachita-card-section">
        <div className="container featured-container">
          <Slider {...rachitaSettings}>
            <div className="item">
              <img src={rachita1} />
            </div>

            <div className="item">
              <img src={rachita2} />
            </div>

            <div className="item">
              <img src={rachita3} />
            </div>

            <div className="item">
              <img src={rachita3} />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Home;
