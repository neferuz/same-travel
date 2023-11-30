import React from 'react';
import './registration.css'

const Registration = () => {
  

  return(
        <div className="registration">
    <form  className="registration-form" >
      <div className="registration-google">
        <h2>Sign-up</h2>
      </div>
      
      <div className="registration-name">
        <label>
          Name:
          <input
            type="text"
            placeholder="Name"
          />
        </label>
        <label>
          Surname:
          <input
            placeholder="Surname"
            type="text"
          />
        </label>
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
          placeholder="min langth 8"
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          placeholder="Confirm Password"
        />
      </label>
      <button  type="submit">
        Submit
      </button>
    </form>
        </div>
    )
}

export default Registration;