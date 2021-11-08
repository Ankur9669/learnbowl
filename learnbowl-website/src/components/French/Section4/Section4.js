import React, {useState, useEffect} from 'react'
import "./section4.css";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import {useHistory} from "react-router-dom";
function Section4(prop) {
    const scrollToHeroFrenchSection = prop.scrollToHeroFrenchSection;
    const history = useHistory();
    const [value, setValue] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => 
    {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])
    
    useEffect(() => 
    {
        if(parseInt(width) > parseInt(900))
        {
            setValue(1);
        } 
        else{
            setValue(0);
        }  
    }, [width])
    function handleResize()
    {
        setWidth(window.innerWidth);  
    }
    function handleIntermidiateClick()
    {
        history.push("/contact");
    }
    function handleAdvancedClick()
    {
        history.push("/contact");
    }
    
    return (
        <div className = "french-section-4">
            <img src = "/frenchCountry.svg" alt = "french-country" className = "french-country-img"></img>
            <h3 className = "french-section-4-heading">Our Popular <span style = {{color: "#2D3092"}}>French</span> Courses</h3>
            <div className = "carausel-container">
            <Carousel
                value={value}
                onChange = {() => setValue(value + 1)}
                draggable={false}
                plugins={[
                    'infinite',
                    'centered',
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 3
                    }
                    },
                ]}
                breakpoints={{
                520: {
                    plugins: [
                    'infinite',
                    'arrows',
                    'centered',
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 1.4
                    }
                    },
                ]
                },
                480: {
                    plugins: [
                    'infinite',
                    'arrows',
                    'centered',
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 1.2
                    }
                    },
                ]
                },
                420: {
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
            {/* Basic Workshop */}
            <div className = "french-section-4-card">
                <div className = "french-section-4-card-part-1">
                    <h4 >Classes 5-12+</h4>
                    <h3>Basic Workshop</h3>
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
                            <p>Interactive Workshop</p>
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
                            <p>&#8377;49</p>
                        </div>
                        <div className = "real-price">
                            <p>&#xA0;&#8377; 399&#xA0;</p>
                        </div>
                        <div className = "discount-percent">
                            87% off
                        </div>
                    </div>
                    <div className = "french-section-4-card-part-2-info-container">
                        <p className = "info">3 Classes, Rs 16 per session</p>
                    </div>
                </div>
                <div className = "french-section-4-card-part-2-btn-container">
                    <button className = "btn" onClick = {scrollToHeroFrenchSection()}>Join Now</button>
                </div>
            </div>
            {/* Intermidiate */}
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
                            <p>25 Classes during 1.5 months</p>
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
                            <p>&#8377;4,449</p>
                        </div>
                        <div className = "real-price">
                            <p>	&#xA0; &#8377; 6,299 &#xA0;</p>
                        </div>
                        <div className = "discount-percent">
                            29% off
                        </div>
                    </div>
                    <div className = "french-section-4-card-part-2-info-container">
                        <p className = "info">25 Classes, Rs 180 per session</p>
                    </div>
                </div>
                <div className = "french-section-4-card-part-2-btn-container">
                    <button className = "btn" onClick = {() => handleIntermidiateClick()}>Join Now</button>
                </div>
          </div>
          {/* Advanced Workshop */}
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
                            <p>50 Classes during 3 months</p>
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
                            <p>&#8377;7,999</p>
                        </div>
                        <div className = "real-price">
                            <p>&#xA0;&#8377; 12599&#xA0;</p>
                        </div>
                        <div className = "discount-percent">
                            36% off
                        </div>
                    </div>
                    <div className = "french-section-4-card-part-2-info-container">
                        <p className = "info">50 Classes, Rs 160 per session</p>
                    </div>
                </div>
                <div className = "french-section-4-card-part-2-btn-container">
                    <button className = "btn" onClick = {() => handleAdvancedClick()}>Join Now</button>
                </div>
          </div>
        </Carousel>

            </div>
        </div>
    )
}

export default Section4
