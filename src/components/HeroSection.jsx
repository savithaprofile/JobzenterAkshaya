import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section position-relative overflow-hidden">
      <div className="hero-yellow-blob" />

      <div className="container hero-container">
        <div className="row align-items-center hero-row">
          <div className="col-xl-6 col-lg-6 hero-content-wrapper">
            <div className="hero-content d-flex flex-column">
              <span className="hero-tagline">Join the IT Revolution</span>
              <h1 className="hero-heading">
                Learn, Upskill &amp; <br />
                <span className="hero-heading-highlight">Get Placed</span>
              </h1>

              <p className="hero-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br />
                Lorem Ipsum has been the industry's standard dummy.
              </p>

              <div className="hero-actions d-flex">
                <Link
                  to="/courses"
                  className="btn hero-btn hero-btn-primary d-flex align-items-center justify-content-center"
                >
                  Explore Courses
                </Link>
                <Link
                  to="/reach-us"
                  className="btn hero-btn hero-btn-secondary d-flex align-items-center justify-content-center"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 hero-visual-wrapper">
            <div className="hero-visual position-relative">
              <img src="/Rocket.png" alt="Rocket" className="hero-rocket" />
              <div className="hero-figure">
                <img src="/Group.png" alt="Happy Woman" className="hero-figure-image" />
              </div>
              <div className="hero-ellipse hero-ellipse-top">
                <img src="/black.png" alt="Black Outer Ring" className="hero-ellipse-outer" />
                <img src="/yellow.png" alt="Yellow Inner Circle" className="hero-ellipse-inner" />
              </div>
              <div className="hero-ellipse hero-ellipse-bottom">
                <img src="/black.png" alt="Black Outer Ring" className="hero-ellipse-outer" />
                <img src="/yellow.png" alt="Yellow Inner Circle" className="hero-ellipse-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
