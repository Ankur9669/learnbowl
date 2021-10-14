import React from 'react'
import "./registrationsuccessfull.css";
import { useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import Axios from "../../axios";
function RegistrationSuccesfull() 
{
    let history = useHistory();
    const [name, setName] = useState("Chester");
    const [course, setCourse] = useState("");
    const [workshopValue, setWorkShopValue] = useState("");
    const [workshopDate, setWorkShopDate] = useState("");
    const [contactNumber,setContactNumber] = useState("");
    const [LBRollNumber, setLBRollNumber] = useState("");
    //const params = new URLSearchParams(window.location.search);
    //const contactNumber = params.get('contactNumber');
    const sno = localStorage.getItem("sno");
    const messageTriggered = localStorage.getItem("messageTriggered");
    let api_url = "https://api.kaleyra.io/v1/HXIN1697545550IN/messages/";

    function handlebuttonClick()
    {
        history.push("/");
    }

    //When we get contact number we send message
    useEffect(() => {
        //To Trigger the message When the user is logged in succesfully
        var requestOptions = {
            method: 'GET',
        };
        var params = {
        'api-key': 'Ab7080c686b83f3c293edc0dcfab607d0',
        'to': 91 + contactNumber,
        'sender': 'LRNBWL',
        'source': 'API',
        'body' : "Thank you for registering with LearnBowl! We confirm your seat for the " + course + " workshop. Your roll no is: " + LBRollNumber + ".Other details will be sent shortly. Stay tuned!",
        'template_id': '1507162836363815496',
        'type': 'TXN'
        }
        api_url = api_url + "?" + (new URLSearchParams(params)).toString();
        
        if(contactNumber.length === 10 && parseInt(messageTriggered) === 0)
        { 
            console.log("Triggering Message");   
            localStorage.setItem("messageTriggered", 1);
            fetch(api_url, requestOptions)
            .then(response => response.text())
            .then(result => console.log("Succesfull"))
            .catch(error => console.log('error', error));
        }
    }, [contactNumber])

    useEffect(async() => {
        await Axios.get("/getuser", {
            params: {
                sno:sno
            }
        })
        .then(async(response) => {
            //if status is 201 we redirect it to new page
            if(response.status === 200)
            {
               // console.log(response.data[0]);
                setName(response.data[0].studentName);
                setCourse(response.data[0].course);
                setWorkShopDate(response.data[0].workshopDates);
                setLBRollNumber(response.data[0].LBRollNumber);
                setContactNumber(response.data[0].contactNumber);
                //console.log("contactNumber is: " + contactNumber);
               // setWorkShopValue(response.data[0].workshopDates);
                
               await Axios.get("/getworkshopdate", {
                    params: {
                        workshopValue: response.data[0].workshopDates
                    }
                }).then((response) => {
                    if(response.status === 200)
                    {
                        //console.log(response);
                        setWorkShopDate(response.data[0].workshopdates);
                    }
                }).catch((err) => {
                    console.log(err);
                })
            }
        })
        .catch((err) => {
            console.log("Error Happened" + err);
        })
    }, [])

    return (
        <div className = "registrationsuccessfull">
            <h3 className = "registrationsuccessfull-heading">
            Thanks for Registering with us! 
            </h3>
            <div className = "registrationsuccessfull-section-container">
                <div className = "registrationsuccessfull-section-1">
                    <p><span style = {{color:"#2D3092", fontWeight: "600"}}>Hey {name},</span></p>
                    <p>You have successfully registered for LearnBowl’s workshop on the <b>{course} Language</b>. The details of the workshop will be sent via SMS on the registered number.
                        <br/><br/>
                        We here at LearnBowl extend you a warm welcome and hope that you remain by our side in many more learning adventures ahead! See you on <span style = {{color:"#2D3092", fontWeight: "600"}}>{workshopDate}</span>
                    </p>
                    <p><span style = {{color:"#2D3092", fontWeight: "600"}}>Workskhop dates chosen:</span> <b>{workshopDate}</b></p>
                    <p><span style = {{color:"#2D3092", fontWeight: "600"}}>Time:</span> <b>3:00 PM - 5:00 PM Everyday</b></p>
                    <button className = "home-btn" onClick = {handlebuttonClick}>Go to Home</button>
                </div>
                <div className = "registrationsuccessfull-section-2">
                    <img src = "/registrationsuccessfull.svg" alt = "image" className = "registrationsuccessfull-img"></img>
                </div>
            </div>
        </div>
    )
}
export default RegistrationSuccesfull;
