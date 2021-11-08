import React from "react";
import "./section6.css";
import { useState } from "react";
import { RatingView } from "react-simple-star-rating";
import Carousel, { autoplayPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
function Section6() {
  const [value, setValue] = useState(0);
  function onChange(value) {
    setValue(value);
  }

  //This would Highlight the dot in the caraousel
  const highlightActiveDot = (index) => {
    if (value < 0) {
      return Math.abs(value % 3 === 0 ? 0 : (value % 3) + 3) === index
        ? "#2d3092"
        : "rgba(45, 48, 146, 0.3)";
    }

    return value % 3 === index ? "#2d3092" : "rgba(45, 48, 146, 0.3)";
  };

  //This would style the dots
  const renderThumbnails = () => {
    return Array(3)
      .fill()
      .map((_, index) => (
        <div
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "200px",
            marginTop: "20px",
            marginBottom: "10px",
            backgroundColor: highlightActiveDot(index),
          }}
        />
      ));
  };
  return (
    <div className="frenchschool-section-6">
      <img
        src="/orangeFullEllipse.svg"
        alt="image"
        className="carausel-orange-ellipse"
      ></img>
      <img
        src="/contact-blue-ellipse.svg"
        alt="image"
        className="carausel-blue-ellipse"
      ></img>
      <h3 className="frenchschool-section-6-heading">
        What our <span style={{ color: "#2D3092" }}>Students</span> Say
      </h3>
      <div className="french-section-5-carausel-container">
        <Carousel
          value={value}
          onChange={onChange}
          plugins={[
            "centered",
            "infinite",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 3000,
              },
            },
          ]}
          breakpoints={{
            1080: {
              plugins: [
                "infinite",
                "centered",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                    interval: 5000,
                  },
                },
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 5000,
                  },
                },
              ],
            },
            480: {
              plugins: [
                "infinite",

                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1.5,
                    interval: 5000,
                  },
                },
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 5000,
                  },
                },
              ],
            },
            390: {
              plugins: [
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1.3,
                    interval: 5000,
                  },
                },
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 5000,
                  },
                },
              ],
            },
            340: {
              plugins: [
                "infinite",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                    interval: 5000,
                  },
                },
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 5000,
                  },
                },
              ],
            },
          }}
        >
          <div className="review-container">
            <div className="reviewer-rating">
              <RatingView ratingValue={5} size="20px" fillColor="#FFB300" />
            </div>
            <div className="reviewer-review">
              We appreciate the patience and energy the teacher put into
              teaching. I am now more confident and better at calculations.
              Thank you for your constant efforts in making me improve myself
              even further.
            </div>
            <div className="reviewer-info">
              <img
                src="/jiahdoke.jpeg"
                alt="asd"
                className="reviewer-image"
              ></img>
              <div className="reviewer-name-lvl">
                <span className="reviewer-name">Jiah Doke</span>
                <br />
                Amanora School Pune, Class 5
              </div>
            </div>
          </div>
          <div className="review-container">
            <div className="reviewer-rating">
              <RatingView ratingValue={5} size="20px" fillColor="#FFB300" />
            </div>
            <div className="reviewer-review">
              We truly acknowledge all the efforts the teacher as well as the
              core team puts in to make me learn better in each session. Overall
              it truly is a holistic experience and I cherish every class of
              theirs.
            </div>
            <div className="reviewer-info">
              <img
                src="/sakshimahajan.jpeg"
                alt="asd"
                className="reviewer-image"
              ></img>
              <div className="reviewer-name-lvl">
                <span className="reviewer-name">Sakshi Mahajan</span>
                <br />
                DSK School Pune, Class 11
              </div>
            </div>
          </div>
          <div className="review-container">
            <div className="reviewer-rating">
              <RatingView ratingValue={5} size="20px" fillColor="#FFB300" />
            </div>
            <div className="reviewer-review">
              It seems classes are going well as I enjoy these classes and do
              not miss any sessions. Problem-solving is also really satisfactory
              and the work given is also adequate and fun to do. I would
              recommend Learnbowl for all the courses they offer.
            </div>
            <div className="reviewer-info">
              <img
                src="/aagamagrawal.jpeg"
                alt="asd"
                className="reviewer-image"
              ></img>
              <div className="reviewer-name-lvl">
                <span className="reviewer-name">Aagam Agarwal</span>
                <br />
                Ryan International Delhi, Class 6
              </div>
            </div>
          </div>
          <div className="review-container">
            <div className="reviewer-rating">
              <RatingView ratingValue={5} size="20px" fillColor="#FFB300" />
            </div>
            <div className="reviewer-review">
              We are very satisfied with how smoothly the class goes and in
              addition how much confidence it gives to Vansh to speak up and get
              his doubts clarified. We are really happy with the sessions taken
              by Learnbowl and hope the same continues for the rest of the
              sessions.
            </div>
            <div className="reviewer-info">
              <img
                src="/vanshlodha.jpg"
                alt="asd"
                className="reviewer-image"
              ></img>
              <div className="reviewer-name-lvl">
                <span className="reviewer-name">Vansh Lodha</span>
                <br />
                Dastur coed, class - 10
              </div>
            </div>
          </div>
          <div className="review-container">
            <div className="reviewer-rating">
              <RatingView ratingValue={5} size="20px" fillColor="#FFB300" />
            </div>
            <div className="reviewer-review">
              The teacher was very patient and dedicated and knew the language
              well. This helped my son catch up with French over summer
              holidays. I highly recommend it.
            </div>
            <div className="reviewer-info">
              <img src="/tina.jpg" alt="asd" className="reviewer-image"></img>
              <div className="reviewer-name-lvl">
                <span className="reviewer-name">Tina</span>
                <br />
                Ryan International Delhi, Class 6
              </div>
            </div>
          </div>
        </Carousel>
        <Dots
          number={3}
          value={value}
          onChange={onChange}
          thumbnails={renderThumbnails()}
        ></Dots>
      </div>
    </div>
  );
}

export default Section6;
