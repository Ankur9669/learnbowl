import React from 'react'
import "./section1.css";
import Section1Card from './Section1Card';
function Section1() {
    return (
        <div className = "section-1">
            <label for = "section-1-heading" className = "section-1-heading">
                Advantages of French Learning
            </label>
            <div className = "cards">
                <Section1Card/>
                <Section1Card/>
                <Section1Card/>
                <Section1Card/>
                <Section1Card/>
                <Section1Card/>
                <Section1Card/>
                <Section1Card/>
                <Section1Card/>
            </div>
            
        </div>
    )
}

export default Section1
