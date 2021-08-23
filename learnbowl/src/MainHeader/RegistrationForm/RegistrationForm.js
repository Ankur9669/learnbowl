import React from 'react'
import "./registrationform.css";
function RegistrationForm() {
    return (
        <form className = "registration-form">
            <label for = "form-heading" className = "display-block form-heading margin-top-bottom">
                Register Here
            </label>

            <label for = "seats-info" className = "display-block seats-info margin-top-bottom">
              **  Limited Seats Left!!  **
            </label>

            <label for = "name" className = "display-block">* Name: </label>
            <input type = "text" placeholder = "Enter your name: " required className = "margin-top-bottom input"></input>

            <label for = "contact" className = "display-block">* Contact Number: </label>
            <input type = "number" placeholder = "Enter your number: " required className = "margin-top-bottom input"></input>

            <label for = "students-grade" className = "display-block">* Students Grade: </label>
            <select required className = "margin-top-bottom input">
                <option>5th</option>
                <option>6th</option>
                <option>7th</option>
                <option>8th</option>
                <option>9th</option>
                <option>10th</option>
                <option>11th</option>
                <option>12th</option>
            </select>

            <label for = "workshop-dates" className = "display-block margin-top-bottom">* Select Workshop Dates: </label>
            <button className = "date-1 date-button">13 Aug - 15 Aug</button>
            <button className = "date-2 date-button">15 Aug - 17 Aug</button>

            <div className = "margin-top-bottom">
                <input type = "checkbox" checked></input>
                <label for = "reminder">Get Reminder On whatsapp</label>
            </div>
            

            <button type = "submit" className = "submit-button margin-top-bottom">Book A Workshop</button>
        </form>
    )
}

export default RegistrationForm
