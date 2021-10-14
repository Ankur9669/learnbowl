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
                    <lord-icon trigger="hover" src="lottie.json"  style={{width:"100px",height:"100px"}}></lord-icon>
                    <h4 className = "french-section-1-card-text">Facilitates overall  <br/><span style = {{color: "#2D3092"}}>Personality Development</span></h4>
                </div>
                <div className = "french-section-1-card">
                    {/* <img src = "/brainIcon.svg" className = "french-section-1-card-img"></img> */}
                    <lord-icon trigger="hover" src="lottie.json"  style={{width:"100px",height:"100px"}}></lord-icon>
                    <h4 className = "french-section-1-card-text">Facilitates overall  <br/><span style = {{color: "#2D3092"}}>Personality Development</span></h4>
                </div>
                <div className = "french-section-1-card">
                    {/* <img src = "/brainIcon.svg" className = "french-section-1-card-img"></img> */}
                    <lord-icon trigger="hover" src="lottie.json"  style={{width:"100px",height:"100px"}}></lord-icon>
                    <h4 className = "french-section-1-card-text">Facilitates overall  <br/><span style = {{color: "#2D3092"}}>Personality Development</span></h4>
                </div>
                <div className = "french-section-1-card">
                    {/* <img src = "/brainIcon.svg" className = "french-section-1-card-img"></img> */}
                    <lord-icon trigger="hover" src="lottie.json"  style={{width:"100px",height:"100px"}}></lord-icon>
                    <h4 className = "french-section-1-card-text">Facilitates overall  <br/><span style = {{color: "#2D3092"}}>Personality Development</span></h4>
                </div>
                <div className = "french-section-1-card">
                    {/* <img src = "/brainIcon.svg" className = "french-section-1-card-img"></img> */}
                    <lord-icon trigger="hover" src="lottie.json"  style={{width:"100px",height:"100px"}}></lord-icon>
                    <h4 className = "french-section-1-card-text">Boosts <br/><span style = {{color: "#2D3092"}}>Brainpower</span></h4>
                </div>
            </div> 
            : 
            <>
                <div className = "french-section-1-cards-mobile">
                    <div>
                        <div className = "french-section-1-card-mobile">
                            <lord-icon trigger="hover" src="lottie.json" style={{width:"35px",height:"35px"}}></lord-icon>
                            <h4 className = "french-section-1-card-text-mobile">Enhances decision- <br/><span style = {{color: "#2D3092"}}>making</span></h4>
                        </div>
                        <div className = "french-section-1-card-mobile">
                            <lord-icon trigger="hover" src="lottie.json" style={{width:"35px",height:"35px"}}></lord-icon>
                            <h4 className = "french-section-1-card-text-mobile">Facilitates Personality <br/><span style = {{color: "#2D3092"}}>Development</span></h4>
                        </div>
                    </div>
                    <div>
                        <div className = "french-section-1-card-mobile">
                            <lord-icon trigger="hover" src="lottie.json" style={{width:"35px",height:"35px"}}></lord-icon>
                            <h4 className = "french-section-1-card-text-mobile">Increases education <br/><span style = {{color: "#2D3092"}}>Opportunity</span></h4>
                        </div>
                        <div className = "french-section-1-card-mobile">
                            <lord-icon trigger="hover" src="lottie.json" style={{width:"35px",height:"35px"}}></lord-icon>
                            <h4 className = "french-section-1-card-text-mobile">Improves networking <br/><span style = {{color: "#2D3092"}}>skills</span></h4>
                        </div>
                    </div>
                </div>
                <div className = "french-section-1-card-mobile-row-3">
                    <lord-icon trigger="hover" src="lottie.json" style={{width:"35px",height:"35px"}}></lord-icon>
                    <h4 className = "french-section-1-card-text-mobile">Increases focus <br/><span style = {{color: "#2D3092"}}>and concentration</span></h4>
                </div>
            </>
       }
        </div>
    )
}

export default Section1
