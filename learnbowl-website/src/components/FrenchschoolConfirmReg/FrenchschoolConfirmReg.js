import React from "react";
import "./frenchschoolconfirmreg.css";
import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router";
import Axios from "../../axios";
function FrenchschoolConfirmReg() {
  const history = useHistory();
  const contactInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const [name, setName] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [city, setCity] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [workshopDate, setWorkShopDate] = useState("");
  const [url, setUrl] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [whatsAppEnabled, setWhatsappEnabled] = useState(false);
  const [isContactNumberValild, setContactNumberValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    let isFormValid = false;

    if (isContactNumberValild && isEmailValid) {
      isFormValid = true;
    }
    if (isFormValid) {
      Axios.post("/postFrenchSchoolFormData", {
        name: name,
        contactNumber: contactNumber,
        studentGrade: studentGrade,
        email: email,
        city: city,
        whatsAppEnabled: whatsAppEnabled,
        workshopDate: workshopDate,
        url: window.location.href,
        course: "French",
        schoolName: schoolName,
      })
        .then((response) => {
          //if status is 201 we redirect it to new page
          if (response.status === 200) {
            //console.log("sno is: " + response.data[0].sno);
            localStorage.setItem("sno", response.data[0].sno);
            history.push("/registrationsuccessful");
            localStorage.setItem("messageTriggered", 0);
          }
          if (response.status === 201) {
            //console.log("sno is: " + response.data.insertId);
            localStorage.setItem("sno", response.data.insertId);
            history.push("/registrationsuccessful");
            localStorage.setItem("messageTriggered", 0);
          }
        })
        .catch((err) => {
          console.log("Error Happened" + err.message);
        });
    } else {
      alert("Please Check the Filled Details!!!");
    }
  }
  function handleLabelClick(labelNumber) {
    if (labelNumber === 1) {
      contactInputRef.current.focus();
    } else if (labelNumber === 2) {
      emailInputRef.current.focus();
    }
  }
  useEffect(() => {
    document.title =
      "Online French Learning-Best Teachers for School, College Students";
    const sno = localStorage.getItem("sno");
    console.log(sno);
    Axios.get("/getuserfromschoolregistration", {
      params: {
        sno: sno,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data[0].name);
          setName(response.data[0].name);
          setStudentGrade(response.data[0].standard);
          setSchoolName(response.data[0].schoolName);
          setCity(response.data[0].city);
          setWorkShopDate(response.data[0].workshopDates);
          setUrl(response.data[0].url);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      setEmailValid(false);
    } else {
      emailInputRef.current.style.border = "1px solid #BCBCBC";
      setEmailValid(true);
    }
  }
  return (
    <div className="frenchschoolconfirmreg">
      <img
        src="frenchcountry.svg"
        alt="image"
        className="frenchschoolconfirmreg-frenchcountry-img"
      ></img>
      <img
        src="frenchHeroImgBastille.svg"
        alt="image"
        className="frenchschoolconfirmreg-bastille-img"
      ></img>
      <h3 className="frenchschoolconfirmreg-heading">Almost There!</h3>
      <p className="frenchschoolconfirmreg-sub-heading">Hey {name},</p>
      <p className="frenchschoolconfirmreg-txt">
        You are just a few spaces away from registering for our Workshop. Fill
        in these remaining details and you???ll be good to go.
      </p>

      <form
        className="frenchschoolconfirmreg-form"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <h3 className="frenchschoolconfirmreg-form-heading">
          Register with us to know more
        </h3>
        <div className="input-box">
          <input
            type="text"
            className="input-frenchschoolconfirm"
            ref={contactInputRef}
            onChange={(e) => onContactNumberChangeHandler(e)}
            value={contactNumber}
            pattern="[0-9]*"
            required
          ></input>
          <label
            className="input-label-frenchschoolconfirm"
            onClick={() => handleLabelClick(1)}
          >
            <span style={{ color: "red" }}>*</span>Contact No
          </label>
        </div>

        <div className="input-box">
          <input
            type="email"
            className="input-frenchschoolconfirm"
            ref={emailInputRef}
            onChange={(e) => onEmailChangeHandler(e)}
            value={email}
            required
          ></input>
          <label
            className="input-label-frenchschoolconfirm"
            onClick={() => handleLabelClick(2)}
          >
            <span style={{ color: "red" }}>*</span>Email
          </label>
        </div>
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          className="checkbox"
          onChange={() => setWhatsappEnabled(!whatsAppEnabled)}
        ></input>
        <label
          style={{ color: "red" }}
          for="checkbox"
          className="checkbox-label-frenchschool-confirm"
        >
          Get Notified on whatsapp before workshop
        </label>
        <button type="submit" className="frenchschoolconfirmreg-register-btn">
          Register For Free
        </button>
      </form>
    </div>
  );
}

export default FrenchschoolConfirmReg;
