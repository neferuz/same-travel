import React from "react";
import {Link} from 'react-router-dom'
import './registration.css'


const Forgotpass = () => {

    return(
        <div className="registration">
             <form className="registration-form" >
                <h2>Password Recovery</h2>
                <span>Enter your email to recover your password</span>
                <label>
                    Email:
                    <input
                    type="email"
                    placeholder="example@gmail.com"
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