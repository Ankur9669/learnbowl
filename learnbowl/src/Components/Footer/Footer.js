import React from 'react';
import "./footer.css";
function Footer() {
    return (
        <footer className = "footer">
            <div className = "footer-div-1">
                <label className = "display-block margin-top-bottom footer-sub-heading">Stay Updated</label>
                <input placeholder = "Enter email address" type = "email" className = "input-email margin-top-bottom"></input>
                <button className = "subscribe-btn">Subscribe Now</button>
            </div>

            <div className = "footer-div-2 margin">
                <label className = "footer-sub-heading margin-top-bottom ">Let's Get Social</label>
                <div className = "icons">
                    <a href = "#">
                        <img src = "/facebook.svg" className = "footer-icon"></img>
                    </a>
                    
                    <a href = "#">
                        <img src = "/instagram.svg" className = "footer-icon"></img>
                    </a>
                </div>
            </div>

            <div className = "footer-div-3 margin">
                <label for = "aboutUs" className = "icon">AboutUs</label>
                <label for = "courses" className = "icon">Courses</label>
                <label for = "support" className = "icon" >Support</label>
            </div>
                <hr></hr>
            <div className = "footer-div-4 margin">
                <label className = "margin-top-bottom">
                    Learnbowl
                </label>
                <label className = "margin-top-bottom">
                    This site is just a replicate and does not claim any courses offered by learnbowl
                </label>
            </div>
        </footer>
    )
}

export default Footer
