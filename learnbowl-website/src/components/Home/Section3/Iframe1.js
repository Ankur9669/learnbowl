import React from 'react'

function Iframe1(prop) {
    const isClickedImage1 = prop.isClickedImage1;
    return (
        <iframe loading = "lazy" style = {isClickedImage1 ? {} : {display: "none"}} className="home-section-i-frame" src="https://www.youtube.com/embed/2aWJuS1HEKs?autoplay=1&mute=1" 
                        title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay=true; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
        </iframe>
    )
}

export default Iframe1
