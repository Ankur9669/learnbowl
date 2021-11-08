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
            <h3 className = "home-section-4-heading">Our <span style = {{color: "#2D3092"}}>Success Stories</span></h3>
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
                    4000: {
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
                    {/* Card one */}
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
                    {/* Card two */}
                    <div className = "home-section-4-card">
                    <img src = "/home-half-orange-ellipse.svg" alt = "" className = "home-section-4-card-pink-ellipse"></img>
                    <img src = "/home-half-orange-ellipse-mobile.svg" alt = "" className = "home-section-4-card-orange-ellipse-mobile"></img>
                        <p className = "home-section-4-card-text">
                            <img src = "/orange-quote-start.svg" className = "home-quote-start-orange" alt = "image"></img>
                            <img src = "/orange-quote-end.svg" className = "home-quote-end-orange" alt = "image"></img>
                            Our students loved the workshops and we received great feedback from 
                            them and their parents. It inculcated a sense of cultural exploration 
                            and a zeal to learn more about the French culture among students. 
                            The sessions were highly interactive with instant doubt-clearing. 
                            We highly recommend this course – especially if 
                            you are a school student because a foreign language opens up a world of opportunities. 
                         </p>
                         <div className = "home-section-4-card-reviewer-container">
                            <p className = "reviewer-name">Ms. Radhika Lobo</p>
                            <p className = "reviewer-designation">Principal</p>
                            <p className = "reviewer-place">DPS Banglore</p>
                         </div>
                    </div>
                    {/* Card Three */}
                    <div className = "home-section-4-card">
                    <img src = "/home-half-green-ellipse.svg" alt = "image" className = "home-section-4-card-pink-ellipse"></img>
                    <img src = "/home-half-green-ellipse-mobile.svg" alt = "image" className = "home-section-4-card-green-ellipse-mobile"></img>
                        <p className = "home-section-4-card-text">
                            <img src = "/green-quote-start.svg" className = "home-quote-start-green" alt = "image"></img>
                            <img src = "/green-quote-end.svg" className = "home-quote-end-green" alt = "image"></img>
                            In this day and age, it is very important to adapt. 
                            French is growing to be one of the most spoken languages in the world. 
                            LearnBowl approached our students and we have only received 
                            great feedback ever since. Our students found these classes interactive 
                            and found many key takeaways. The team is very 
                            supportive and makes us look forward to many more such workshops for our students
                         </p>
                         <div className = "home-section-4-card-reviewer-container">
                            <p className = "reviewer-name">Mr. Ram Goarty</p>
                            <p className = "reviewer-designation">Pricipal</p>
                            <p className = "reviewer-place">DPS Mumbai</p>
                         </div>
                    </div> 
                </Carousel>
                <Dots number = {3} value={value} onChange={onChange} thumbnails = {renderThumbnails()}></Dots>
            </div>
        </div>
    )
}

export default Section4
