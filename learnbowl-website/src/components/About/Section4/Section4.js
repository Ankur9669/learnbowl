import React from 'react';
import "./section4.css";
function Section4() {
    return (
        <div className = "about-section-4">
            <h3 className = "about-section-4-heading"><span style = {{color: "#2d3092"}}>LearnBowl</span> treats you as it’s own</h3>
            <img src = "about-section-dotted-line.svg" alt = "image" className = "horizontal-line-1"/>
            <img src = "about-section-vertical-dotted-line.svg" alt = "image" className = "horizontal-line-2"/>
            <img src = "about-section-dotted-line.svg" alt = "image" className = "horizontal-line-4"/>
            <div className = "about-section-4-section-1">
                <img src = "about-section-4-vertical-dots-mob.svg" alt = "image" className = "about-section-4-section-1-vertical-line"/>
                <div className = "about-section-4-section-1-img-container">
                    <img src = "/about-section4-section-1.svg" alt = "image" className = "about-section-4-section-1-img"></img>
                </div>
                <div className = "about-section-4-section-1-txt-container">
                    <div className = "txt-container">
                        <p className = "txt-container-name">Amikesh Shrivastava</p>
                        <p className = "txt-container-std">Intermediate French, STD - 5</p>
                        <p className = "txt-container-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, scelerisque senectus metus, tincidunt ut ultrices faucibus ac. Non massa at fermentum congue risus</p>
                    </div>
                </div>
            </div>
            <div className = "about-section-4-section-2">
            <img src = "about-section-4-vertical-dots-mob.svg" alt = "image" className = "about-section-4-section-2-vertical-line"/>
                <div className = "about-section-4-section-2-txt-container">
                    <div className = "txt-container">
                        <p className = "txt-container-name">Amikesh Shrivastava</p>
                        <p className = "txt-container-std">Intermediate French, STD - 5</p>
                        <p className = "txt-container-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, scelerisque senectus metus, tincidunt ut ultrices faucibus ac. Non massa at fermentum congue risus</p>
                    </div>
                </div>
                <div className = "about-section-4-section-2-img-container">
                    <img src = "/about-section-4-section-2.svg" alt = "image" className = "about-section-4-section-2-img"></img>
                </div>
            </div>
            <div className = "about-section-4-section-3">
            <div className = "about-section-4-section-3-img-container">
                    <img src = "/about-section-4-section-3.svg" alt = "image" className = "about-section-4-section-3-img"></img>
                </div>
                <div className = "about-section-4-section-3-txt-container">
                    <div className = "txt-container">
                        <p className = "txt-container-name">Amikesh Shrivastava</p>
                        <p className = "txt-container-std">Intermediate French, STD - 5</p>
                        <p className = "txt-container-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, scelerisque senectus metus, tincidunt ut ultrices faucibus ac. Non massa at fermentum congue risus</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4
