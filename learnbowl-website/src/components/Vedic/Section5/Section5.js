import React from 'react'
import "./section5.css";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
function Section5() {
    return (
        <div className = "french-section-4">
        <h3 className = "french-section-4-heading">Our Popular <span style = {{color: "#2D3092"}}>Vedic Maths</span> Courses</h3>
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
        <div className = "french-section-4-card">
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
                        <p>&#8377; 399</p>
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
      <div className = "french-section-4-card">
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
                        <p>&#8377; 399</p>
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
      <div className = "french-section-4-card">
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
                        <p>&#8377; 399</p>
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

export default Section5
