import React from "react";
import "./section2.css";
function Section2() {
  return (
    <div className="about-section-2">
      <img
        src="/about-section-green-ellipse.svg"
        alt="image"
        className="about-section-green-ellipse"
      />
      <div className="about-section-2-section-1">
        <img
          src="./about-section-img-2.png"
          alt="image"
          className="about-section2-img"
        ></img>
      </div>
      <div className="about-section-2-section-2">
        <h3>Our Mission</h3>
        <p>
          Our foremost aim is to garnish our students’ personalities with
          extra-curricular & experiential skills. We’re passionate about
          granting everyone the opportunity to learn and explore activities
          outside school, in the most personalized way possible.
        </p>
      </div>
    </div>
  );
}

export default Section2;
