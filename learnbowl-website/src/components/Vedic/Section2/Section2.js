import React from 'react'
import "./section2.css"
function Section2() {
    return (
        <div className = "vedic-section-2">
            <div className = "vedic-section-2-points-container">
                <div className = "vedic-section-2-points-mobile-section">
                    <div className = "vedic-section-2-point-container">
                        <img src = "/vedic-section-2-icon-1.svg" alt = "image-icon-3" className = "vedic-section-2-point-img"></img>
                        <h3 className = "vedic-section-2-point-heading">Global</h3>
                        <p className = "vedic-section-2-point-sub-heading">Education Standards</p>
                    </div>

                    <div className = "vedic-section-2-point-container">
                        <img src = "/vedic-section-2-icon-2.svg" alt = "image-icon-3" className = "vedic-section-2-point-img"></img>
                        <h3 className = "vedic-section-2-point-heading">Customized</h3>
                        <p className = "vedic-section-2-point-sub-heading">Interactive Teaching</p>
                    </div>
                </div>
                <div className = "vedic-section-2-points-mobile-section">
                    <div className = "vedic-section-2-point-container">
                        <img src = "/vedic-section-2-icon-3.svg" alt = "image-icon-3" className = "vedic-section-2-point-img"></img>
                        <h3 className = "vedic-section-2-point-heading">High-Speed</h3>
                        <p className = "vedic-section-2-point-sub-heading">Tricks</p>
                    </div>

                    <div className = "vedic-section-2-point-container">
                        <img src = "/vedic-section-2-icon-4.svg" alt = "image-icon-3" className = "vedic-section-2-point-img"></img>
                        <h3 className = "vedic-section-2-point-heading">Experienced</h3>
                        <p className = "vedic-section-2-point-sub-heading">Tutors</p>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Section2
