import React from 'react'
import "./cardsection.css";
function Cardsection() {
    return (
        <div className = "card-section">
            <h2 className = "card-section-heading">What do you want to <span style = {{color: "#2D3092"}}>learn</span> today?</h2>
            <div className = "cards">
                <div className = "card">
                    <div className = "card-txt">
                    <p className = "card-heading">Learn <span style = {{color: "#2D3092"}}>French</span></p>
                    <p className = "card-sub-heading">Grades 5-12+</p>
                    <div className = "points">
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            Because it is cool
                        </div>
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            Because it is cool
                        </div>
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            Because it is cool
                        </div>
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            Because it is cool
                        </div>
                    </div>
                    {/* <p className = "card-info">Try it yourself with our <br></br> <span style = {{color: "#2D3092", fontWeight: "700"}}>FREE WORKSHOP</span></p> */}
                    <img src = "/homeFreeWorkshopText.svg" alt = "img" className = "card-info-img"></img>
                    </div>
                    <div className = "card-icon">
                        <img src = "/eiffel.svg" alt = "" className = "french-img"></img>
                    </div>
                    <button className = "card-btn">Register for Free <span style = {{paddingLeft: "3px"}}><img src = "/rightArrow.svg" alt = "arrow" className = "rightArrow"></img></span></button>
                </div>
                <div className = "card">
                    <div className = "card-txt">
                    <p className = "card-heading">Learn <span style = {{color: "#2D3092"}}>Vedic Maths</span></p>
                    <p className = "card-sub-heading">Grades 5-12+</p>
                    <div className = "points">
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            Because it is cool
                        </div>
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            Because it is cool
                        </div>
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            Because it is cool
                        </div>
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            Because it is cool
                        </div>
                    </div>
                    {/* <p className = "card-info">Try it yourself with our <br></br> <span style = {{color: "#2D3092", fontWeight: "700"}}>FREE WORKSHOP</span></p> */}
                    <img src = "/homeFreeWorkshopText.svg" alt = "img" className = "card-info-img"></img>
                    </div>
                    <div className = "card-icon">
                        <img src = "/vedic.svg" alt = "" className = "vedic-img"></img>
                    </div>
                    <button className = "card-btn">Register for Free <span style = {{paddingLeft: "3px"}}><img src = "/rightArrow.svg" alt = "arrow" className = "rightArrow"></img></span></button>
                </div>
            </div>
        </div>
    )
}

export default Cardsection
