import React from 'react'
import "./navbar.css";
function navbar() {
    return (
        <nav className = "navbar">
            <div className = "navbar-icon">
                <h1 className = "navbar-text">LearnBowl</h1>
            </div>
            
            <ul className = "menu-items">
                <li className = "items">Ankur</li>
                <li className = "items">Priya</li>
                <li className = "items">Priya</li>
                <li className = "items">Sanskar</li>
                <li className = "items">Harshu</li>
            </ul>
        </nav>
    )
}

export default navbar
