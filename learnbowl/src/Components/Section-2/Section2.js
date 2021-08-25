import React from 'react'
import "./section2.css"
function Section2() {
    return (
        <>
            <label className = "section-2-heading">About Learnbowl</label>
            <div className = "section-2">
                <div className = "section-2-text">
                    <div className = "section-2-quote">
                        “An investment in knowledge pays the best interest”
                    </div>
                    <div className = "section-2-quote-author">
                        - Benjamin Franklin
                    </div>
                    <div className = "section-2-about">
                        LearnBowl is an Ed-tech company, driven by the incentive to expedite the 
                        learning process in a holistic, student-friendly environment. With our 
                        primary focus being on extra-curricular learning, we believe in enriching 
                        our students’ academic persona. To accomplish this, we have a seasoned 
                        faculty on board.
                        With the teaching of the French language being the first of our many 
                        initiatives, come join us on a journey to accomplish the ‘out of the ordinary
                    </div>
                    <button className = "section-2-about-btn">More About Us</button>
                </div>
                <div className = "section-2-img">
                    <img src = "/section3img.svg" className = "section-2-img"></img>
                </div>
            </div>
        </>

    )
}

export default Section2
