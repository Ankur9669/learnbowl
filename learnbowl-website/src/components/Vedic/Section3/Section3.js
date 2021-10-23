import React from 'react'
import "./section3.css";
import {useState, lazy, Suspense} from "react";
function Section3() {
    const [isVideoClicked, setVideoClicked] = useState(false);

    const Iframe = lazy(() => import("./Iframe"));
    
    return (
        
            <div className = "vedic-section-3">
            <h3 className = "vedic-section-3-heading">A  <span style = {{color: "#2D3092"}}>Glimpse</span> of our Vedic Maths Workshop</h3>
            <div className = "vedic-section-3-video-container" onClick = {() => setVideoClicked(true)}>
                {/* Lazy Loading Iframe */}
                <Suspense fallback = {<div></div>}>
                    <Iframe isVideoClicked = {isVideoClicked}/>
                </Suspense>
                        
                {/* <img style = {isVideoClicked ? {display: "none"} : {}} src = "/vedicVideoThumbnail.svg" className = "vedic-video-frame-thumbnail"></img> */}
                
                    <object style = {isVideoClicked ? {display: "none"} : {}} data = "/vedicVideoThumbnail.svg" type="image/svg+xml" className = "vedic-video-frame-thumbnail" onClick = {() => console.log("object")}>
                    </object>
                
            </div>
        </div>
       
        
    )
}

export default Section3
