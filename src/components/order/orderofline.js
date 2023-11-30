import React from "react";
import {MdFlight} from 'react-icons/md'
import Orderimg from '../../assets/flights/flfl.png'
import './order.css'

const OrderOffline = () =>{
    return(
        <div className="container order">
            <div className="order-left">
                <h1>Confirm your Book</h1>
                <div className="order-method">
                    <form className="order-method-form">
                        <h2>Fill the form:</h2>
                        <label for="username">Your name</label>
                        <input placeholder="Name" type="text" id="username"/>
                        <label for="usersurname">Your surname</label>
                        <input placeholder="Surname" type="text" id="usersurname"/>
                        <label for="nummber">Your phone nummber</label>
                        <input placeholder="+998998998989" type="num" id="nummber"/>
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
            <div className="order-right">
                <div className="order-right-flight">
                    <p>TASH</p>
                    <div className="order-right-flight-wrapper">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <MdFlight/>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p>OAE</p>
                </div>
                <div className="order-img">
                    <img src={Orderimg} alt="asd"/>
                </div>
                <div className="order-dop">
                    <h3>Baggage</h3>
                    <p>+</p>
                    <h3>Meal</h3>
                </div>
                <div className="order-info">
                    <div className="order-item">
                        <h4>Check in:</h4>
                        <span>02.02.2023</span>
                    </div>
                    <div className="order-item">
                        <h4>Check out:</h4>
                        <span>16.02.2023</span>
                    </div>
                    <div className="order-item">
                        <h4>Travellers:</h4>
                        <span>Passengers 2</span>
                    </div>
                </div>
                <div className="order-info-bottom">
                    <h3>Fare summary:</h3>
                    <ul>
                        <li>2x Passenger <span>150$</span></li>
                        <li>Tax and fee <span>30$</span></li>
                        <li>Service free <span>10$</span></li>
                        <li>Total sum <span>190$</span></li>
                    </ul>
                    <span className="order-info-bottom-none">Report this flight</span>
                </div>
            </div>
        </div>
    )
}


export default OrderOffline