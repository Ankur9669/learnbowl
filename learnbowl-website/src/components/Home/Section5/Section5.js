import React from 'react'
import "./section5.css";
function Section5(prop) 
{
    const scrollToCardSection = prop.scrollToCardSection;
    return (
        <div className = "home-section-5">
            <img src = "home-section-5-quote-start.svg" alt = "image" className = "home-section-5-quote-start"></img>
            <h3 className = "home-section-5-heading">What Role Models Say</h3>
            <div className = "home-section-5-content">
                <div className = "home-section-5-content-section-1">
                    <p className = "home-section-5-content-section-1-txt">
                        <img src = "/quote-start-white.svg" alt = "image" className = "quote-start-white"></img>
                        An investment in knowledge pays the best interest.
                        <img src = "/quote-end-white.svg" alt = "image" className = "quote-end-white"></img>
                        
                    </p>
                    <p className = "home-section-5-content-section-1-name">- Barack Obama</p>
                    <button className = "home-section-5-content-section-1-btn" onClick = {scrollToCardSection()}>Browse Courses <span style = {{fontWeight: "600", fontSize: "25px"}}>&#8594;</span></button>
                </div>
                <div className = "home-section-5-content-section-2">
                    <img src = "/home-section-5-img.svg" alt = "image" className = "home-section-5-img"></img>
                </div>
            </div>
        </div>
    )
}

export default Section5
