import React from 'react';
import "./section3.css";
import {useState} from "react";

import {lazy, Suspense} from "react"
function Section3() {
    const [isClickedImage1, setIsClickedImage1] = useState(false);
    const [isClickedImage2, setIsClickedImage2] = useState(false);
    const [isClickedImage3, setIsClickedImage3] = useState(false);

    const Iframe1 = lazy(() => import("./Iframe1"));
    const Iframe2 = lazy(() => import("./Iframe2"));
    const Iframe3 = lazy(() => import("./Iframe3"));
    return (
        <div className = "home-section-3">
            <h3 className = "home-section-3-heading">We have the best <span style = {{color: "#2d3092"}}>Environment</span> to Learn and Grow</h3>
            <div className = "home-section-3-section-1">
                <div className = "home-section-3-section-1-img-container" onClick = {() => setIsClickedImage1(true)}>
                    <img src = "/home-section3-section1-test.svg" alt = "image" className = "home-section-3-section-1-img" style = {{display: isClickedImage1 ? "none" : "inherit"}}></img>
                    <div className = "background-after-img-section" style = {{display: isClickedImage1 ? "none" : "inherit"}}></div>
                    <Suspense fallback = {<div></div>}>
                        <Iframe1 isClickedImage1 = {isClickedImage1}/>
                    </Suspense> 
                </div>
                <div className = "home-section-3-section-1-txt-container">
                    <div className = "home-section-3-txt-container">
                        <p className = "home-section-3-txt-container-name">Amikesh Shrivastava</p>
                        <p className = "home-section-3-txt-container-std">Intermediate French, STD - 5</p>
                        <p className = "home-section-3-txt-container-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, scelerisque senectus metus, tincidunt ut ultrices faucibus ac. Non massa at fermentum congue risus</p>
                    </div>
                </div>
            </div>

            <div className = "home-section-3-section-2">
                <div className = "home-section-3-section-2-txt-container">
                    <div className = "home-section-3-txt-container">
                        <p className = "home-section-3-txt-container-name">Amikesh Shrivastava</p>
                        <p className = "home-section-3-txt-container-std">Intermediate French, STD - 5</p>
                        <p className = "home-section-3-txt-container-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, scelerisque senectus metus, tincidunt ut ultrices faucibus ac. Non massa at fermentum congue risus</p>
                    </div>
                </div>
                <div className = "home-section-3-section-2-img-container" onClick = {() => setIsClickedImage2(true)}>
                    <div className = "background-before-img-section" style = {{display: isClickedImage2 ? "none" : "inherit"}}></div>
                    <img src = "/home-section3-section1-test.svg" alt = "image" className = "home-section-3-section-2-img" style = {{display: isClickedImage2 ? "none" : "inherit"}}></img>
                    <Suspense fallback = {<div></div>}>
                        <Iframe2 isClickedImage2 = {isClickedImage2}/>
                    </Suspense>
                </div>
            </div>

            <div className = "home-section-3-section-3">
                <div className = "home-section-3-section-3-img-container" onClick = {() => setIsClickedImage3(true)}>
                    <img src = "/home-section3-section1-test.svg" alt = "image" className = "home-section-3-section-3-img" style = {{display: isClickedImage3 ? "none" : "inherit"}}></img>
                    <div className = "background-after-img-section" style = {{display: isClickedImage3 ? "none" : "inherit"}}></div>
                    <Suspense fallback = {<div></div>}>
                        <Iframe3 isClickedImage3 = {isClickedImage3}/>
                    </Suspense>
                </div>
                <div className = "home-section-3-section-3-txt-container">
                    <div className = "home-section-3-txt-container">
                        <p className = "home-section-3-txt-container-name">Amikesh Shrivastava</p>
                        <p className = "home-section-3-txt-container-std">Intermediate French, STD - 5</p>
                        <p className = "home-section-3-txt-container-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, scelerisque senectus metus, tincidunt ut ultrices faucibus ac. Non massa at fermentum congue risus</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3
