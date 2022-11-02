import React from "react";
import '../styles/aboutGPT.css'
import gptIcon from '../images/gpt-icon.png'
import background from '../images/background.png'
import aboutGptBanner from '../images/about-gpt-banner.png'
import blog1 from "../images/press-blogs/blog1.png"
import blog2 from "../images/press-blogs/blog2.png"
import blog3 from "../images/press-blogs/blog3.png"
import pic1 from '../images/about-gpt/pic1.png'
import pic2 from '../images/about-gpt/pic2.png'
import pic3 from '../images/about-gpt/pic3.png'
import pic4 from '../images/about-gpt/pic4.png'
import img1 from '../images/core-value/img1.png'
import img2 from '../images/core-value/img2.png'
import img3 from '../images/core-value/img3.png'
import img4 from '../images/core-value/img4.png'
import logo1 from '../images/collaborations/logo1.png'
import logo2 from '../images/collaborations/logo2.png'
import logo3 from '../images/collaborations/logo3.png'
import logo4 from '../images/collaborations/logo4.png'
import logo5 from '../images/collaborations/logo5.png'
import logo6 from '../images/collaborations/logo6.png'
import logo7 from '../images/collaborations/logo7.png'
import logo8 from '../images/collaborations/logo8.png'
import arrowIcon from '../images/arrow-icon.png'

const AboutGPT = () => {
  const [pressData, setPressData] = React.useState([])

  
  const getPressData = ()=>{
    fetch('https://girlpowertalk.com/wp-json/wp/v2/ourpress')
    .then(res => res.json())
    .then(data => setPressData(data.slice(0,3)))
  }
  
  React.useEffect(()=>{
    getPressData()
  }, [])

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
            {/* <div class="card col-md-4">
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
            </div> */}
            {
              pressData.map(item => {
                return(
                  <div class="card col-md-4">
                    <div
                      className="card-img"
                      style={{ background: `url(${item.yoast_head_json.og_image[0].url})` }}
                    ></div>
                    <div class="card-body">
                      <p class="card-text blog-text">
                      {item.title.rendered}
                      </p>
                    </div>
                 </div>
                )
              })
            }
          </div>
        </div>
      </section>


      <section id="core-value-section" style={{ background: `url(${background})`}}>
          <div className="container">
            <div className="heading-text">
              <h2>Core Values </h2>
              <p>What is Lorem Ipsum ?</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            <div className="row">
                  <div class="col-md-3" style={{ background: `linear-gradient(359.91deg, rgb(255, 255, 255) 9.49%, rgb(255, 255, 255) 34.46%, rgba(255, 255, 255, 0.9) 44.46%, rgba(255, 255, 255, 0) 60.05%), url(${img1})`}} >
                    <div className="card-img" >
                      <div className="inner-content">
                        <h5 class="card-title">Women In Technology</h5>
                        <p>We consciously facilitate opportunities for women in technology.</p>
                        <a href="https://girlpowertalk.com/women-in-technology/" target="_blank" className="learn-more">Learn More
                        <span>
                        <img src={arrowIcon} alt="arrow-icon" className="arrow-icon" />
                        </span>
                        </a>
                      </div>
                    </div>
                    </div>
                 

                  <div class="col-md-3" style={{ background: `linear-gradient(359.91deg, rgb(255, 255, 255) 9.49%, rgb(255, 255, 255) 34.46%, rgba(255, 255, 255, 0.9) 44.46%, rgba(255, 255, 255, 0) 60.05%), url(${img2})`}} >
                    <div className="card-img">
                    <div className="inner-content">
                      <h5 class="card-title">Diversity & Inclusion</h5>
                      <p>We celebrate diversity and promote the inclusion of all genders, races, and religions.</p>
                      <a href="https://girlpowertalk.com/diversity-inclusion/" target="_blank" className="learn-more">Learn More
                      <span>
                      <img src={arrowIcon} alt="arrow-icon" className="arrow-icon" />
                      </span>
                      </a>
                    </div>
                    </div>
                  </div>

                  <div class="col-md-3" style={{ background: `linear-gradient(359.91deg, rgb(255, 255, 255) 9.49%, rgb(255, 255, 255) 34.46%, rgba(255, 255, 255, 0.9) 44.46%, rgba(255, 255, 255, 0) 60.05%), url(${img3})`}} >
                    <div className="card-img" >
                    <div className="inner-content">
                      <h5 class="card-title">Generate Impact</h5>
                      <p>We lead Girl Power Talk’s social impact projects to support youth development in Asia and Africa</p>
                      <a href="https://girlpowertalk.com/generate-impact/" target="_blank" className="learn-more">Learn More
                      <span>
                      <img src={arrowIcon} alt="arrow-icon" className="arrow-icon" />
                      </span>
                      </a>
                    </div>
                    </div>
                  </div>

                  <div class="col-md-3" style={{ background: `linear-gradient(359.91deg, rgb(255, 255, 255) 9.49%, rgb(255, 255, 255) 34.46%, rgba(255, 255, 255, 0.9) 44.46%, rgba(255, 255, 255, 0) 60.05%), url(${img4})`}} >
                    <div className="card-img" >
                    <div className="inner-content">
                      <h5 class="card-title">Entrepreneurial Culture</h5>
                      <p>We provide access to education and develop socially conscious entrepreneurs.</p>
                      <a href="https://girlpowertalk.com/entrepreneurial-culture/" target="_blank" className="learn-more">Learn More
                      <span><img src={arrowIcon} alt="arrow-icon" className="arrow-icon" /></span>
                      </a>
                    </div>
                    </div>
                  </div>
            </div>
          </div>
      </section>

      <section id="collaborations">
        <h2>collaborations</h2>
        <div className="container">
          <div className="row1">
            <div><img src={logo1} /></div>
            <div><img src={logo2} /></div>
            <div><img src={logo3} /></div>
            <div><img src={logo4} /></div>
          </div>
          <div className="row2">
            <div><img src={logo5} /></div>
            <div><img src={logo6} /></div>
            <div><img src={logo7} /></div>
            <div><img src={logo8} /></div>
          </div>
          </div>
      </section>

      <section id="impact-section">
        <h2>How we Impact </h2>
        <div className="video-container">
          <div><iframe width="365" height="235" src="https://www.youtube.com/embed/8pSbtfapgSo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          <div><iframe width="365" height="235" src="https://www.youtube.com/embed/ik4_1p3quIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          <div><iframe width="365" height="235" src="https://www.youtube.com/embed/B6oPAhFeRmY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          <div><iframe width="365" height="235" src="https://www.youtube.com/embed/ppPoZ55OpPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          <div><iframe width="365" height="235" src="https://www.youtube.com/embed/bfsdzTGEtvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </div>
      </section>


    </>
  );
};

export default AboutGPT;
