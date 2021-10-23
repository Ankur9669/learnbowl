import React from 'react'
import "./section3.css";
function Section3() {
    return (
        <div className = "about-section-3">
            <img src = "/about-section-orange-ellipse.svg" alt = "image" className = "about-section-orange-ellipse"/>
            <img src = "/about-section-blue-ellipse.svg" alt = "image" className = "about-section-blue-ellipse"/>
            <div className = "about-section-3-section-1">
            <h3>Our Vision</h3>
                <p>
                All students are empowered to learn and we at Learnbowl 
                intend to propagate <span style = {{fontWeight: "600"}}> reliable, affordable, and worldly knowledge to all. </span> 
                </p>
            </div>
            <div className = "about-section-3-section-2">
                {/* <img src = "/about-section-3-panda.svg" alt = "image" className = "about-section-3-panda"></img> */}
                <object data="/about-section-3-panda.svg" type="image/svg+xml" class="about-section-3-panda"></object>
                <img src = "./about-section-img-3.svg" alt = "image" className = "about-section3-img"></img>
            </div>
        </div>
    )
}

export default Section3
