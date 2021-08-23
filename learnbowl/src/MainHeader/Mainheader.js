import React from 'react'

import HeaderInfo from './HeaderInfo/HeaderInfo.js'
import "./mainheader.css"
import RegistrationForm from './RegistrationForm/RegistrationForm.js'
function Mainheader() {
    return (
        <div className = "mainheader">
            <HeaderInfo/>
            <RegistrationForm/>
        </div>
    )
}

export default Mainheader
