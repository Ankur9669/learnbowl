import React from 'react'
import "./section2.css";
import {useState} from "react";
function Section2() 
{
    const [isVideoClicked, setVideoClicked] = useState(false);
    return (
        <div className = "frenchschool-section-2">
            <h3 className = "frenchschool-section-2-heading">A  <span style = {{color: "#2D3092"}}>Glimpse</span> of our frenchschool Workshop</h3>
            <div className = "frenchschool-section-2-video-container"  onClick = {() => setVideoClicked(true)}>
                <iframe style = {isVideoClicked ? {} : {display: "none"}} className="frenchschool-video-frame" src="https://www.youtube.com/embed/2aWJuS1HEKs?autoplay=1&mute=1" 
                       title="YouTube video player" frameborder="0" 
                       allow="accelerometer; autoplay=true; clipboard-write; 
                       encrypted-media; gyroscope; picture-in-picture" 
                       allowfullscreen></iframe>

                <img style = {isVideoClicked ? {display: "none"} : {}} src = "/frenchVideoThumbnail1.svg" className = "frenchschool-video-frame-thumbnail"></img>
            </div>
        </div>
    )
}

export default Section2
