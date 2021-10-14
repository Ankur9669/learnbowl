import React from 'react';
import "./footer.css";
function Footer() {
    return (
        <>
        <div className = "footer">
            <div className = "footer-section-1">
                <div className = "footer-icon-section">
                    <img src = "/learnbowlIcon.png" className = "footer-learnbowl-icon"></img>
                </div>
                <div className = "footer-mail-section">
                    <h3>Stay up to date</h3>
                    <p>Subscribe to our newsletter</p>
                    <input type = "email" placeholder = "Email-Id"></input>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className = "footer-section-2">
                <div className = "footer-section-2-company-details">
                    <h3>Company</h3>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Knowledgebase</p>
                </div>
                <div className = "footer-section-2-contact-us">
                <h3>Contact Us</h3>
                    <p>xxxx@xxxx.com</p>
                    <p>xxx-xxx-xxxx</p>
                </div>
            </div>  
        </div>
        <div className = "footer-social-section">
        <h3>Let's get social</h3>
            <img src = "/fb.svg" alt = "facebook"></img>
            <img src = "/insta.svg" alt = "facebook"></img>
            <p className = "footer-copyright">© Copyright LearnBowl</p>
        </div>
        </>
    )
}

export default Footer
