import React from 'react'
import "./hero.css";
import {useState, useEffect, useRef} from "react";
import Axios from "../../../axios";
import { useHistory, useLocation } from "react-router-dom";
function Home() {
    let history = useHistory();
    // let location = useLocation();
    const [width, setWidth] = useState(window.innerWidth);
    const [isdateButton1Clicked, setDateButton1Clicked] = useState(true);
    const [isdateButton2Clicked, setDateButton2Clicked] = useState(false);
    const [name, setName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [studentGrade, setStudentGrade] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [whatsAppEnabled, setWhatsappEnabled] = useState(false);
    const [workshopdate1, setworkshopdate1] = useState("");
    const [workshopdate2, setworkshopdate2] = useState("");
    const [workshopdate1value, setworkshopdate1value] = useState("");
    const [workshopdate2value, setworkshopdate2value] = useState("");
    const nameInputRef = useRef(null);
    const contactInputRef = useRef(null);
    const studentGradeInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const cityInputRef = useRef(null);

    //console.log(window.location.href);
    function handleResize()
    {
        setWidth(window.innerWidth);
    }
    function handleLabelClick(labelNumber)
    {
        if(labelNumber === 1)
        {
            nameInputRef.current.focus();
        }
        else if(labelNumber === 2)
        {
            contactInputRef.current.focus();
        }
        else if(labelNumber === 3)
        {
            studentGradeInputRef.current.focus();
        }
        else if(labelNumber === 4)
        {
            emailInputRef.current.focus();
        }
        else if(labelNumber === 5)
        {
            cityInputRef.current.focus();
        }
    }
    function handleFormSubmit(e)
    {
        e.preventDefault();
        let date = "";
        if(isdateButton1Clicked == true)
        {
            date = workshopdate1value;
        }
        else{
            date = workshopdate2value
        }
      

        Axios.post("/postFrenchData", {
            name: name,
            contactNumber: contactNumber,
            studentGrade: studentGrade,
            email: email, 
            city: city,
            whatsAppEnabled: whatsAppEnabled,
            workshopDate: date,
            url: window.location.href,
            course: "French"
        })
        .then((response) => {
            //if status is 201 we redirect it to new page
            if(response.status === 200)
            {
                //console.log("sno is: " + response.data[0].sno);
                localStorage.setItem("sno", response.data[0].sno);
                localStorage.setItem("messageTriggered", 0);
                history.push("/registrationsuccessful");
            }
            if(response.status === 201)
            {
                //console.log("sno is: " + response.data.insertId);
                localStorage.setItem("sno", response.data.insertId);
                localStorage.setItem("messageTriggered", 0);
                history.push("/registrationsuccessful");
            }
        })
        .catch((err) => {
            console.log("Error Happened" + err);
        })
    }
    useEffect(() => 
    {
        window.addEventListener("resize", handleResize);

        Axios.get("/getworkshopdates",{
            params: {
                workshoptype: "French"
            }
        })
        .then((response) => {
            //if status is 201 we redirect it to new page
            if(response.status === 200)
            {
                //console.log(response.data[0]);
                //console.log(response.data[1]);
                setworkshopdate1(response.data[0].workshopdates);
                setworkshopdate2(response.data[1].workshopdates);
                setworkshopdate1value(response.data[0].workshopvalue);
                setworkshopdate2value(response.data[1].workshopvalue);
            }
        })
        .catch((err) => {
            console.log("Error Happened" + err);
        })

        //CleanUp
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])
    return (
        <div className = "hero-french">
            <img src = "/french-wave-1.svg" alt = "wave" className = "french-wave1"/>
            <img src = "/french-wave-2.svg" alt = "wave" className = "french-wave2"/>
            <img src = "/french-wave-3.svg" alt = "wave" className = "french-wave3"/>
            <img src = "/french-wave-4.svg" alt = "wave" className = "french-wave4"/>
            <div className = "hero-french-section-1">
                <div className = "hero-french-section-1-text">
                    <p className = "hero-french-section-1-info-1">Learn from India’s best teachers!</p>
                    <h1 className = "hero-french-section-1-heading">Learn<img src = "/frenchText.svg" alt = "frenchText"/>the fun way with us. Join Now!</h1>
                    <p className = "hero-french-section-1-info-2">Learn French Online: Register for workshop</p>
                </div>
                <div className = "hero-french-section-1-img-container">
                    <img src= "frenchheroimg.svg" className = "hero-french-section-1-img"></img>
                </div>
            </div>
            <div className = "hero-french-section-2">
                {width > 800 ? <img src = "/frenchHeroImgBastille.svg" alt = "image" className = "french-hero-section-2-bastille"></img> : <img src = "/frenchHeroImgBastille.svg" alt = "image" className = "french-hero-section-2-bastille"></img>}
                <h3 className = "hero-french-section-2-heading" style = {{marginRight: "40px"}}>Register with us to know more</h3>
                <form onSubmit = {(e) => handleFormSubmit(e)}> 

                    <div className = "input-box">
                        <input type = "text" className = "input" ref = {nameInputRef} onChange = {(e) => setName(e.target.value)} value = {name} required></input>
                        <label className = "input-label" onClick = {() => handleLabelClick(1)}><span style = {{color: "red"}}>*</span>Name</label>
                    </div>

                    <div className = "input-box">
                        <input type = "number" className = "input" ref = {contactInputRef} onChange = {(e) => setContactNumber(e.target.value)} value = {contactNumber} required></input>
                        <label className = "input-label" onClick = {() => handleLabelClick(2)}><span style = {{color: "red"}}>*</span>Contact No</label>
                    </div>

                    <div className = "input-box">
                        <select className = "input" ref = {studentGradeInputRef} onChange = {(e) => setStudentGrade(e.target.value)} value = {studentGrade} required>
                            {/* <option></option> */}
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>
                        <label className = "input-label" onClick = {() => handleLabelClick(3)}><span style = {{color: "red"}}>*</span>Student Grade</label>
                    </div>

                    <div className = "input-box">
                        <input type = "email" className = "input" ref = {emailInputRef} onChange = {(e) => setEmail(e.target.value)} value = {email}></input>
                        <label className = "input-label" onClick = {() => handleLabelClick(4)}>Email</label>
                    </div>

                    <div className = "input-box">
                        <input type = "text" className = "input" ref = {cityInputRef} onChange = {(e) => setCity(e.target.value)} value = {city} required></input>
                        <label className = "input-label" onClick = {() => handleLabelClick(5)}><span style = {{color: "red"}}>*</span>City</label>
                    </div>
                    <div className = "french-hero-section-2-date-container">
                        <button type = "button" className = {isdateButton1Clicked ? "french-hero-section-2-date-btn-active" : "french-hero-section-2-date-btn"} onClick = {()=>{setDateButton1Clicked(true);setDateButton2Clicked(false)}} value = {workshopdate1value}>{workshopdate1}</button>
                        <button type = "button" className = {isdateButton2Clicked ? "french-hero-section-2-date-btn-active" : "french-hero-section-2-date-btn"} onClick = {()=>{setDateButton1Clicked(false);setDateButton2Clicked(true)}} value = {workshopdate2value}>{workshopdate2}</button>
                    </div>
                    <input type = "checkbox" id = "checkbox" name = "checkbox" className = "checkbox" onChange = {() => setWhatsappEnabled(!whatsAppEnabled)}></input>
                    <label style = {{color: "red"}} for = "checkbox" className = "checkbox-label">Get Notified on whatsapp before workshop</label>
                    <button type = "submit" className = "register-btn">Register For Free</button>
                </form>
            </div>
        </div>
    )
}

export default Home
