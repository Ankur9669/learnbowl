import React from "react";
import "./section5.css";
import { AiOutlineArrowRight } from "react-icons/ai";
function Section5(prop) {
  const scrollToCardSection = prop.scrollToCardSection;
  return (
    <div className="home-section-5">
      <img
        src="home-section-5-quote-start.svg"
        alt="image"
        className="home-section-5-quote-start"
      ></img>
      <h3 className="home-section-5-heading">What Role Models Say</h3>
      <div className="home-section-5-content">
        <div className="home-section-5-content-section-1">
          <p className="home-section-5-content-section-1-txt">
            <img
              src="/quote-start-white.svg"
              alt="image"
              className="quote-start-white"
            ></img>
            Education is the most Powerful Weapon which you can use to change
            the world.
            <img
              src="/quote-end-white.svg"
              alt="image"
              className="quote-end-white"
            ></img>
          </p>
          <p className="home-section-5-content-section-1-name">
            - APJ. Abdul Kalam
          </p>
          <button
            className="home-section-5-content-section-1-btn"
            onClick={scrollToCardSection()}
          >
            Browse Courses{" "}
            <span className="home-section-5-right-arrow">
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
        <div className="home-section-5-content-section-2">
          {/* <img
            src="/abdul.png"
            alt="image"
            className="home-section-5-img"
          ></img> */}
          <object
            data="/home-section-5-img.svg"
            type="image/svg+xml"
            alt="image"
            className="home-section-5-img"
          ></object>
        </div>
      </div>
    </div>
  );
}

export default Section5;
