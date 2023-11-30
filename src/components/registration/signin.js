import React from "react";
import {Link} from 'react-router-dom'
import './registration.css'
import {BsGoogle} from 'react-icons/bs'



const Signin = () => {

    return(
        <div className="registration">
    <form className="registration-form" >
      <div className="registration-google">
        <h2>Sign-in</h2>
        <button><BsGoogle/> Sign in with Google</button>
        <span>or continue with</span>
      </div>
      
      <label>
          Login:
          <input
            type="text"
            placeholder="Login"
          />
        </label>
      <label>
        Email:
        <input
          type="email"
          placeholder="example@gmail.com"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          placeholder="your password"
        />
      </label>
      <Link to="/signin/forgotpassword" className="registration-form-span">
        <span>Forgot your password?</span>

      </Link>
      
      <button type="submit">
        Submit
      </button>
    </form>
        </div>
    )
}

export default Signin;