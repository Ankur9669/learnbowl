import React from 'react'
import "./navbar.css";
import {useState, useEffect} from "react";
function Navbar() 
{
    const [width, setWidth] = useState(window.innerWidth);
    const [isMenuIconClicked, setMenuIconClicked] = useState(false);
    useEffect(() => 
    {
        window.addEventListener("resize", handleResize);
    }, [])

    function handleResize()
    {
        setWidth(window.innerWidth);
    }
    return (
        <nav className = "navbar">
            <div className = "navbar-icon">
                <h1 className = "navbar-text">LearnBowl</h1>
            </div>
            
            {
                width > 768 ? 
                <ul className = "menu-items">
                    <li className = "items">French</li>
                    <li className = "items">Vedic Maths</li>
                    <li className = "items">About Us</li>
                    <li className = "items">Courses</li>
                    <li className = "items">Contact Us</li>
                </ul> 
                : 
                <div>
                    <img src = "/menu.svg" className = "menu-icon" onClick = {() => setMenuIconClicked(!isMenuIconClicked)}></img>
                    {isMenuIconClicked ? 
                    <div className = "menu-items-mobiles">
                        <ul className = "menu-items">
                        <li className = "items">French</li>
                        <li className = "items">Vedic Maths</li>
                        <li className = "items">About Us</li>
                        <li className = "items">Courses</li>
                        <li className = "items">Contact Us</li>
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
