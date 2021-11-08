import React from 'react'
import {useEffect, useState, useRef} from "react";
function Iframe(prop) 
{
    const iframeRef = useRef();
    const isVideoClicked = prop.isVideoClicked;
    useEffect(() => {
        //It will autoplay the iframe
        if(isVideoClicked === true)
        {
            iframeRef.current.src = iframeRef.current.src + "?autoplay=1&mute=0";
        } 
    }, [isVideoClicked])

        
    return (
        <iframe loading = "lazy" style = {isVideoClicked ? {} : {display: "none"}} className="vedic-video-frame" src="https://www.youtube.com/embed/gYZEo7tp6ts" 
            title="YouTube video player" frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" ref = {iframeRef}
            allowFullScreen>
        </iframe>
    )
}

export default Iframe
