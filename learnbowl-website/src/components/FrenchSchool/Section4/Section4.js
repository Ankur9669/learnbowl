import React from 'react';
import "./section4.css";
import {useState, useEffect} from "react";
function Section4() {
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
        <div className = "frenchschool-section-4">
            <img src = "/frenchpageWave.svg" alt = "wave" className = "wave1"/>
             <img src = "/frenchpageWave.svg" alt = "wave" className = "wave2"/>
             <img src = "/frenchpageWave.svg" alt = "wave" className = "wave3"/>
             <img src = "/frenchpageWave.svg" alt = "wave" className = "wave4"/>
            <h4 className = "frenchschool-section-4-heading">Why choose <span style = {{color: "#2D4092"}}>Us?</span></h4>
            <div className = "frenchschool-section-4-section-1">
                <div className = "frenchschool-section-4-points">
                    <div>
                        <div className = "frenchschool-section-4-point" style = {{borderLeft: "4px solid #FFB400"}}>    
                            <p className = "frenchschool-section-4-point-info-1">200+</p>
                            <p className = "frenchschool-section-4-point-info-2">Happy Students</p>
                        </div>
                        <div className = "frenchschool-section-4-point" style = {{borderLeft: "4px solid #D65555", marginTop : width > 768 ? "90px" : "0px"}}>    
                            <p className = "frenchschool-section-4-point-info-1">100+</p>
                            <p className = "frenchschool-section-4-point-info-2">Topics</p>
                        </div>
                    </div>
                    <div>
                        <div className = "frenchschool-section-4-point" style = {{borderLeft: "4px solid #49A0A9"}}>    
                            <p className = "frenchschool-section-4-point-info-1">4000+</p>
                            <p className = "frenchschool-section-4-point-info-2">Teaching Hours</p>
                        </div>
                        <div className = "frenchschool-section-4-point" style = {{borderLeft: "4px solid #56A219", marginTop : width > 768 ? "90px" : "0px"}}>    
                            <p className = "frenchschool-section-4-point-info-1">4.5 <img alt = "image" src = "filledStar.svg"></img></p>
                            <p className = "frenchschool-section-4-point-info-2">User Rating</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "frenchschool-section-4-section-2">
                <img src = "/frenchSection3Grp.svg" alt = "img" className = "frenchschool-section-4-section-2-img"></img>
            </div>
        </div>
    )
}

export default Section4
