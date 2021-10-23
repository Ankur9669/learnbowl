import React from 'react'
import "./section2.css"
import {useState, useEffect} from "react";
function Section2(prop)
{
    const scrollToCardSection = prop.scrollToCardSection;

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
        <div className = "home-section-2">
            {width < 1080 ? <p className = "home-section-2-section-1-mobile-heading">
                    What will you learn In Our <span style = {{color: "#2D3092"}}>3-Day</span> French Workshop?
                </p> : <></>}
            <div className = "home-section-2-section-1">
                <p className = "home-section-2-section-1-heading">
                    What will you learn In Our <span style = {{color: "#2D3092"}}>3-Day</span> French Workshop?
                </p>
                <p className = "home-section-2-section-1-info-1">More Than 270 Million People Speak French on Five Continents. Forbes reports French to be the language of the future, projecting it to be the “most spoken language by 2050”.
                </p>
                <p className = "home-section-2-section-1-info-2">Amazing, right? Join your peers from school and hop onto the French bandwagon! </p>
                <button className = "register-btn" onClick = {scrollToCardSection()}>Explore Courses <span style = {{paddingLeft: "3px"}}><img src = "/rightArrow.svg" alt = "arrow" className = "rightArrow"></img></span></button>
            </div>

            <div className = "home-section-2-section-2">
                <img src = "hero-section-2-section-2-img.svg" alt = "image" className = "home-section-2section-2-img"></img>
            </div>
        </div>
    )
}

export default Section2
