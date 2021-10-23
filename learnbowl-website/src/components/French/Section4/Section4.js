import React from 'react'
import "./section4.css";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import {useHistory} from "react-router-dom";
function Section4(prop) {
    const scrollToHeroFrenchSection = prop.scrollToHeroFrenchSection;
    const history = useHistory();
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
            <div className = "french-section-4-card" onClick = {() => handleIntermidiateClick()}>
                <div className = "french-section-4-card-part-1">
                    <h4 >Classes 6-8</h4>
                    <h3>Basic Workshop</h3>
                    <h5>Curriculum consists of: </h5>
                    <div className = "french-section-4-card-part-1-points">
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>
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
                            <p>	&#xA0; &#8377; 399 &#xA0;</p>
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
                    <button className = "btn">Join Now</button>
                </div>
          </div>
          <div className = "french-section-4-card" onClick = {() => handleAdvancedClick()}>
                <div className = "french-section-4-card-part-1">
                    <h4 >Classes 6-8</h4>
                    <h3>Basic Workshop</h3>
                    <h5>Curriculum consists of: </h5>
                    <div className = "french-section-4-card-part-1-points">
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>
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
                    <button className = "btn">Join Now</button>
                </div>
          </div>
          <div className = "french-section-4-card" onClick = {scrollToHeroFrenchSection()}>
                <div className = "french-section-4-card-part-1">
                    <h4 >Classes 6-8</h4>
                    <h3>Basic Workshop</h3>
                    <h5>Curriculum consists of: </h5>
                    <div className = "french-section-4-card-part-1-points">
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>                        
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>
                        </div>
                        <div className = "french-section-4-card-part-1-point">
                            <img src = "/checkedBox.svg"/>
                            <p>Alphabets</p>
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
                    <button className = "btn">Join Now</button>
                </div>
          </div>
        </Carousel>

            </div>
        </div>
    )
}

export default Section4
