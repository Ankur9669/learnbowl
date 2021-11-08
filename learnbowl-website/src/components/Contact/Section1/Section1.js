import React from 'react'
import "./section1.css";
import {useState, useEffect} from "react";
import Modal from "react-modal";
import ReactDOM from 'react-dom';
import Axios from "../../../axios";


function Section1() 
{
    const [width, setWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [message, setMessage] = useState("");

    function toggleModal() {
        setIsOpen(!isOpen);
       // window.location.reload()
    }

    function handleFormSubmit(e)
    {
        e.preventDefault();
        let isFormValid = false;
        // console.log(firstName);
        // console.log(lastName);
        // console.log(contactNumber);
        // console.log(email);
        // console.log(course);
        // console.log(message);
        const name = firstName + " " + lastName;

        if(contactNumber.length === 10)
        {
            isFormValid = true;
        }
        else{
            alert("Contact number should be of length 10");
        }

        if(isFormValid)
        {
            Axios.post("/contactUsQuery", {
                name: name,
                contactNumber: contactNumber,
                email: email,
                course: course,
                message: message
            }).
            then(() => {
                //It means form data is submitted succesfully
                toggleModal();
            })
            .catch((err) => {
                console.log("Something is Wrong" + err);
            })
        }
    }
    useEffect(() => 
    {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])
    function handleResize()
    {
        setWidth(window.innerWidth);
    }
    return (
        <div className = "contact-section-1">
            <div className = "contact-section-1-section-1">
                <Modal
                isOpen={isOpen}
                style = {{
                    overlay: {
                        zIndex: "1000",
                        background: "rgba(0, 0, 0, 0.6)",
                    },
                    content: {
                        zIndex: "1000",
                        width: width > 680 ? "500px" : "auto    ",
                        height: width > 680 ? "400px" : "405px",
                        margin: "auto",
                        borderRadius: "10px"
                    }
                }}
                >
                    <div className = "modal-success">
                        <img alt = "image" src = "modal-success-icon.svg" className = "modal-success-image"></img>
                        <p className = "modal-success-heading">Submitted</p>
                        <p className = "modal-success-text">Sit back and relax our team will get <br/>back to you within 24 hrs</p>
                        <button className = "modal-success-btn" onClick={() => window.location.reload()}>Go Back</button>
                    </div>
                </Modal>
                <img src = "/contact-blue-ellipse.svg" alt = "image" className = "contact-section-1-blue-ellipse"/>
                <img src = "/contact-yellow-ellipse.svg" alt = "image" className = "contact-section-1-orange-ellipse"/>
                <h3 className = "contact-section-1-section-1-heading">Contact Us</h3>
                <p className = "contact-section-1-section-1-info">
                    Fill up the form and our team will 
                    get back to you shortly or use any of the 
                    following ways to reach us.
                </p>
                <div className = "points-container">
                    <a href = "tel:91 7304074610" style = {{textDecoration:"none", color: "white"}}>
                        <div className = "point">
                            <img src = "/contact-section-call.svg" alt = "image" className = "contact-section-1-icon"></img>
                            <div className = "">
                                <p className = "point-1">+91 7304074610</p>
                                <p className = "point-2">Mon to Sat 9am to 9pm</p>
                            </div>
                        </div>
                    </a>
                    <a href = "https://maps.google.com/?q=learnbowl,Alladin Mansion, Begumpet, Hyderabad, Telangana 500016" target="_blank" style = {{textDecoration:"none", color: "white"}}>
                        <div className = "point">
                            <img src = "/location-icon-orange.svg" alt = "image" className = "contact-section-1-icon" style = {{width: "20px"}}></img>
                            <div className = "">
                                <p className = "point-1">Aladdin Mansion</p>
                                <p className = "point-2">Begumpet, Hyderabad 500016</p>
                            </div>
                        </div>
                    </a>
                    <a href = "mailto:care@learnbowl.com" target="_blank" style = {{textDecoration:"none", color: "white"}}>
                        <div className = "point">
                            <img src = "/email-icon-orange.svg" alt = "image" className = "contact-section-1-icon"></img>
                            <div className = "">
                                <p className = "point-1">care@learnbowl.com</p>
                                <p className = "point-2">Shoot us an E-mail!</p>
                            </div>
                        </div>
                    </a>
                    
                    <div className = "social-section-1">
                        <a href = "https://www.facebook.com/learnbowl">
                            <img src = "/contactFacebook.svg" alt = "image" className = "facebook-icon"></img>
                        </a>
                        <a href = "https://www.instagram.com/learnbowl/">
                            <img src = "/contactInsta.svg" alt = "image" className = "insta-icon"></img>
                        </a>
                    </div>
                </div>
                
                {width < 1200 ? 
                <div style = {{marginTop: "30px"}}>
                    <div className = "mobile-section-div-1">
                        <label className = "mobile-section-div-1-label">Or</label>
                    </div>

                    <div className = "mobile-section-div-2">
                        <label className = "mobile-section-div-2-label">Fill up the form below and our <br/>team will get back to you shortly!</label>
                    </div>

                    <div className = "mobile-section-div-3">
                        <img src = "/downLongArrow.svg" alt = "image"></img>
                    </div>
                </div> : <></>}
            </div>
            <div className = "contact-section-1-section-2">
                <form className = "contact-section-1-section-2-form" onSubmit = {(e) => handleFormSubmit(e)}>
                    <div className = "contact-section-1-section-2-name-container">
                        <div className = "flex-1">
                            <label>First Name <span style = {{color: "red"}}>*</span></label>
                            <br/>
                            <input type = "text" onChange = {(e) => setFirstName(e.target.value)} required></input>
                        </div>

                        <div className = "flex-1">    
                            <label>Last Name <span style = {{color: "red"}}>*</span></label>
                            <br/>
                            <input type = "text" onChange = {(e) => setLastName(e.target.value)} required></input>
                        </div>
                    </div>
                    <div className = "contact-section-1-section-2-phoneEmail-container">
                    <div className = "flex-1">
                            <label>Phone Number <span style = {{color: "red"}}>*</span></label>
                            <br/>
                            <input type = "number" onChange = {(e) => setContactNumber(e.target.value)} required></input>
                        </div>

                        <div className = "flex-1">    
                            <label>E-mail</label>
                            <br/>
                            <input type = "email" onChange = {(e) => setEmail(e.target.value)}></input>
                        </div>
                    </div>
                    <label className = "course-label">Need help from the expert? <span style = {{color: "#8D8D8D"}}> (Optional) </span></label>
                    <div className = "contact-section-1-section-2-radiobuttons-container">
                        <div className = "radio-container">
                            <input type = "radio" name = "course" onChange = {() => setCourse("Courses")}></input>
                            <label for = "topic">Courses</label>
                        </div>
                        <div className = "radio-container">    
                            <input type = "radio" name = "course" onChange = {() => setCourse("Jobs")}></input>
                            <label for = "subject">Jobs</label>
                        </div>
                        <div className = "radio-container">
                            <input type = "radio" name = "course" onChange = {() => setCourse("Other")}></input>
                            <label for = "something-else">Something Else</label>
                        </div>
                    </div>
                    <label for = "message" className = "message-label">Message <span style = {{color: "red"}}>*</span></label>
                    <textarea className = "message-box" placeholder = " Write your message here" onChange = {(e) => setMessage(e.target.value)}  required></textarea>
                    <button type = "submit" className = "submit-button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Section1
