import React from 'react'
import "./navbar.css";
import {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { useHistory } from "react-router-dom";
  import {useLocation} from "react-router-dom";
function Navbar(props) 
{
    let history = useHistory();
    let location = useLocation();
    const [width, setWidth] = useState(window.innerWidth);
    const [isMenuIconClicked, setMenuIconClicked] = useState(false);
    const [itemClickedNumber, setItemClickedNumber] = useState(1);
    useEffect(() => 
    {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    useEffect(() => {
        //console.log(location.pathname + "Ankur")
        if(location.pathname === "/")
        {
            setItemClickedNumber(1);
        }
        else if(location.pathname === "/french")
        {
            setItemClickedNumber(2);
        }
        else if(location.pathname === "/vedic")
        {
            setItemClickedNumber(3);
        }
        else if(location.pathname === "/about")
        {
            setItemClickedNumber(4);
        }
        else if(location.pathname === "/contact")
        {
            setItemClickedNumber(5);
        }
    }, [location.pathname])

    function handleResize()
    {
        setWidth(window.innerWidth);
    }
    function handleClick(number)
    {
        setMenuIconClicked(false);
        if(number == 1)
        {
            history.push("/");
        }
        else if(number == 2){
            history.push("/french");
        }
        else if(number == 3){
            history.push("/vedic");
        }
        else if(number == 4){
            history.push("/about");
        }
        else if(number == 5){
            history.push("/contact");
        }
    }
    return (
        <nav className = "navbar">
            <div className = "navbar-icon" onClick = {() => history.push("/")}>
                <img src = "/learnbowlIcon1.svg" className = "learnbowl-icon" alt = "image"></img>
            </div>
            {
                width > 940 ? 
                <ul className = "menu-items">
                    <li className = {itemClickedNumber == 1 ? "items-active" : "items"} onClick = {() => handleClick(1)}>Home</li>
                    <li className = {itemClickedNumber == 2 ? "items-active" : "items"} onClick = {() => handleClick(2)}>French</li>
                    <li className = {itemClickedNumber == 3 ? "items-active" : "items"} onClick = {() => handleClick(3)}>Vedic Maths</li>
                    <li className = {itemClickedNumber == 4 ? "items-active" : "items"} onClick = {() => handleClick(4)}>About</li>
                    <li className = {itemClickedNumber == 5 ? "items-active" : "items"} onClick = {() => handleClick(5)}>Contact</li>  
                </ul> 
                : 
                <div>
                    <img src = "/menu.svg" className = "menu-icon" alt = "image" onClick = {() => setMenuIconClicked(!isMenuIconClicked)}></img>
                    {isMenuIconClicked ? 
                    <div className = "menu-items-mobiles">
                        <img alt = "image" src = "/orangeFullEllipse.svg" className = "nav-mob-orange-ellipse"/>
                        <img alt = "image" src = "/about-section-blue-ellipse.svg" className = "nav-mob-blue-ellipse"/>
                        <ul className = "menu-items">
                            <img alt = "close" src = "/navbar-close.svg" className = "nav-close-icon" onClick = {() => setMenuIconClicked(!isMenuIconClicked)}/>
                            <li className = {itemClickedNumber == 1 ? "items-active-mob" : "items"} onClick = {() => handleClick(1)}>
                                <div className = "mobile-nav-item">
                                    <img alt = "image" src = "/homeIconNav.svg"/>
                                    Home
                                </div>
                            </li>
                            <li className = {itemClickedNumber == 2 ? "items-active-mob" : "items"} onClick = {() => handleClick(2)}>
                                <div className = "mobile-nav-item">
                                    <img alt = "image" src = "/frenchIconNav.svg"/>
                                    French
                                </div>
                            </li>
                            <li className = {itemClickedNumber == 3 ? "items-active-mob" : "items"} onClick = {() => handleClick(3)}>
                                <div className = "mobile-nav-item">
                                    <img alt = "image" src = "/vedicIconNav.svg"/>
                                    Vedic Maths
                                </div>
                            </li>
                            
                            <li className = {itemClickedNumber == 4 ? "items-active-mob" : "items"} onClick = {() => handleClick(4)}>
                                <div className = "mobile-nav-item">
                                    <img alt = "image" src = "/aboutIconNav.svg"/>
                                    About Us
                                </div>
                            </li>
                            <li className = {itemClickedNumber == 5 ? "items-active-mob" : "items"} onClick = {() => handleClick(5)}>
                                <div className = "mobile-nav-item">
                                    <img alt = "image" src = "/contact-section-call.svg"/>
                                    Contact us
                                </div>
                            </li>  
                        </ul> 
                    </div> 
                    : 
                    <></>
                    }
                </div>
                
            }
            
        </nav>
    )
}

export default Navbar

