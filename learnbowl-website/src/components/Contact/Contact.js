import React from 'react'
import Section1 from './Section1/Section1'
import {useEffect} from "react";

function Contact() 
{
    //Whenever the component will load it would load from the start
    useEffect(() => {
        window.scrollTo(0,0);    
    }, [])
    return (
        <div className = "contact">
            <Section1/>
        </div>
    )
}

export default Contact
