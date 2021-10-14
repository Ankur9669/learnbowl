import React from 'react'
import "./section3.css";
import {useState} from "react";
function Section3() {
    const [isVideoClicked, setVideoClicked] = useState(false);
    return (
        <div className = "vedic-section-3">
            <h3 className = "vedic-section-3-heading">A  <span style = {{color: "#2D3092"}}>Glimpse</span> of our Vedic Maths Workshop</h3>
            <div className = "vedic-section-3-video-container" onClick = {() => setVideoClicked(true)}>
                {isVideoClicked ? 
                       <iframe className="vedic-video-frame" src="https://www.youtube.com/embed/2aWJuS1HEKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=true; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                : 
                
                <img src = "/vedicVideoThumbnail.jpeg" className = "vedic-video-frame-thumbnail"></img>
                
                }
            </div>
        </div>
    )
}

export default Section3
