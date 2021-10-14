import React from 'react'
import "./hero.css";
function Hero() {
    return (
        <div className = "about-section-hero">
            <div className = "about-section-hero-section-1">
                <div className = "content">
                    <h1>About Us</h1>
                    <p>LearnBowl is an Ed-tech company, driven by the incentive to expedite the learning process in a holistic, student-friendly environment. With our primary focus being on extra-curricular learning, we believe in enriching our students’ academic persona. To accomplish this, we have a seasoned faculty on board.</p>
<p> With the teaching of the French language being the first of our many initiatives, come 
                        join us on a journey to accomplish the ‘out of the ordinary.
                    </p>
                    <p className = "about-section-hero-link" style = {{display: "inline"}}>Contact us</p> <span style = {{fontSize: "22px", fontWeight: "800"}}>&#8599;</span>
                </div>
                
            </div>
            <div className = "about-section-hero-section-2">
                <img src = "/about-section-img-1.jpg" alt = "image" className = "about-section-hero-section-2-img"></img>
            </div>
        </div>
    )
}

export default Hero
