import React from 'react'
import "./hero.css";
import {useHistory} from "react-router-dom";
function Hero() 
{
    const history = useHistory();
    function handleClick()
    {
        history.push("/contact");
    }
    return (
        <div className = "about-section-hero">
            <div className = "about-section-hero-section-1">
                <img src = "/about-section-hero-background-mobile.svg" alt ="image2" className = "about-section-hero-background1-mobile"></img>
                <img src = "/about-section-hero-light-blue-bg.svg" alt ="image2" className = "about-section-hero-light-blue"></img>    
                {/* <img src = "/about-section-hero-dark-blue-bg.svg" alt ="image1" className = "about-section-hero-dark-blue"></img> */}
                <object data = "/about-section-hero-dark-blue-bg.svg" type="image/svg+xml" className = "about-section-hero-dark-blue"></object>
        
                <div className = "content">
                    <h1>About Us</h1>
                    <p>LearnBowl is an Ed-tech company, driven by the incentive to expedite the learning process in a holistic, student-friendly environment. With our primary focus being on extra-curricular learning, we believe in enriching our students’ academic persona. To accomplish this, we have a seasoned faculty on board.</p>
                    <p> With the teaching of the French language being the first of our many initiatives, come 
                        join us on a journey to accomplish the ‘out of the ordinary.
                    </p>
                    <p className = "about-section-hero-link" style = {{display: "inline"}} onClick = {() => handleClick()}>Contact us</p> <span style = {{fontSize: "22px", fontWeight: "800"}}>&#8599;</span>
                </div>        
            </div>
            <div className = "about-section-hero-section-2">
                <img src = "/about-section-hero-img.jpg" alt = "image" className = "about-section-hero-section-2-img"></img>
            </div>
        </div>
    )
}

export default Hero
