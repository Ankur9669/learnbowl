import React from "react";
import "./blog.css";
import { useEffect } from "react";
function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Online French Learning-Best Teachers for School, College Students";
  }, []);
  return (
    <div className="blog">
      <h3 className="blog-heading">Blog</h3>
      <p className="blog-sub-heading">
        Our latest tips, tricks, insights, and resources, hot off the presses.
      </p>

      <div className="blogs-container">
        {/* Blog 1 */}
        <a
          href="https://learnbowl.medium.com/should-we-try-new-things-or-follow-the-same-mundane-routine-7f9a39a63c51"
          target="_blank"
        >
          <div className="blog-card">
            <div className="blog-card-img-container">
              <img src="routine.jpg" alt="image" className="blog-image"></img>
            </div>

            <div className="blog-card-txt-container">
              <p className="blog-card-txt-container-heading">
                Should we try new things or follow the same mundane routine?
              </p>
              <p className="blog-card-txt-container-sub-heading">
                We, as humans, are creatures of habit who become accustomed to
                their regular routines. A drive to change that is necessary,
                especially if we want to learn new things, or increase
                productivity. Could your current routine be getting in your own
                way?
              </p>
            </div>
          </div>
        </a>

        {/* Blog 2 */}
        <a
          href="https://learnbowl.medium.com/learnbowl-encouraging-the-unknown-aca0ba090941"
          target="_blank"
        >
          <div className="blog-card">
            <div className="blog-card-img-container">
              <img
                src="encouragingThumbnail.png"
                alt="image"
                className="blog-image"
              ></img>
            </div>

            <div className="blog-card-txt-container">
              <p className="blog-card-txt-container-heading">
                Encouraging the unknown{" "}
              </p>
              <p className="blog-card-txt-container-sub-heading">
                LearnBowl is an ed-tech platform that helps rejuvenate the
                essence of holistic learning and caters to academic and
                extra-curricular excellence alongside a fun and insightful
                curriculum customized just for our students.
              </p>
            </div>
          </div>
        </a>

        {/* Blog 3 */}
        <a
          href="https://learnbowl.medium.com/the-positive-impact-of-online-learning-93fd888b99f6"
          target="_blank"
        >
          <div className="blog-card">
            <div className="blog-card-img-container">
              <img
                src="positiveImpactThumbnail.jpg"
                alt="image"
                className="blog-image"
              ></img>
            </div>

            <div className="blog-card-txt-container">
              <p className="blog-card-txt-container-heading">
                The positive impact of online learning
              </p>
              <p className="blog-card-txt-container-sub-heading">
                Distance learning has existed for a long time. Even in a world
                with tried-and-true schooling systems and curricula, the most
                successful schools are those that adapt to changing times, as
                well as student, parent, and societal expectations!
              </p>
            </div>
          </div>
        </a>

        {/* Blog 4 */}
        <a
          href="https://learnbowl.medium.com/debunking-the-myths-of-math-phobia-tips-to-overcome-it-5407707d5847"
          target="_blank"
        >
          <div className="blog-card">
            <div className="blog-card-img-container">
              <img
                src="debunkingThumbnail.jpg"
                alt="image"
                className="blog-image"
              ></img>
            </div>

            <div className="blog-card-txt-container">
              <p className="blog-card-txt-container-heading">
                Debunking the myths of Math phobia, tips to overcome it
              </p>
              <p className="blog-card-txt-container-sub-heading">
                When it comes to doing quick math, we all know someone who gets
                flustered. It's possible that person is you. Math is prized
                since it is regarded as a sign of intelligence in the community.
                These beliefs contribute to students' and the general public's
                feelings of math fear.{" "}
              </p>
            </div>

            {/* <div className = "blog-author">
                            <img src = "blog-avatar.svg" alt = "image" className = "blog-avatar"></img>
                            <p className = "blog-author-name">John Birmingham</p>
                            <p className = "blog-publish-date">25 December 2019</p>
                        </div> */}
          </div>
        </a>

        {/* Blog 5 */}
        <a
          href="https://learnbowl.medium.com/importance-of-extra-curricular-skills-3fb3c29c64c7"
          target="_blank"
        >
          <div className="blog-card">
            <div className="blog-card-img-container">
              <img
                src="extracurricularThumbnail.jpg"
                alt="image"
                className="blog-image"
              ></img>
            </div>

            <div className="blog-card-txt-container">
              <p className="blog-card-txt-container-heading">
                Importance of Extra-Curricular skills
              </p>
              <p className="blog-card-txt-container-sub-heading">
                In today’s world there are more distractions than ever! Many
                parents want to give their children a break from screen time but
                don't know where to start. Extracurricular activities are one
                such way to provide a unique environment for learning and growth
                – all while having fun!
              </p>
            </div>
          </div>
        </a>

        {/* Blog 6 */}
        <a
          href="https://learnbowl.medium.com/how-many-languages-can-you-actually-learn-b7dfb786e002"
          target="_blank"
        >
          <div className="blog-card">
            <div className="blog-card-img-container">
              <img
                src="languagesThumbnail.jpg"
                alt="image"
                className="blog-image"
              ></img>
            </div>

            <div className="blog-card-txt-container">
              <p className="blog-card-txt-container-heading">
                How many languages can you learn?
              </p>
              <p className="blog-card-txt-container-sub-heading">
                It's difficult to give a definitive answer to this question.
                Everything is contingent on an individual's ability. However,
                regardless of how difficult it is to become competent in
                numerous languages, the more languages you learn, the easier it
                becomes to learn new ones!
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Blog;
