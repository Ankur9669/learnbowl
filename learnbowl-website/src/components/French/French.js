import React from 'react'
import Hero from '../French/Hero/Hero';

import "./french.css";
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Section5';
function French() {
    return (
        <div className = "french">
            <Hero/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
        </div>
    )
}

export default French;
