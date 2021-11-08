import React, { useState, useEffect } from "react";
import "./section1.css";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
function Section1() {
  const [width, setWidth] = useState(window.innerWidth);
  defineLordIconElement(loadAnimation);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function handleResize() {
    setWidth(window.innerWidth);
  }
  return (
    <div className="home-section-1">
      <h3 className="home-section-1-heading">Working Process and Benefits</h3>
      <img
        src="home-section-1-flowimg.svg"
        alt="image"
        className="home-section-1-flowimg"
      ></img>
      <img
        src="home-section-1-mobile-flowimg.svg"
        alt="image"
        className="home-section-1-moblie-flowimg"
      ></img>
      <div className="home-section-1-points-container">
        <div className="home-section-1-point">
          <lord-icon
            trigger={width > 900 ? "hover" : "loop"}
            delay="1500"
            src="lottie-1.json"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "white",
              borderRadius: "30px",
              cursor: "pointer",
            }}
          ></lord-icon>
          <p className="home-section-1-point-txt">Find Course</p>
        </div>
        <div className="home-section-1-point">
          <lord-icon
            trigger={width > 900 ? "hover" : "loop"}
            src="lottie-2.json"
            delay="1500"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "white",
              borderRadius: "30px",
              cursor: "pointer",
            }}
          ></lord-icon>
          <p className="home-section-1-point-txt">Register for Workshop</p>
        </div>
        <div className="home-section-1-point">
          <lord-icon
            trigger={width > 900 ? "hover" : "loop"}
            src="lottie-3.json"
            delay="1500"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "white",
              borderRadius: "30px",
              cursor: "pointer",
            }}
          ></lord-icon>
          <p className="home-section-1-point-txt">Get Certified</p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
