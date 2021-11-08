import React, {useEffect} from 'react';
import "./pagenotfound.css";
import { useHistory } from "react-router-dom";
function PageNotFound() 
{
    const history = useHistory();

    useEffect(() => {
        document.title = "Online French Learning-Best Teachers for School, College Students";
    }, [])
    function handleButtonClick(){
        history.push("/");
    }
    return (
        <div className = "pagenotfound">
            <img src = "404.svg" alt = "image" className = "pagenotfound-img"></img>
            <h3 className = "pagenotfound-heading">Oops! Got Lost?</h3>
            <p className = "pagenotfound-sub-heading">The page you’re looking for isn’t found</p>
            <button className = "pagenotfound-btn" onClick = {() => handleButtonClick()}>Back to home</button>
        </div>
    )
}

export default PageNotFound
