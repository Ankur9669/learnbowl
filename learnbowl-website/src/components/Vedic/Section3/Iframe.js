import React from 'react'
import {useEffect} from "react";
function Iframe(prop) 
{
    useEffect(() => {
        console.log("IFrame Loaded");
    }, [])
    const isVideoClicked = prop.isVideoClicked;
    return (
        <iframe loading = "lazy" style = {isVideoClicked ? {} : {display: "none"}} className="vedic-video-frame" src="https://www.youtube.com/embed/2aWJuS1HEKs?autoplay=1&mute=1" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay=true; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    )
}

export default Iframe
