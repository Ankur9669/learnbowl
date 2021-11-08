import React from "react";
import "./hero.css";
import { useState, useEffect, useRef } from "react";
import Axios from "../../../axios";
import { useHistory, useLocation } from "react-router-dom";
import cityArray from "../../cityArray";
function Home(prop) {
  const heroFrenchRef = prop.heroFrenchRef;
  let history = useHistory();
  // let location = useLocation();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestionList, setShowSuggestionList] = useState(true);
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [isdateButton1Clicked, setDateButton1Clicked] = useState(true);
  const [isdateButton2Clicked, setDateButton2Clicked] = useState(false);
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [studentGrade, setStudentGrade] = useState("5");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [whatsAppEnabled, setWhatsappEnabled] = useState(true);
  const [workshopdate1, setworkshopdate1] = useState("");
  const [workshopdate2, setworkshopdate2] = useState("");
  const [workshopdate1value, setworkshopdate1value] = useState("");
  const [workshopdate2value, setworkshopdate2value] = useState("");
  const [isNameValid, setNameValid] = useState(false);
  const [isContactNumberValild, setContactNumberValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isCityValid, setCityValid] = useState(false);
  const nameInputRef = useRef(null);
  const contactInputRef = useRef(null);
  const studentGradeInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const cityInputRef = useRef(null);

  useEffect(() => {
    let matches = [];
    // console.log(showSuggestionList);
    // console.log(count);
    if (city.length > 0) {
      matches = cityArray.filter((cityName) => {
        const regex = new RegExp(`${city}`, "gi");
        return cityName.match(regex);
      });
    }
    if (showSuggestionList === false) {
      setCount(count + 1);
      // console.log(count);
    }
    if (showSuggestionList === false && parseInt(count) > parseInt(1)) {
      setCount(0);
      setShowSuggestionList(true);
    }
    setSuggestions(matches);
  }, [city]);

  function onClickSuggestion(city) {
    setCity(city);
    setSuggestions([]);
    setShowSuggestionList(false);
  }
  function handleResize() {
    setWidth(window.innerWidth);
  }
  function handleLabelClick(labelNumber) {
    if (labelNumber === 1) {
      nameInputRef.current.focus();
    } else if (labelNumber === 2) {
      contactInputRef.current.focus();
    } else if (labelNumber === 3) {
      studentGradeInputRef.current.focus();
    } else if (labelNumber === 4) {
      emailInputRef.current.focus();
    } else if (labelNumber === 5) {
      cityInputRef.current.focus();
    }
  }
  //Function for validating name
  function onNameChangeHandler(e) {
    setName(e.target.value);
    let pattern = /^[a-zA-Z ]+$/;
    let result = pattern.test(e.target.value);
    if (result === false) {
      nameInputRef.current.style.border = "2px solid red";
      setNameValid(false);
    } else {
      nameInputRef.current.style.border = "1px solid #BCBCBC";
      setNameValid(true);
    }
  }
  //Function for validating number
  function onContactNumberChangeHandler(e) {
    setContactNumber(e.target.value);
    if (e.target.value.length === 10) {
      contactInputRef.current.style.border = "1px solid #BCBCBC";
      setContactNumberValid(true);
    } else {
      contactInputRef.current.style.border = "2px solid red";
      setContactNumberValid(false);
    }
  }
  //Function for validating email
  function onEmailChangeHandler(e) {
    setEmail(e.target.value);
    let pattern = /\S+@\S+\.\S+/;
    let result = pattern.test(e.target.value);
    if (result === false) {
      emailInputRef.current.style.border = "2px solid red";
    } else {
      emailInputRef.current.style.border = "1px solid #BCBCBC";
      //setEmailValid(true);
    }
  }
  //Function for validating city
  function onCityChangeHandler(e) {
    setCity(e.target.value);
    let pattern = /^[A-Za-z]+$/;
    let result = pattern.test(e.target.value);
    if (result === false) {
      cityInputRef.current.style.border = "2px solid red";
      setCityValid(false);
    } else {
      cityInputRef.current.style.border = "1px solid #BCBCBC";
      setCityValid(true);
    }
  }
  //This Function Will trigger when the user clickes on registernow button
  function handleFormSubmit(e) {
    e.preventDefault();
    let date = "";
    let isFormValid = false;
    if (isdateButton1Clicked == true) {
      date = workshopdate2value;
    } else {
      date = workshopdate1value;
    }
    if (isNameValid && isEmailValid && isContactNumberValild && isCityValid) {
      isFormValid = true;
      console.log("Valid Form");
    }
    if (isFormValid) {
      //Here we are posting the user entered data into db
      Axios.post("/postFrenchData", {
        name: name,
        contactNumber: contactNumber,
        studentGrade: studentGrade,
        email: email,
        city: city,
        whatsAppEnabled: whatsAppEnabled,
        workshopDate: date,
        url: window.location.href,
        course: "French",
      })
        .then((response) => {
          //if status is 201 we redirect it to new page
          //If status is 200 that means the user is already registered
          if (response.status === 200) {
            console.log("sno is: " + response.data[0].sno);
            localStorage.setItem("sno", response.data[0].sno);
            localStorage.setItem("messageTriggered", 0);

            Axios.post("/postRegistrationhistory", {
              name: name,
              contactNumber: contactNumber,
              studentGrade: studentGrade,
              email: email,
              city: city,
            })
              .then((response) => {
                history.push("/registrationsuccessful");
              })
              .catch((err) => {
                console.log(err);
                history.push("/registrationsuccessful");
              });
          }
          //If status is 201 that means it is a new registration
          if (response.status === 201) {
            localStorage.setItem("sno", response.data.insertId);
            localStorage.setItem("messageTriggered", 0);

            Axios.post("/postRegistrationhistory", {
              name: name,
              contactNumber: contactNumber,
              studentGrade: studentGrade,
              email: email,
              city: city,
            })
              .then((response) => {
                history.push("/registrationsuccessful");
              })
              .catch((err) => {
                console.log(err);
                history.push("/registrationsuccessful");
              });
          }
        })
        .catch((err) => {
          console.log("Error Happened" + err);
        });
    } else {
      alert("Please Check the Filled Details!!!");
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    //This would get the available workshopdates
    Axios.get("/getworkshopdates", {
      params: {
        workshoptype: "French",
      },
    })
      .then((response) => {
        //if status is 201 we redirect it to new page
        if (response.status === 200) {
          setworkshopdate1(response.data[0].workshopdates);
          setworkshopdate2(response.data[1].workshopdates);
          setworkshopdate1value(response.data[0].workshopvalue);
          setworkshopdate2value(response.data[1].workshopvalue);
        }
      })
      .catch((err) => {
        console.log("Error Happened" + err);
      });

    //CleanUp
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="hero-french" ref={heroFrenchRef}>
      <img src="/french-wave-1.svg" alt="wave" className="french-wave1" />
      <img src="/french-wave-2.svg" alt="wave" className="french-wave2" />
      <img src="/french-wave-3.svg" alt="wave" className="french-wave3" />
      <img src="/french-wave-4.svg" alt="wave" className="french-wave4" />
      <div className="hero-french-section-1">
        <div className="hero-french-section-1-text">
          <p className="hero-french-section-1-info-1">
            Learn from India’s best teachers!
          </p>
          {/* <h1 className = "hero-french-section-1-heading">Learn<img src = "/frenchText.svg" alt = "frenchText"/>the fun way with us. Join Now!</h1> */}
          <h1 className="hero-french-section-1-heading">
            Learn&nbsp;
            <div className="frenchText">
              French
              <div className="circle-right-top"></div>
              <div className="circle-right-bottom"></div>
              <div className="circle-left-top"></div>
              <div className="circle-left-bottom"></div>
            </div>
            &nbsp;the fun way with us. Join Now!
          </h1>
          {width > 768 && (
            <p className="hero-french-section-1-info-2">
              Learn French Online: Register for workshop
            </p>
          )}
          {width < 768 && (
            <p className="hero-french-section-1-info-2">
              Learn Online: Register for workshop
            </p>
          )}
        </div>
        <div className="hero-french-section-1-img-container">
          <img
            src="frenchheroimg.svg"
            className="hero-french-section-1-img"
          ></img>
        </div>
      </div>
      <div className="hero-french-section-2">
        {width > 800 ? (
          <img
            src="/frenchHeroImgBastille.svg"
            alt="image"
            className="french-hero-section-2-bastille"
          ></img>
        ) : (
          <img
            src="/frenchHeroImgBastille.svg"
            alt="image"
            className="french-hero-section-2-bastille"
          ></img>
        )}
        <h3
          className="hero-french-section-2-heading"
          style={{ marginRight: "40px" }}
        >
          Register with us to know more
        </h3>
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <div className="input-box">
            <input
              type="text"
              className="input"
              ref={nameInputRef}
              onChange={(e) => onNameChangeHandler(e)}
              value={name}
              required
            ></input>
            <label className="input-label" onClick={() => handleLabelClick(1)}>
              <span style={{ color: "red" }}>*</span>Name
            </label>
          </div>

          <div className="input-box">
            <input
              type="text"
              className="input"
              ref={contactInputRef}
              onChange={(e) => onContactNumberChangeHandler(e)}
              value={contactNumber}
              pattern="[0-9]*"
              required
            ></input>
            <label className="input-label" onClick={() => handleLabelClick(2)}>
              <span style={{ color: "red" }}>*</span>Contact No
            </label>
          </div>

          <div className="input-box">
            <select
              className="input"
              ref={studentGradeInputRef}
              onChange={(e) => setStudentGrade(e.target.value)}
              value={studentGrade}
              required
            >
              {/* <option></option> */}
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
            </select>
            <label className="input-label" onClick={() => handleLabelClick(3)}>
              <span style={{ color: "red" }}>*</span>Student Grade
            </label>
          </div>

          <div className="input-box">
            <input
              type="email"
              className="input"
              ref={emailInputRef}
              onChange={(e) => onEmailChangeHandler(e)}
              value={email}
            ></input>
            <label className="input-label" onClick={() => handleLabelClick(4)}>
              Email
            </label>
          </div>

          <div className="input-box">
            <input
              type="text"
              className="input"
              ref={cityInputRef}
              onChange={(e) => onCityChangeHandler(e)}
              value={city}
              required
            ></input>
            <label className="input-label" onClick={() => handleLabelClick(5)}>
              <span style={{ color: "red" }}>*</span>City
            </label>
            <div className="dropdown-list">
              {suggestions.length >= 1 && showSuggestionList ? (
                suggestions.map((suggestion, i) => {
                  return (
                    <div
                      key={i}
                      className="dropdown-list-elements"
                      onClick={() => onClickSuggestion(suggestion)}
                    >
                      {suggestion}
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="french-hero-section-2-date-container">
            <button
              type="button"
              className={
                isdateButton1Clicked
                  ? "french-hero-section-2-date-btn-active"
                  : "french-hero-section-2-date-btn"
              }
              onClick={() => {
                setDateButton1Clicked(true);
                setDateButton2Clicked(false);
              }}
              value={workshopdate2value}
            >
              {workshopdate2}
            </button>
            <button
              type="button"
              className={
                isdateButton2Clicked
                  ? "french-hero-section-2-date-btn-active"
                  : "french-hero-section-2-date-btn"
              }
              onClick={() => {
                setDateButton1Clicked(false);
                setDateButton2Clicked(true);
              }}
              value={workshopdate1value}
            >
              {workshopdate1}
            </button>
          </div>
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            className="checkbox"
            onChange={() => setWhatsappEnabled(!whatsAppEnabled)}
            checked={whatsAppEnabled}
          ></input>
          <label
            style={{ color: "red" }}
            for="checkbox"
            className="checkbox-label"
          >
            Get Class reminder on whatsapp
          </label>
          <button type="submit" className="register-btn">
            Register For Free
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
