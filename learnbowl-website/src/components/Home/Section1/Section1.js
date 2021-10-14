import React from 'react'
import "./section1.css"
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
function Section1() 
{
    defineLordIconElement(loadAnimation);
    return (
        <div className = "home-section-1">
            <h3 className = "home-section-1-heading">Working Process and Benefits</h3>
            <img src = "home-section-1-flowimg.svg" alt = "image" className = "home-section-1-flowimg"></img>
            <img src = "home-section-1-mobile-flowimg.svg" alt = "image" className = "home-section-1-moblie-flowimg"></img>
            <div className = "home-section-1-points-container">
                <div className = "home-section-1-point">
                    <lord-icon trigger="hover" src="lottie.json"  style={{width:"50px",height:"50px", backgroundColor: "white", borderRadius: "30px", cursor: "pointer"}}></lord-icon>
                    <p className = "home-section-1-point-txt">Find Course</p>
                </div>
                <div className = "home-section-1-point">
                    <lord-icon trigger="hover" src="lottie.json"  style={{width:"50px",height:"50px", backgroundColor: "white", borderRadius: "30px",cursor: "pointer"}}></lord-icon>
                    <p className = "home-section-1-point-txt">Register for Workshop</p>
                </div>
                <div className = "home-section-1-point">
                    <lord-icon trigger="hover" src="lottie.json"  style={{width:"50px",height:"50px", backgroundColor: "white", borderRadius: "30px",cursor: "pointer"}}></lord-icon>
                    <p className = "home-section-1-point-txt">Get Certified</p>
                </div>
            </div>
        </div>
    )
}

export default Section1
