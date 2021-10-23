import React from 'react'
import Hero from './Hero/Hero'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
// import Section4 from './Section4/Section4'
import Section5 from './Section5/Section5'
import Section6 from './Section6/Section6'
import Section4 from "../French/Section3/Section3";
import {useEffect} from "react";
import "./vedic.css"
function Vedic() {

    //Whenever the component will load it would load from the start
    useEffect(() => {
        window.scrollTo(0,0);    
    }, [])
    return (
        <div className = "vedic">
            <Hero/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
        </div>
    )
}

export default Vedic
