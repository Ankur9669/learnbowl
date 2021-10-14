import React from 'react'
import "./section6.css";
import {useRef} from "react";
import { RatingView } from 'react-simple-star-rating';
function Section6() {
    const scrollRef = useRef();
    function handleLeftClick()
    {
        scrollRef.current.scrollLeft -= 300;
       // console.log("left");
    }
    function handleRightClick()
    {
        scrollRef.current.scrollLeft += 300;
    }    
    return (
        <div className = "vedic-section-6">
            <h3 className = "vedic-section-6-heading">What our <span style = {{color: "#2D3092"}}>Students</span> Say</h3>
            <div className = "reviews" ref = {scrollRef}>
                <div className = "review-container">
                    <div className = "reviewer-rating">
                        <RatingView  ratingValue={5} size = "20px" fillColor = "#FFB300"/>
                    </div>
                    <div className = "reviewer-review">Eros nulla mollis nec tortor. Eu class ante accumsan habitant morbi neque hac purus magnis varius pulvinar hac pede magnis.</div>
                    <div className = "reviewer-info">
                        <img src = "/avatar.svg" alt = "asd" className = "reviewer-image"></img>
                        <div className = "reviewer-name-lvl">
                            <span className = "reviewer-name">Tina</span> 
                            <br/>
                            Intermidiate
                        </div>
                    </div>
                </div>

                <div className = "review-container">
                    <div className = "reviewer-rating">
                        <RatingView  ratingValue={5} size = "20px"/>
                    </div>
                    <div className = "reviewer-review">Eros nulla mollis nec tortor. Eu class ante accumsan habitant morbi neque hac purus magnis varius pulvinar hac pede magnis.</div>
                    <div className = "reviewer-info">
                        <img src = "/avatar.svg" alt = "asd" className = "reviewer-image"></img>
                        <div className = "reviewer-name-lvl">
                            <span className = "reviewer-name">Tina</span> 
                            <br/>
                            Intermidiate
                        </div>
                    </div>
                </div>

                <div className = "review-container">
                    <div className = "reviewer-rating">
                        <RatingView  ratingValue={5} size = "20px"/>
                    </div>
                    <div className = "reviewer-review">Eros nulla mollis nec tortor. Eu class ante accumsan habitant morbi neque hac purus magnis varius pulvinar hac pede magnis.</div>
                    <div className = "reviewer-info">
                        <img src = "/avatar.svg" alt = "asd" className = "reviewer-image"></img>
                        <div className = "reviewer-name-lvl">
                            <span className = "reviewer-name">Tina</span> 
                            <br/>
                            Intermidiate
                        </div>
                    </div>
                </div>

                <div className = "review-container">
                    <div className = "reviewer-rating">
                        <RatingView  ratingValue={5} size = "20px"/>
                    </div>
                    <div className = "reviewer-review">Eros nulla mollis nec tortor. Eu class ante accumsan habitant morbi neque hac purus magnis varius pulvinar hac pede magnis.</div>
                    <div className = "reviewer-info">
                        <img src = "/avatar.svg" alt = "asd" className = "reviewer-image"></img>
                        <div className = "reviewer-name-lvl">
                            <span className = "reviewer-name">Tina</span> 
                            <br/>
                            Intermidiate
                        </div>
                    </div>
                </div>

                <div className = "review-container">
                    <div className = "reviewer-rating">
                        <RatingView  ratingValue={5} size = "20px"/>
                    </div>
                    <div className = "reviewer-review">Eros nulla mollis nec tortor. Eu class ante accumsan habitant morbi neque hac purus magnis varius pulvinar hac pede magnis.</div>
                    <div className = "reviewer-info">
                        <img src = "/avatar.svg" alt = "asd" className = "reviewer-image"></img>
                        <div className = "reviewer-name-lvl">
                            <span className = "reviewer-name">Tina</span> 
                            <br/>
                            Intermidiate
                        </div>
                    </div>
                </div>

                <div className = "review-container">
                    <div className = "reviewer-rating">
                        <RatingView  ratingValue={5} size = {20} fillColor = {"#FFB300"}/>
                    </div>
                    <div className = "reviewer-review">Eros nulla mollis nec tortor. Eu class ante accumsan habitant morbi neque hac purus magnis varius pulvinar hac pede magnis.</div>
                    <div className = "reviewer-info">
                        <img src = "/avatar.svg" alt = "asd" className = "reviewer-image"></img>
                        <div className = "reviewer-name-lvl">
                            <span className = "reviewer-name">Tina</span> 
                            <br/>
                            Intermidiate 
                        </div>
                    </div>
                </div>
            </div>
            <button className = "left-btn" onClick = {handleLeftClick}>&#8592;</button>
            <button className = "right-btn" onClick = {handleRightClick}>&#8594;</button>
            {/* <img src = "/rightArrow.svg" alt = "right" className = "right-btn" onClick = {handleRightClick}></img> */}
            {/* <button></button>
            <button></button> */}
        </div>

    )
}

export default Section6
