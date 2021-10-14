import React from 'react'
import "./hero.css";
import {useState, useEffect, useRef} from "react";
import {useHistory} from "react-router-dom";
import Axios from "../../../axios";
function Hero() {

    const history = useHistory();
    let url = new URL(window.location.href);
    const schoolName = url.searchParams.get("schoolName")//Getting the schoolname from params
    const [width, setWidth] = useState(window.innerWidth);
    const [isdateButton1Clicked, setDateButton1Clicked] = useState(true);
    const [isdateButton2Clicked, setDateButton2Clicked] = useState(false);
    const [name, setName] = useState("");
    const [studentGrade, setStudentGrade] = useState("");
    const [city, setCity] = useState("");
    const [workshopdate1, setworkshopdate1] = useState("");
    const [workshopdate2, setworkshopdate2] = useState("");
    const [workshopdate1value, setworkshopdate1value] = useState("");
    const [workshopdate2value, setworkshopdate2value] = useState("");
    const nameInputRef = useRef(null);
    const studentGradeInputRef = useRef(null);
    const cityInputRef = useRef(null);

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
            studentGradeInputRef.current.focus();
        }
        else if(labelNumber === 3)
        {
            cityInputRef.current.focus();
        }
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

        Axios.post("/postFrenchSchoolForm", {
            name: name,
            contactNumber: "",
            studentGrade: studentGrade,
            email: "", 
            city: city,
            whatsAppEnabled: "",
            workshopDate: date,
            url: window.location.href,
            course: "French",
            schoolName: schoolName
        })
        .then((response) => {
            //if status is 201 we redirect it to new page
            if(response.status === 201)
            {
                console.log("sno is: " + response.data.insertId);
                localStorage.setItem("sno", response.data.insertId);
                history.push("/frenchschoolconfirmregistration");
            }
        })
        .catch((err) => {
            console.log("Error Happened" + err);
        })
    }

    return (
        <div className = "hero-frenchschool">
            <div className = "hero-frenchschool-section-1">
                <div className = "hero-frenchschool-section-1-text">
                    <h1 className = "hero-frenchschool-section-1-heading">Learn<img src = "/frenchText.svg" alt = "frenchText"/>the fun way with us. Join Now!</h1>
                </div>
                <div className = "hero-frenchschool-section-1-img-container">
                    <img src= "frenchschoolheroimg.svg" className = "hero-frenchschool-section-1-img"></img>
                </div>
            </div>
            <div className = "hero-frenchschool-section-2">
                {width > 800 ? <img src = "/frenchHeroImgBastille.svg" alt = "image" className = "frenchschool-hero-section-2-bastille"></img> : <img src = "/frenchHeroImgBastille.svg" alt = "image" className = "french-hero-section-2-bastille"></img>}
                <h3 className = "hero-frenchschool-section-2-heading" style = {{marginRight: "40px"}}>Register with us to know more</h3>
                <form onSubmit = {handleFormSubmit}> 

                    <div className = "input-box-frenchschool">
                        <input type = "text" className = "input-frenchschool" ref = {nameInputRef} onChange = {(e) => setName(e.target.value)} value = {name} required></input>
                        <label className = "input-label-frenchschool" onClick = {() => handleLabelClick(1)}><span style = {{color: "red"}}>*</span>Name</label>
                    </div>

                    <div className = "input-box-frenchschool">
                        <select className = "input-frenchschool" ref = {studentGradeInputRef} onChange = {(e) => setStudentGrade(e.target.value)} value = {studentGrade} required>
                            <option></option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>
                        <label className = "input-label-frenchschool" onClick = {() => handleLabelClick(2)}><span style = {{color: "red"}}>*</span>Student Grade</label>
                    </div>

                    <div className = "input-box-frenchschool">
                        <input type = "text" className = "input-frenchschool" ref = {cityInputRef} onChange = {(e) => setCity(e.target.value)} value = {city} ></input>
                        <label className = "input-label-frenchschool" onClick = {() => handleLabelClick(3)}><span style = {{color: "red"}}>*</span>City</label>
                    </div>
                    <div className = "frenchschool-hero-section-2-date-container">
                        <button type = "button" className = {isdateButton1Clicked ? "frenchschool-hero-section-2-date-btn-active" : "french-hero-section-2-date-btn"} onClick = {()=>{setDateButton1Clicked(true);setDateButton2Clicked(false)}} value = {workshopdate1value}>{workshopdate1}</button>
                        <button type = "button" className = {isdateButton2Clicked ? "frenchschool-hero-section-2-date-btn-active" : "french-hero-section-2-date-btn"} onClick = {()=>{setDateButton1Clicked(false);setDateButton2Clicked(true)}} value = {workshopdate2value}>{workshopdate2}</button>
                    </div>
                    <button className = "register-btn">Register For Free</button>
                </form>
            </div>
        </div>
    )
}

export default Hero
