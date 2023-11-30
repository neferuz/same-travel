import React from "react";
import {Link} from 'react-router-dom'
import './registration.css'


const Forgotpass = () => {

    return(
        <div className="registration">
             <form className="registration-form">
                <h2>Email Verification</h2>
                <span>We have send code to your Email 
de**@gmail.com</span>
                <label>
                    Password:
                    <input
                    type="password"
                    placeholder=""
                    />
                </label>
                <Link to="/signin/forgotpassword/confirmpass" className="registration-form-span">
                    <button type="submit">
                        Submit
                    </button>
                </Link>
            </form>
        </div>
    )
}


export default Forgotpass