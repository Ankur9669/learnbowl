import React, {useState, useEffect} from 'react'
import "./section5.css";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import {useHistory} from "react-router-dom";
function Section5() {
    const history = useHistory();
    const [value, setValue] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);


    useEffect(() => 
    {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);
    
    useEffect(() => 
    {
        if(parseInt(width) > parseInt(900))
        {
            setValue(1);
        } 
        else{
            setValue(0);
        }  
    }, [width]);

    function handleResize()
    {
        setWidth(window.innerWidth);  
    }
    function handleBeginnersClick()
    {
        history.push("/contact");
    }
    function handleIntemidiateClick()
    {
        history.push("/contact");
    }
    function handleAdvancedClick()
    {
        history.push("/contact");
    }
    return (
        // All the card css from french section 4
        <div className = "french-section-4">
        <object data = "/vedic-section-5-img.svg" type = "image/svg+xml" alt = "image" className = "vedic-section-5-image"></object>
        <h3 className = "french-section-4-heading">Our Popular <span style = {{color: "#2D3092"}}>Vedic Maths</span> Courses</h3>
        <div className = "carausel-container">
        <Carousel
            value={value}
            onChange = {() => setValue(value + 1)}
            draggable={false}
            plugins={[
                'centered',
                'infinite',
                {
                resolve: slidesToShowPlugin,
                options: {
                numberOfSlides: 3
                }
                },
            ]}
            breakpoints={{
            480: {
                plugins: [
                'infinite',
                'arrows',
                'centered',
                {
                resolve: slidesToShowPlugin,
                options: {
                numberOfSlides: 1
                }
                },
            ]
            },
            700: {
                    plugins: [
                    'infinite',
                    'arrows',
                    'centered',
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 1.5
                }
                },
            ]
            },
            900: {
                plugins: [
                'infinite',
                'arrows',
                'centered',
                {
                resolve: slidesToShowPlugin,
                options: {
                    numberOfSlides: 2
                }
                },
            ]
            },
            1200: {
                plugins: [
                'infinite',
                'centered',
                {
                resolve: slidesToShowPlugin,
                options: {
                    numberOfSlides: 3
                }
                },
            ]
            },
        }}>
        {/* Basic workshop Card */}
      <div className = "french-section-4-card">
            <div className = "french-section-4-card-part-1">
                <h4 >Classes 5-12+</h4>
                <h3>Beginner</h3>
                <h5>Curriculum consists of: </h5>
                <div className = "french-section-4-card-part-1-points">
                <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Live online classes</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Useful Course Materials</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>In depth teaching of core topics</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Focus on skill development</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>16 Classes during 2 months</p>                        
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Completion Certificate</p>
                        </div>
                </div>
            </div>
            <div className = "french-section-4-card-part-2">
                <div className = "french-section-4-card-part-2-price-container">
                    <div className = "discounted-price">
                        {/* <img src = "/rupeeSymbol.svg"/> */}
                        <p>&#8377;4,499</p>
                    </div>
                    <div className = "real-price">
                        <p>&#8377; 5,499</p>
                    </div>
                    <div className = "discount-percent">
                        18% off
                    </div>
                </div>
                <div className = "french-section-4-card-part-2-info-container">
                    <p className = "info">16 Classes, Rs 280 per session</p>
                </div>
            </div>
            <div className = "french-section-4-card-part-2-btn-container">
                <button className = "btn"  onClick = {handleBeginnersClick}>Join Now</button>
            </div>
      </div>
        {/* Intemidiate Click */}
        <div className = "french-section-4-card" >
        <div className = "french-section-4-card-part-1">
                    <h4 >Classes 5-12+</h4>
                    <h3>Intermediate</h3>
                    <h5>Curriculum consists of: </h5>
                    <div className = "french-section-4-card-part-1-points">
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Live online classes</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Useful Course Materials</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>In depth teaching of core topics</p>
                        </div>  
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Focus on skill development</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>32 Classes during 4 months</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Completion Certificate </p>
                        </div>
                    </div>
                </div>
            <div className = "french-section-4-card-part-2">
                <div className = "french-section-4-card-part-2-price-container">
                    <div className = "discounted-price">
                            {/* <img src = "/rupeeSymbol.svg"/> */}
                            <p>&#8377;8,299</p>
                        </div>
                        <div className = "real-price">
                            <p>	&#xA0; &#8377; 10,499 &#xA0;</p>
                        </div>
                        <div className = "discount-percent">
                            21% off
                        </div>
                </div>
                <div className = "french-section-4-card-part-2-info-container">
                    <p className = "info">32 Classes, Rs 260 per session</p>
                </div>
            </div>
            <div className = "french-section-4-card-part-2-btn-container">
                <button className = "btn" onClick = {handleIntemidiateClick}>Join Now</button>
            </div>
        </div>
        {/* Advanced Card */}
      <div className = "french-section-4-card" >
            <div className = "french-section-4-card-part-1">
                <h4 >Classes 5-12+</h4>
                <h3>Advanced</h3>
                <h5>Curriculum consists of: </h5>
                <div className = "french-section-4-card-part-1-points">
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Live online classes</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Useful Course Materials</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>In depth teaching of core topics</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Focus on skill development</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>48 Classes during 6 months</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Completion Certificate </p>
                        </div>
                </div>
            </div>
            <div className = "french-section-4-card-part-2">
                <div className = "french-section-4-card-part-2-price-container">
                    <div className = "discounted-price">
                        {/* <img src = "/rupeeSymbol.svg"/> */}
                        <p>&#8377;10,499</p>
                    </div>
                    <div className = "real-price">
                        <p>&#8377; 13,999</p>
                    </div>
                    <div className = "discount-percent">
                        25% off
                    </div>
                </div>
                <div className = "french-section-4-card-part-2-info-container">
                    <p className = "info">48 Classes, Rs 220 per session</p>
                </div>
            </div>
            <div className = "french-section-4-card-part-2-btn-container">
                <button className = "btn" onClick = {handleAdvancedClick}>Join Now</button>
            </div>
      </div>
      
    </Carousel>

        </div>
    </div>
    )
}

export default Section5
