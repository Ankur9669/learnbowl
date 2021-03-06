import React from 'react'
import "./hero.css";
import {useState, useEffect} from "react";
import { AiOutlineArrowDown } from 'react-icons/ai'
function Hero(prop) 
{
    const [width, setWidth] = useState(window.innerWidth);
    const scrollToCardSection = prop.scrollToCardSection;
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
                {/* <h1 className = "hero-section-1-heading">The heaven for <img src = "/holisticText.svg" alt = "holistic"/> Learning</h1> */}
                <h1 className = "hero-section-1-heading">The heaven for&nbsp;
                        <div className = "frenchText">
                            Holistic
                            <div className = "circle-right-top"></div>
                            <div className = "circle-right-bottom"></div>
                            <div className = "circle-left-top"></div>
                            <div className = "circle-left-bottom"></div>
                        </div> 
                        &nbsp;Learning
                    </h1>
                <p className = "hero-section-1-info-2">Learn your desired language in the 
                most fun way! From anywhere, anytime!
                </p>
                {width > 1132 ? <button className = "hero-section-1-btn" onClick = {scrollToCardSection()}>Get Started <span className = "down-arrow"><AiOutlineArrowDown/></span></button>: <></>}
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
                        <div className = "hero-section-3-content-text" style = {{marginLeft: "23px"}}>
                            5000+
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
                            20000+
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
            {width < 1132 ? <button className = "hero-section-1-btn" onClick = {scrollToCardSection()}>Get Started <span className = "down-arrow"><AiOutlineArrowDown/></span></button>: <></>}
        </div>
    )
}

export default Hero
