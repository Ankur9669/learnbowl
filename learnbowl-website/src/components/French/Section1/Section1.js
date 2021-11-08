import React from 'react'
import "./section1.css";
import {useState, useEffect} from "react";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
function Section1() 
{
    defineLordIconElement(loadAnimation);
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
        <div className = "french-section-1">
            <img src = "french-bonjour.svg" alt = "image" className = "french-bonjour-img"></img>
            <h3 className = "french-section-1-heading">Why <span style = {{color: "#2D3092"}}>Learn</span> French?</h3>
            {width > 768 ? 
            <div className = "french-section-1-cards">
                <div className = "french-section-1-card">
                    <img src = "/french-section-1-icon-1.png" alt = "icon1" className = "french-section-1-icon"></img>
                    <h4 className = "french-section-1-card-text">Boosts <br/><span style = {{color: "#2D3092"}}>Confidence</span></h4>
                </div>
                <div className = "french-section-1-card">
                    {/* <img src = "/brainIcon.svg" className = "french-section-1-card-img"></img> */}
                    <img src = "/french-section-1-icon-2.png" alt = "icon1" className = "french-section-1-icon"></img>
                    <h4 className = "french-section-1-card-text">Facilitates overall  <br/><span style = {{color: "#2D3092"}}>Personality Development</span></h4>
                </div>
                <div className = "french-section-1-card">
                    {/* <img src = "/brainIcon.svg" className = "french-section-1-card-img"></img> */}
                    <img src = "/french-section-1-icon-3.png" alt = "icon1" className = "french-section-1-icon"></img>
                    <h4 className = "french-section-1-card-text">Enhances  <br/><span style = {{color: "#2D3092"}}>creative thinking</span></h4>
                </div>
                <div className = "french-section-1-card">
                    {/* <img src = "/brainIcon.svg" className = "french-section-1-card-img"></img> */}
                    <img src = "/french-section-1-icon-4.png" alt = "icon1" className = "french-section-1-icon"></img>
                    <h4 className = "french-section-1-card-text">Harnesses  <br/><span style = {{color: "#2D3092"}}>decision making</span></h4>
                </div>
                <div className = "french-section-1-card">
                    {/* <img src = "/brainIcon.svg" className = "french-section-1-card-img"></img> */}
                    <img src = "/french-section-1-icon-5.png" alt = "icon1" className = "french-section-1-icon"></img>
                    <h4 className = "french-section-1-card-text">Develops <br/><span style = {{color: "#2D3092"}}>networking skills </span></h4>
                </div>
            </div> 
            : 
            <>
                <div className = "french-section-1-cards-mobile">
                    <div>
                        <div className = "french-section-1-card-mobile">
                        <img src = "/french-section-1-icon-1.png" alt = "icon1" className = "french-section-1-icon-mobile"></img>
                            <h4 className = "french-section-1-card-text-mobile">Boosts <br/><span style = {{color: "#2D3092"}}>Confidence</span></h4>
                        </div>
                        <div className = "french-section-1-card-mobile">
                        <img src = "/french-section-1-icon-2.png" alt = "icon1" className = "french-section-1-icon-mobile"></img>
                            <h4 className = "french-section-1-card-text-mobile">Facilitates Personality <br/><span style = {{color: "#2D3092"}}>Development</span></h4>
                        </div>
                    </div>
                    <div>
                        <div className = "french-section-1-card-mobile">
                        <img src = "/french-section-1-icon-3.png" alt = "icon1" className = "french-section-1-icon-mobile"></img>
                            <h4 className = "french-section-1-card-text-mobile">Enhances <br/><span style = {{color: "#2D3092"}}>creative thinking</span></h4>
                        </div>
                        <div className = "french-section-1-card-mobile">
                        <img src = "/french-section-1-icon-4.png" alt = "icon1" className = "french-section-1-icon-mobile"></img>
                            <h4 className = "french-section-1-card-text-mobile">Harnesses <br/><span style = {{color: "#2D3092"}}>decision making</span></h4>
                        </div>
                    </div>
                </div>
                <div className = "french-section-1-card-mobile-row-3">
                <img src = "/french-section-1-icon-5.png" alt = "icon1" className = "french-section-1-icon-mobile"></img>
                    <h4 className = "french-section-1-card-text-mobile">Develops <br/><span style = {{color: "#2D3092"}}>networking skills</span></h4>
                </div>
            </>
       }
        </div>
    )
}

export default Section1
