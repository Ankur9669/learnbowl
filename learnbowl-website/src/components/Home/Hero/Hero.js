import React from 'react'
import "./hero.css";
import {useState, useEffect} from "react";
function Hero() 
{
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => 
    {
        window.addEventListener("resize", handleResize);
    }, [])

    function handleResize()
    {
        setWidth(window.innerWidth);
    }
    return (
        <div className = "hero">
            <img src = "/dots.svg" alt = "image" className = "dots"/>
             <img src = "/wave.svg" alt = "wave" className = "wave1"/>
             <img src = "/wave.svg" alt = "wave" className = "wave2"/>
             <img src = "/wave.svg" alt = "wave" className = "wave3"/>
             <img src = "/wave.svg" alt = "wave" className = "wave4"/>

            <div className = "hero-section-1">
                <p className = "hero-section-1-info-1"><img src = "/book.svg" alt = "book" style = {{marginRight:"10px"}}></img>Best way to learn from anywhere</p>
                <h1 className = "hero-section-1-heading">The heaven for <img src = "/holisticText.svg" alt = "holistic"/> Learning</h1>
                <p className = "hero-section-1-info-2">Learn your desired language in the 
                most fun way! From anywhere, anytime!
                </p>
                {width > 1132 ? <button className = "hero-section-1-btn">Get Started <span style = {{paddingLeft: "5px"}}><img src = "/downArrow.svg" alt = "arrow" width = "12px"></img></span></button>: <></>}
            </div>
            <div className = "hero-section-2">
                <img src = "/homepage-img.svg" alt = "" style = {{zIndex: "1000"}}></img>
            </div>
            
            <div className = "hero-section-3">
                <div className = "mobile-section">
                    <div className = "hero-section-3-content">
                        <div className = "hero-section-3-content-number" style = {{borderBottom: "3px solid #FFB300"}}>
                            01
                        </div>
                        <div className = "hero-section-3-content-text">
                            250+
                            <br/>
                            Happy Students
                        </div>
                    </div>
                    <div className = "hero-section-3-content">
                        <div className = "hero-section-3-content-number" style = {{borderBottom: "3px solid #D65555"}}>
                            02
                        </div>
                        <div className = "hero-section-3-content-text">
                            100+
                            <br/>
                            Topics
                        </div>
                    </div>
                </div>

                <div className = "mobile-section">    
                    <div className = "hero-section-3-content">
                        <div className = "hero-section-3-content-number" style = {{borderBottom: "3px solid #4980A9"}}>
                            03
                        </div>
                        <div className = "hero-section-3-content-text">
                            3000+
                            <br/>
                            Teaching Hours
                        </div>
                    </div>
                    <div className = "hero-section-3-content">
                        <div className = "hero-section-3-content-number" style = {{borderBottom: "3px solid #56A219"}}>
                            04
                        </div>
                        <div className = "hero-section-3-content-text">
                            4.5+
                            <br/>
                            User Rating
                        </div>
                    </div>
                </div>   
            </div>
            {width < 1132 ? <button className = "hero-section-1-btn">Get Started <span style = {{paddingLeft: "5px"}}><img src = "/downArrow.svg" alt = "arrow" width = "12px"></img></span></button>: <></>}
        </div>
    )
}

export default Hero
