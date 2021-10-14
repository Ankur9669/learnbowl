import React from 'react';
import "./section5.css";
function Section5() {
    return (
        <div className = "about-section-5">
            <h3 className = "about-section-5-heading">Explore us on our Socials!</h3>
            <img src = "about-section-orange-ellipse.svg" alt = "image" className = "about-section-5-yellow-ellipse"/>
            <img src = "contact-blue-ellipse.svg" alt = "image" className = "about-section-5-blue-ellipse"/>
            <div className = "about-section-5-points-container">
                <div className = "about-section-5-point-container">
                    <img src = "/about-section-4-section-5-fb.svg" alt = "image"></img>
                </div>
                
                <div className = "about-section-5-point-container">
                    <img src = "/about-section-4-section-5-insta.svg" alt = "image"></img>
                </div>

                <div className = "about-section-5-point-container">
                    <img src = "/about-section-4-section-5-linkedin.svg" alt = "image"></img>
                </div>

                <div className = "about-section-5-point-container">
                    <img src = "/about-section-4-section-5-linkedin.svg" alt = "image"></img>
                </div>
            </div>
        </div>
    )
}

export default Section5
