import React from 'react'
import "./section2.css";
import {useState, useRef, useEffect} from "react";
function Section2() 
{
    const iframeRef = useRef();
    const [isVideoClicked, setVideoClicked] = useState(false);

    useEffect(() => {
        //It will autoplay the iframe

        if(isVideoClicked === true)
        {
            iframeRef.current.src = iframeRef.current.src + "?autoplay=1&mute=0";
        }
    }, [isVideoClicked])
    
    return (
        <div className = "french-section-2">
            <h3 className = "french-section-2-heading">A  <span style = {{color: "#2D3092"}}>Glimpse</span> of our French Workshop</h3>
            <div className = "french-section-2-video-container"  onClick = {() => setVideoClicked(true)}>
                <iframe style = {isVideoClicked ? {} : {display: "none"}} className="french-video-frame" src="https://www.youtube.com/embed/KqxwvWdNbSY" 
                       title="YouTube video player" frameborder="0" 
                       allow="accelerometer; autoplay; clipboard-write; 
                       encrypted-media; gyroscope; picture-in-picture" ref = {iframeRef}
                       allowfullscreen></iframe>

                <img style = {isVideoClicked ? {display: "none"} : {}} src = "/frenchVideoThumbnail1.svg" className = "french-video-frame-thumbnail"></img>
                {/* <object onClick = {() => console.log("haha") } style = {isVideoClicked ? {display: "none"} : {}} data = "/french-video-thumbnail.svg" type="image/svg+xml" className = "french-video-frame-thumbnail"></object> */}
            </div>
        </div>
    )
}

export default Section2
