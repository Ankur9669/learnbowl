import React from 'react';
import "./footer.css";
import {useHistory} from "react-router-dom";
function Footer() {
    const history = useHistory();
    function handleClick(buttonText)
    {
        if(buttonText === "Privacy")
        {

        }
        if(buttonText === "Terms")
        {
            
        }
        if(buttonText === "About")
        {
            history.push("/about");
        }
        if(buttonText === "French")
        {
            history.push("/french");
        }
        if(buttonText === "Vedic")
        {
            history.push("/vedic");   
        }
        if(buttonText === "Blog")
        {
            history.push("/blog");
        }  
        if(buttonText === "Back")
        {
            window.scrollTo({
                top: "0px",
                behavior: "smooth"
            })
        }  
    }
    return (
        <>
            <div className = "footer-desktop">
                <div className = "footer-section-1">
                    <div className = "footer-top-line">
                    </div>
                    <div className = "footer-section-1-content">
                        <a onClick = {() => handleClick("Privacy")}>
                            <p className = "footer-section-points">Privacy Policy</p>
                        </a>
                        <a onClick = {() => handleClick("Terms")}>
                            <p className = "footer-section-points">Terms and conditions</p>
                        </a>
                        <a onClick = {() => handleClick("About")}>
                            <p className = "footer-section-points">About us</p>
                        </a>
                    </div>
                </div>
                <div className = "footer-section-2">
                    <div className = "footer-section-2-icon-container">
                        <img src = "/learnbowlIcon1.svg" alt = "image" className = "footer-section2-icon"></img>
                    </div>

                    <div className = "footer-section-2-content">
                        <div className = "footer-section-2-icons-container">
                            <a href = "https://www.facebook.com/learnbowl" target = "_BLANK">
                                <img src = "/facebook-black.svg" alt = "image"></img>
                            </a>
                            <a href = "https://www.instagram.com/learnbowl/" target = "_BLANK">
                                <img src = "/insta-black.svg" alt = "image"></img>
                            </a>
                            <a href = "https://www.linkedin.com/company/learnbowl/mycompany/" target = "_BLANK">
                                <img src = "/linkedin-black.svg" alt = "image"></img>
                            </a>
                        </div>
                        <a href = "mailto:care@learnbowl.com" style = {{textDecoration: "none", color: "black"}} target = "_BLANK"> 
                            <div className = "footer-section-email">
                                <p>care@learnbowl.com</p>
                            </div>
                        </a>
                        
                        <p className = "footer-section-copyright">&#xA9; Copyright Learnbowl</p>
                    </div>
                </div>
                <div className = "footer-section-3">
                    <div className = "footer-top-line">
                    </div>  

                    <div className = "footer-section-3-content">
                        <a onClick = {() => handleClick("French")}>
                            <p className = "footer-section-points">French</p>
                        </a>
                        <a onClick = {() => handleClick("Vedic")}>
                            <p className = "footer-section-points">Vedic Maths</p>
                        </a>
                        <a onClick = {() => handleClick("Blog")}>
                            <p className = "footer-section-points">Blog</p>
                        </a>
                        <p className = "back-to-top-btn" onClick = {() => handleClick("Back")}>Back to top &#8743;</p>
                    </div>
                </div>
            </div>

            {/* Footer Mobile Html */}
            <div className = "footer-mobile">
                <div className = "footer-mobile-section-1">
                    <div className = "footer-top-line">
                    </div>  
                    <div className = "footer-mobile-icon-container">
                        <img src = "/learnbowlIcon1.svg" alt = "image" className = "footer-section2-icon"></img>
                    </div>
                    <div className = "footer-top-line">
                    </div>  
                </div>
                <div className = "footer-mobile-section-2">
                    <div className = "footer-mobile-section-2-icons-container">
                            <a href = "https://www.facebook.com/learnbowl" target = "_BLANK">
                                <img src = "/facebook-black.svg" alt = "image"></img>
                            </a>
                            <a href = "https://www.instagram.com/learnbowl" target = "_BLANK">
                                <img src = "/insta-black.svg" alt = "image"></img>
                            </a>
                            <a href = "https://www.linkedin.com/company/learnbowl/mycompany/" target = "_BLANK">
                                <img src = "/linkedin-black.svg" alt = "image"></img>
                            </a>
                    </div> 
                </div>
                <div className = "footer-mobile-section-3">
                    <div className = "footer-mobile-section-3-section-1">
                        <a onClick = {() => handleClick("Privacy")}>
                            <p className = "footer-section-points">Privacy Policy</p>
                        </a>
                        <a onClick = {() => handleClick("Terms")}>
                            <p className = "footer-section-points">Terms and conditions</p>
                        </a>
                        <a onClick = {() => handleClick("About")}>
                            <p className = "footer-section-points">About us</p>
                        </a>
                    </div> 
                    <div className = "footer-mobile-section-3-section-2">
                        <a onClick = {() => handleClick("French")}>
                            <p className = "footer-section-points">French</p>
                        </a>
                        <a onClick = {() => handleClick("Vedic")}>
                            <p className = "footer-section-points">Vedic Maths</p>
                        </a>
                        <a onClick = {() => handleClick("Blog")}>
                            <p className = "footer-section-points">Blog</p>
                        </a>
                    </div> 
                </div>
                <div className = "footer-mobile-section-4">
                    <a href = "mailto:care@learnbowl.com" style = {{textDecoration: "none", color: "black"}} target = "_BLANK"> 
                        <div className = "footer-section-email">
                            <p>care@learnbowl.com</p>
                        </div>
                    </a>
                    <p className = "footer-section-copyright">&#xA9; Copyright Learnbowl</p>
                    <p className = "back-to-top-btn" onClick = {() => handleClick("Back")}>Back to top &#8743;</p>
                </div>
            </div>
        </>
    )
}

export default Footer
