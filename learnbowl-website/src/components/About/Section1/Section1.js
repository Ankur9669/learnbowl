import React from 'react'
import "./section1.css";
function Section1() {
    return (
        <div className = "about-section-1">
            <div className = "about-section-1-points-container">
                <div className = "about-section-1-points-mobile-section">
                    <div className = "about-section-1-point-container">
                        <img src = "/about-section-1-icon-1.svg" alt = "image-icon-3" className = "about-section-1-point-img"></img>
                        <h3 className = "about-section-1-point-heading">200+</h3>
                        <p className = "about-section-1-point-sub-heading">Happy Students</p>
                    </div>

                    <div className = "about-section-1-point-container">
                        <img src = "/about-section-1-icon-2.svg" alt = "image-icon-3" className = "about-section-1-point-img"></img>
                        <h3 className = "about-section-1-point-heading">100+</h3>
                        <p className = "about-section-1-point-sub-heading">Topics</p>
                    </div>
                </div>
                <div className = "about-section-1-points-mobile-section">
                    <div className = "about-section-1-point-container">
                        <img src = "/about-section-1-icon-3-1.svg" alt = "image-icon-3" className = "about-section-1-point-img"></img>
                        <h3 className = "about-section-1-point-heading">3000+</h3>
                        <p className = "about-section-1-point-sub-heading">Teaching Hours</p>
                    </div>

                    <div className = "about-section-1-point-container">
                        <img src = "/about-section-1-icon-4.svg" alt = "image-icon-3" className = "about-section-1-point-img"></img>
                        <h3 className = "about-section-1-point-heading">4.5</h3>
                        <p className = "about-section-1-point-sub-heading">User Rating</p>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Section1
