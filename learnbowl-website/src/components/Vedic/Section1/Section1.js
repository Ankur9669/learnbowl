import React from 'react';
import "./section1.css";
import {useState, useEffect} from "react";
function Section1() {

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
        <div className = "vedic-section-1">
            <object data = "vedicSection-1-img.svg" type = "image/svg+xml" alt = "image" className = "vedic-section-1-illustration"></object>
            <h3 className = "vedic-section-1-heading">Why  <span style = {{color: "#2D3092"}}>Learn</span> Vedic Maths?</h3>
            <h4 className = "vedic-section-1-sub-heading">The What and Why of Vedic maths</h4>

            <div className = "vedic-section-1-icons-container">
                <div className = "vedic-section-1-icons-container-row-1">
                    <div className = "vedic-section-1-icon">
                        <div className = "vedic-section-1-icon-container">
                            <img src = "vedic-section-1-icon-1.svg" alt = "image" className = "vedic-section-1-icon-img"></img>
                        </div>
                        {width < 768 && <p className = "vedic-section-1-icon-txt">Fast <br/><span style = {{color: "#2d3092"}}>and Fun</span></p>}
                        {width > 768 && <p className = "vedic-section-1-icon-txt">Fast <br/><span style = {{color: "#2d3092"}}>and Fun</span></p>}
                    </div>  

                    <div className = "vedic-section-1-icon">
                        <div className = "vedic-section-1-icon-container">
                            <img src = "vedic-section-1-icon-2.svg" alt = "image" className = "vedic-section-1-icon-img"></img>
                        </div>
                        
                        {width < 768 && <p className = "vedic-section-1-icon-txt">Sharpens <br/><span style = {{color: "#2d3092"}}>your mind</span></p>}
                        {width > 768 && <p className = "vedic-section-1-icon-txt">Sharpens <br/><span style = {{color: "#2d3092"}}>your mind</span></p>}
                    </div>

                    <div className = "vedic-section-1-icon">
                        <div className = "vedic-section-1-icon-container">
                            <img src = "vedic-section-1-icon-3-test.svg" alt = "image" className = "vedic-section-1-icon-img"></img>
                        </div>
                        
                        {width < 768 && <p className = "vedic-section-1-icon-txt">Boosts <br/><span style = {{color: "#2d3092"}}>Confidence</span></p>}
                        {width > 768 && <p className = "vedic-section-1-icon-txt">Boosts <br/><span style = {{color: "#2d3092"}}>Confidence</span></p>}
                    </div>

                    <div className = "vedic-section-1-icon">
                        <div className = "vedic-section-1-icon-container">
                            <img src = "vedic-section-1-icon-4.svg" alt = "image" className = "vedic-section-1-icon-img"></img>
                        </div>
                        {width < 768 &&    <p className = "vedic-section-1-icon-txt">Reduces <br/><span style = {{color: "#2d3092"}}>silly errors</span></p>}
                        {width > 768 &&    <p className = "vedic-section-1-icon-txt">Reduces <br/><span style = {{color: "#2d3092"}}>silly calculation errors</span></p>}
                    </div>
                </div>
                <div className = "vedic-section-1-icons-container-row-2">
                    <div className = "vedic-section-1-icon">
                        <div className = "vedic-section-1-icon-container">
                            <img src = "vedic-section-1-icon-5.svg" alt = "image" className = "vedic-section-1-icon-img"></img>
                        </div>
                        {width < 768 &&    <p className = "vedic-section-1-icon-txt">Speed <br/><span style = {{color: "#2d3092"}}>calculation</span></p>}
                        {width > 768 &&    <p className = "vedic-section-1-icon-txt">Speed <br/><span style = {{color: "#2d3092"}}>calculation techniques</span></p>}
                    </div>  

                    <div className = "vedic-section-1-icon">
                        <div className = "vedic-section-1-icon-container">
                            <img src = "vedic-section-1-icon-6.svg" alt = "image" className = "vedic-section-1-icon-img"></img>
                        </div>
                        
                        {width < 768 && <p className = "vedic-section-1-icon-txt">Designed for<br/><span style = {{color: "#2d3092"}}>mental agility</span></p>}
                        {width > 768 && <p className = "vedic-section-1-icon-txt">Designed to make<br/><span style = {{color: "#2d3092"}}>you mentally agile</span></p>}
                    </div>

                    <div className = "vedic-section-1-icon">
                        <div className = "vedic-section-1-icon-container">
                            <img src = "vedic-section-1-icon-7.svg" alt = "image" className = "vedic-section-1-icon-img"></img>
                        </div>
                        
                        {width < 768 && <p className = "vedic-section-1-icon-txt">Easy <br/><span style = {{color: "#2d3092"}}>mental tricks</span></p>}
                        {width > 768 && <p className = "vedic-section-1-icon-txt">Easy mental tricks<br/><span style = {{color: "#2d3092"}}>for all applications</span></p>}
                    </div>

                    <div className = "vedic-section-1-icon">
                        <div className = "vedic-section-1-icon-container">
                            <img src = "vedic-section-1-icon-8.svg" alt = "image" className = "vedic-section-1-icon-img"></img>
                        </div>
                        {width < 768 && <p className = "vedic-section-1-icon-txt">Refined <br/><span style = {{color: "#2d3092"}}>maths system</span></p>}
                        {width > 768 && <p className = "vedic-section-1-icon-txt">One of the most <br/><span style = {{color: "#2d3092"}}> refined math systems</span></p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
