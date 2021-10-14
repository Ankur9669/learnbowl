import React from 'react'
import "./section1.css";
import {useState, useEffect} from "react";
function Section1() 
{
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => 
    {
        window.addEventListener("resize", handleResize);
    }, [])

    function handleResize()
    {
        setWidth(window.innerWidth);
    }
    return (
        <div className = "frenchschool-section-1">
            <h3 className = "frenchschool-section-1-heading">Why <span style = {{color: "#2D3092"}}>Learn</span> frenchschool?</h3>
            {width > 650 ? 
            <div className = "frenchschool-section-1-cards">
                <div className = "frenchschool-section-1-card">
                    <img src = "/brainIcon.svg" className = "frenchschool-section-1-card-img"></img>
                    <h4 className = "frenchschool-section-1-card-text">Boosts <br/><span style = {{color: "#2D3092"}}>Brainpower</span></h4>
                </div>
                <div className = "frenchschool-section-1-card">
                    <img src = "/brainIcon.svg" className = "frenchschool-section-1-card-img"></img>
                    <h4 className = "frenchschool-section-1-card-text">Boosts <br/><span style = {{color: "#2D3092"}}>Brainpower</span></h4>
                </div>
                <div className = "frenchschool-section-1-card">
                    <img src = "/brainIcon.svg" className = "frenchschool-section-1-card-img"></img>
                    <h4 className = "frenchschool-section-1-card-text">Boosts <br/><span style = {{color: "#2D3092"}}>Brainpower</span></h4>
                </div>
                <div className = "frenchschool-section-1-card">
                    <img src = "/brainIcon.svg" className = "frenchschool-section-1-card-img"></img>
                    <h4 className = "frenchschool-section-1-card-text">Boosts <br/><span style = {{color: "#2D3092"}}>Brainpower</span></h4>
                </div>
                <div className = "frenchschool-section-1-card">
                    <img src = "/brainIcon.svg" className = "frenchschool-section-1-card-img"></img>
                    <h4 className = "frenchschool-section-1-card-text">Boosts <br/><span style = {{color: "#2D3092"}}>Brainpower</span></h4>
                </div>
                <div className = "frenchschool-section-1-card">
                    <img src = "/brainIcon.svg" className = "frenchschool-section-1-card-img"></img>
                    <h4 className = "frenchschool-section-1-card-text">Boosts <br/><span style = {{color: "#2D3092"}}>Brainpower</span></h4>
                </div>
            </div> 
            : 
            <div className = "frenchschool-section-1-cards-mobile">
                <div style = {{flex : "1"}}>
                    <div className = "frenchschool-section-1-card-mobile">
                        <img src = "/brainIcon.svg" className = "frenchschool-section-1-card-img-mobile"></img>
                        <h4 className = "frenchschool-section-1-card-text-mobile">Boosts <br/><span style = {{color: "#2D3092"}}>Brainpower</span></h4>
                    </div>
                    <div className = "frenchschool-section-1-card-mobile">
                        <img src = "/brainIcon.svg" className = "frenchschool-section-1-card-img-mobile"></img>
                        <h4 className = "frenchschool-section-1-card-text-mobile">Boosts <br/><span style = {{color: "#2D3092"}}>Brainpower</span></h4>
                    </div>
                    <div className = "frenchschool-section-1-card-mobile">
                        <img src = "/brainIcon.svg" className = "frenchschool-section-1-card-img-mobile"></img>
                        <h4 className = "frenchschool-section-1-card-text-mobile">Boosts <br/><span style = {{color: "#2D3092"}}>Brainpower</span></h4>
                    </div>
                </div>
                <div style = {{flex : "1"}}>
                    <div className = "frenchschool-section-1-card-mobile">
                        <img src = "/brainIcon.svg" className = "frenchschool-section-1-card-img-mobile"></img>
                        <h4 className = "frenchschool-section-1-card-text-mobile">Enhances <br/><span style = {{color: "#2D3092"}}>Decision Making</span></h4>
                    </div>
                    <div className = "frenchschool-section-1-card-mobile">
                        <img src = "/brainIcon.svg" className = "frenchschool-section-1-card-img-mobile"></img>
                        <h4 className = "frenchschool-section-1-card-text-mobile">Boosts <br/><span style = {{color: "#2D3092"}}>Brainpower</span></h4>
                    </div>
                    <div className = "frenchschool-section-1-card-mobile">
                        <img src = "/brainIcon.svg" className = "frenchschool-section-1-card-img-mobile"></img>
                        <h4 className = "frenchschool-section-1-card-text-mobile">Boosts <br/><span style = {{color: "#2D3092"}}>Brainpower</span></h4>
                    </div>
                </div>
                
                {/* <div className = "frenchschool-section-1-card">
                    <img src = "/brainIcon.svg" className = "frenchschool-section-1-card-img"></img>
                    <h4 className = "frenchschool-section-1-card-text">Boosts <br/><span style = {{color: "#2D3092"}}>Brainpower</span></h4>
                </div> */}
            </div>
       }
        </div>
    )
}

export default Section1
