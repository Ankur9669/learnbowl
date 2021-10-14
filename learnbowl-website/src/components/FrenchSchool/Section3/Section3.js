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
        <div className = "frenchschool-section-3">
        {width < 1080 ? <p className = "frenchschool-section-3-section-1-mobile-heading">
                    What will you learn In Our <span style = {{color: "#2D3092"}}>3-Day</span> French Workshop?
                </p> : <></>}
            <div className = "frenchschool-section-3-section-1">
                <p className = "frenchschool-section-3-section-1-heading">
                    What will you learn In Our <span style = {{color: "#2D3092"}}>3-Day</span> French Workshop?
                </p>
                <p className = "frenchschool-section-3-section-1-info-1">More Than 270 Million People Speak French on Five Continents. Forbes reports French to be the language of the future, projecting it to be the “most spoken language by 2050”.
                </p>
                <p className = "frenchschool-section-3-section-1-info-2">Amazing, right? Join your peers from school and hop onto the French bandwagon! </p>
                <button className = "register-btn">Register For free</button>
            </div>
            <div className = "frenchschool-section-3-section-2">
                <div className = "points-container">
                    <div style = {{display:"flex"}}>
                        <div className = "point">
                            <img src = "/frenchschoolalphabeticon.svg" alt = "image" className = "point-image"></img>
                            <span className = "point-info">Alphabets</span>
                        </div>
                        <div className = "point">
                            <img src = "/frenchschoolnumbersicon.svg" alt = "image" className = "point-image"></img>
                            <span className = "point-info">Numbers</span>
                        </div>
                    </div>
                    <div style = {{display:"flex"}}>
                        <div className = "point">
                            <img src = "/frenchschoolgreetingsicon.svg" alt = "image" className = "point-image"></img>
                            <span className = "point-info">Greetings</span>
                        </div>
                        <div className = "point">
                            <img src = "/frenchschoolaccentsicon.svg" alt = "image" className = "point-image"></img>
                            <span className = "point-info">Accents</span>
                        </div>
                    </div>
                    
                    <div className = "point">
                        <img src = "/frenchschoolcommicon.svg" alt = "image" className = "point-image"></img>
                        <span className = "point-info">Communication</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3
