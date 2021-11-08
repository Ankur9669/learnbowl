import React from "react";
import "./section2.css";
import { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
function Section2(prop) {
  const scrollToCardSection = prop.scrollToCardSection;

  const [width, setWidth] = useState(window.innerWidth);
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
    <div className="home-section-2">
      {width < 1080 ? (
        <p className="home-section-2-section-1-mobile-heading">
          LearnBowl:
          <span style={{ color: "#2D3092" }}> A Holistic Approach</span>
        </p>
      ) : (
        <></>
      )}
      <div className="home-section-2-section-1">
        <p className="home-section-2-section-1-heading">
          LearnBowl: A<span style={{ color: "#2D3092" }}> Holistic </span>
          Approach
        </p>
        <p className="home-section-2-section-1-info-1">
          Every individual wants to succeed academically as well as in life. And
          this can only be accomplished through extracurricular experiences and
          learning. At LearnBowl, we provide a solid foundation for students
          where we try to engage the learner's intellect, spirit, and body in
          the learning process and make our students ready to take on the
          future!
        </p>
        <p className="home-section-2-section-1-info-2">
          Amazing, right? Join your peers from school and hop onto the French
          bandwagon!{" "}
        </p>
        <button className="register-btn" onClick={scrollToCardSection()}>
          Explore Courses{" "}
          <span className="home-section-2-rightArrow">
            <AiOutlineArrowRight />
          </span>
        </button>
      </div>

      <div className="home-section-2-section-2">
        <img
          src="hero-section-2-section-2-img.svg"
          alt="image"
          className="home-section-2section-2-img"
        ></img>
      </div>
    </div>
  );
}

export default Section2;
