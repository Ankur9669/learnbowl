import React from 'react';
import "./section3.css";
import {useState, useEffect} from "react";
function Section3() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => 
    {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])
    function handleResize()
    {
        setWidth(window.innerWidth);
    }
    return (
        <div className = "french-section-3">
            <img src = "/frenchpageWave.svg" alt = "wave" className = "wave1"/>
             <img src = "/frenchpageWave.svg" alt = "wave" className = "wave2"/>
             <img src = "/frenchpageWave.svg" alt = "wave" className = "wave3"/>
             <img src = "/frenchpageWave.svg" alt = "wave" className = "wave4"/>
            <h3 className = "french-section-3-heading">Why choose <span style = {{color: "#2D3092"}}>Us?</span></h3>
            <div className = "french-section-3-section-1">
                <div className = "french-section-3-points">
                    <div>
                        <div className = "french-section-3-point" style = {{borderLeft: "4px solid #FFB300"}}>    
                            <p className = "french-section-3-point-info-1">200+</p>
                            <p className = "french-section-3-point-info-2">Happy Students</p>
                        </div>
                        <div className = "french-section-3-point" style = {{borderLeft: "4px solid #D65555", marginTop : width > 768 ? "90px" : "0px"}}>    
                            <p className = "french-section-3-point-info-1">3000+</p>
                            <p className = "french-section-3-point-info-2">Teaching Hours</p>
                        </div>
                    </div>
                    <div>
                        <div className = "french-section-3-point" style = {{borderLeft: "4px solid #49A0A9"}}>    
                            <p className = "french-section-3-point-info-1">100+</p>
                            <p className = "french-section-3-point-info-2">Topics</p>
                        </div>
                        <div className = "french-section-3-point" style = {{borderLeft: "4px solid #56A219", marginTop : width > 768 ? "90px" : "0px"}}>    
                            <p className = "french-section-3-point-info-1">4.5 <img alt = "image" src = "filledStar.svg"></img></p>
                            <p className = "french-section-3-point-info-2">User Rating</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "french-section-3-section-2">
                <img src = "/frenchSection3Grp.svg" alt = "img" className = "french-section-3-section-2-img"></img>
                {/* <div className = "french-section-3-section-2-content">
                    <img src = "/frenchSection-3.svg" className = "french-section-3-section-2-img-1" alt = "img"></img>
                    <img src = "/frenchLine.svg" className = "french-section-3-section-2-img-2" alt = "img"></img>
                    <img src = "/frenchPageQuote.svg" className = "french-section-3-section-2-img-3" alt = "img"></img>
                    <img src = "/learnBowlTeam.svg" className = "french-section-3-section-2-img-4" alt = "img"></img>
                </div> */}
            </div>
        </div>
    )
}

export default Section3
