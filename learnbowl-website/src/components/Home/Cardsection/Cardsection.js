import React from 'react'
import "./cardsection.css";
import { useHistory } from "react-router-dom";
import {AiOutlineArrowRight} from 'react-icons/ai';
function Cardsection(prop) {
    const cardRef = prop.cardRef;
    const history = useHistory();
    function handleButtonClick(text)
    {
        if(text === "French")
        {
            history.push("french");
        }
        else if(text === "Vedic")
        {
            history.push("vedicmaths");
        }
    }
    return (
        <div className = "card-section" ref = {cardRef}>
            <h3 className = "card-section-heading">What do you want to <span style = {{color: "#2D3092"}}>learn</span> today?</h3>
            <div className = "cards">
                <div className = "card">
                    <div className = "card-txt">
                    <p className = "card-heading">Learn <span style = {{color: "#2D3092"}}>French</span></p>
                    <p className = "card-sub-heading">Grades 5-12+</p>
                    <div className = "points">
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            To access a rich culture
                        </div>
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            For an inspiring career
                        </div>
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            A widely spoken language
                        </div>
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            A zeal for creativity
                        </div>
                    </div>
                    {/* <p className = "card-info">Try it yourself with our <br></br> <span style = {{color: "#2D3092", fontWeight: "700"}}>FREE WORKSHOP</span></p> */}
                    <img src = "/homeFreeWorkshopText.svg" alt = "img" className = "card-info-img"></img>
                    </div>
                    <div className = "card-icon">
                        <img src = "/eiffel.svg" alt = "" className = "french-img"></img>
                    </div>
                    <button className = "card-btn" onClick = {() => handleButtonClick("French")}>Register for Free <span className = "rightArrow"><AiOutlineArrowRight/></span></button>
                </div>
                <div className = "card">
                    <div className = "card-txt">
                    <p className = "card-heading">Learn <span style = {{color: "#2D3092"}}>Vedic Maths</span></p>
                    <p className = "card-sub-heading">Grades 5-12+</p>
                    <div className = "points">
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            Integrates creative thinking
                        </div>
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            Reduces silly mistakes
                        </div>
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            Increases concentration
                        </div>
                        <div className = "point">
                            <img src = "/bullet.svg" alt = "" className = "bullet"></img>
                            Helps in quick math 
                        </div>
                    </div>
                    {/* <p className = "card-info">Try it yourself with our <br></br> <span style = {{color: "#2D3092", fontWeight: "700"}}>FREE WORKSHOP</span></p> */}
                    <img src = "/homeFreeWorkshopText.svg" alt = "img" className = "card-info-img"></img>
                    </div>
                    <div className = "card-icon">
                        <img src = "/vedic.svg" alt = "" className = "vedic-img"></img>
                    </div>
                    <button className = "card-btn" onClick = {() => handleButtonClick("Vedic")}>Register for Free <span className = "rightArrow"><AiOutlineArrowRight/></span></button>
                </div>
            </div>
        </div>
    )
}

export default Cardsection
