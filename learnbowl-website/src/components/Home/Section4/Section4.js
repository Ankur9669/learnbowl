import React from 'react';
import "./section4.css";
import {useState} from "react";
import Carousel, { autoplayPlugin, Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
function Section4() 
{
    const [value, setValue] = useState(0);
    function onChange(value) {
        setValue(value);
    }

    //This would Highlight the dot in the caraousel 
    const highlightActiveDot = index => {
        if (value < 0) {
          return Math.abs(
            value % 3 === 0 ? 0 : (value % 3) + 3
          ) === index
            ? "#2d3092"
            : "rgba(45, 48, 146, 0.3)";
        }
    
        return value % 3 === index ? "#2d3092" : "rgba(45, 48, 146, 0.3)";
      };
    
    //This would style the dots
     const renderThumbnails = () => {
        return Array(3)
          .fill()
          .map((_, index) => (
            <div
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "200px",
                marginTop: "20px",
                marginBottom: "40px",
                backgroundColor: highlightActiveDot(index)
              }}
            />
          ));
      };
    return (
        <div className = "home-section-4">
            <h3 className = "home-section-4-heading">Our <span style = {{color: "#2D3092"}}>Accomplishments</span></h3>
            <div className = "home-section-4-caraousel-container">
                <Carousel
                    value={value}
                    onChange={onChange}
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
                    2500: {
                        plugins: [
                        'infinite',
                        'centered',
                        { 
                            resolve: slidesToShowPlugin,
                            options: {
                            numberOfSlides: 1.5,
                            interval: 5000
                            }
                        },
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 5000
                            }
                        }
                    ]
                    },
                    1300: {
                        plugins: [
                        'infinite',
                        'centered',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                            numberOfSlides: 1.2
                            }
                        },
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 5000
                            }
                        }
                    ]
                    },
                    1080: {
                        plugins: [
                        'infinite',
                        'centered',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                            numberOfSlides: 2
                            }
                        },
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 5000
                            }
                        }
                    ]
                    },
                    680: {
                        plugins: [
                        'infinite',
                        'centered',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                            numberOfSlides: 1.5
                            }
                        },
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 5000
                            }
                        }
                    ]
                    },
                    480: {
                        plugins: [
                        'infinite',
                        'centered',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                            numberOfSlides: 1.3
                            }
                        },
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 5000
                            }
                        }
                    ]
                    },
                    380: {
                        plugins: [
                        'infinite',
                        'centered',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                            numberOfSlides: 1
                            }
                        },
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 5000
                            }
                        }
                    ]
                    },
                }}>
                    <div className = "home-section-4-card">
                        <img src = "/home-half-pink-ellipse.svg" alt = "" className = "home-section-4-card-pink-ellipse"></img>
                        <img src = "/home-half-pink-ellipse-mobile.svg" alt = "" className = "home-section-4-card-pink-ellipse-mobile"></img>
                        <p className = "home-section-4-card-text">
                            <img src = "/home-quote-start.svg" className = "home-quote-start" alt = "image"></img>
                            <img src = "/home-quote-end.svg" className = "home-quote-end" alt = "image"></img>
                            Being a language teacher myself, 
                            I highly recommend that students sign up for this French 
                            workshop because it expands the students’ horizons. It teaches them how to communicate and build relationships, and also about various cultures. This is very important to grow holistically. They have started understanding and appreciating literature
                            more. I definitely recommend and urge all students to give this a go.
                        </p>
                         <div className = "home-section-4-card-reviewer-container">
                            <p className = "reviewer-name">Ms. Asha Jaisingh</p>
                            <p className = "reviewer-designation">Teacher</p>
                            <p className = "reviewer-place">St. Mary’s Kolkata</p>
                         </div>
                    </div>
                    <div className = "home-section-4-card">
                    <img src = "/home-half-pink-ellipse.svg" alt = "" className = "home-section-4-card-pink-ellipse"></img>
                    <img src = "/home-half-pink-ellipse-mobile.svg" alt = "" className = "home-section-4-card-pink-ellipse-mobile"></img>
                        <p className = "home-section-4-card-text">
                            <img src = "/home-quote-start.svg" className = "home-quote-start" alt = "image"></img>
                            <img src = "/home-quote-end.svg" className = "home-quote-end" alt = "image"></img>
                            Being a language teacher myself, 
                            I highly recommend that students sign up for this French 
                            workshop because it expands the students’ horizons. It teaches them how to communicate and build relationships, and also about various cultures. This is very important to grow holistically. They have started understanding and appreciating literature
                            more. I definitely recommend and urge all students to give this a go.
                         </p>
                         <div className = "home-section-4-card-reviewer-container">
                            <p className = "reviewer-name">Ms. Asha Jaisingh</p>
                            <p className = "reviewer-designation">Teacher</p>
                            <p className = "reviewer-place">St. Mary’s Kolkata</p>
                         </div>
                    </div>
                    <div className = "home-section-4-card">
                    <img src = "/home-half-pink-ellipse.svg" alt = "" className = "home-section-4-card-pink-ellipse"></img>
                    <img src = "/home-half-pink-ellipse-mobile.svg" alt = "" className = "home-section-4-card-pink-ellipse-mobile"></img>
                        <p className = "home-section-4-card-text">
                            <img src = "/home-quote-start.svg" className = "home-quote-start" alt = "image"></img>
                            <img src = "/home-quote-end.svg" className = "home-quote-end" alt = "image"></img>
                            Being a language teacher myself, 
                            I highly recommend that students sign up for this French 
                            workshop because it expands the students’ horizons. It teaches them how to communicate and build relationships, and also about various cultures. This is very important to grow holistically. They have started understanding and appreciating literature
                            more. I definitely recommend and urge all students to give this a go.
                         </p>
                         <div className = "home-section-4-card-reviewer-container">
                            <p className = "reviewer-name">Ms. Asha Jaisingh</p>
                            <p className = "reviewer-designation">Teacher</p>
                            <p className = "reviewer-place">St. Mary’s Kolkata</p>
                         </div>
                    </div> 
                </Carousel>
                <Dots number = {3} value={value} onChange={onChange} thumbnails = {renderThumbnails()}></Dots>
            </div>
        </div>
    )
}

export default Section4
