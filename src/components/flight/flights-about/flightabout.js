import React from 'react';
import './flightabout.css'
import Flightlogo from '../../../assets/flights/flightcompany/fl2.png'
import Flfl from '../../../assets/flights/flightcompany/flfl.png'
import {GiHandBag} from 'react-icons/gi'


const FlightAbout = () => {
    return(
        <div className='flightsabout'>
            <div className='flightsabout-wrapper-wrapper'>
                <div className='flightsabout-wrapper'>
                    <div className='flightsabout-title'>
                        <div className='flightsabout-title-left'>
                            <h2>Dhaka To Dubai</h2>
                            <p>Non stop | 2 hrs 20 mins | Economy | Thu 27 Jul 2020</p>
                        </div>
                        <span>Change Flight</span>
                    </div>
                    <span className='flightsabout-right-span'></span>
                    <div className='flightsabout-info'>
                        <div className='flightsabout-info-top'>
                            <div className='flightsabout-info-item'>
                                <div className='flightsabout-item-img'>
                                    <img src={Flightlogo} alt="asd"/>
                                </div>
                                <div className='flightsabout-info-top-item-text'>
                                    <h2>IndiGo</h2>
                                    <p>GE-965 320</p>
                                </div>
                            </div>
                            <div className='flightsabout-info-top-item'>
                                <h2>08.45</h2>
                                <p>Thu, 27 July 2020</p>
                                <p>Dhaka zia internationa airport, Bangladesh</p>
                            </div>
                            <div className='flightsabout-info-top-item'>
                                <h3>05 hrs 20 mins</h3>
                                <img src={Flfl} alt="asd"/>
                            </div>
                            <div className='flightsabout-info-top-item'>
                                <h2>01.05</h2>
                                <p>Sat, 30 July 2020</p>
                                <p>Dubai</p>
                                <p>Dubai International Airport</p>
                            </div>
                        </div>
                        <div className='flightsabout-info-bottom'>
                            <div className='flightsabout-info-bottom-item'>
                                <h2>Baggoge:</h2>
                                <p>Adult</p>
                            </div>
                            <div className='flightsabout-info-bottom-item'>
                                <h2>Check-In:</h2>
                                <p>20Kgs</p>
                            </div>
                            <div className='flightsabout-info-bottom-item'>
                                <h2>Cabin:</h2>
                                <p>7 kg</p>
                            </div>
                            <div className='flightsabout-info-bottom-item'>
                                <h2>Meals:</h2>
                                <p>Meals Not Available</p>
                            </div>
                        </div>
                    </div>
                    <span className='flightsabout-right-span'></span>

                    <div className='flightsabout-title'>
                        <div className='flightsabout-title-left'>
                            <h2>Dubai to Dhaka</h2>
                            <p>Non stop | 2 hrs 20 mins | Economy | Thu 27 Jul 2020</p>
                        </div>
                    </div>
                    <span className='flightsabout-right-span'></span>
                    <div className='flightsabout-info'>
                        <div className='flightsabout-info-top'>
                            <div className='flightsabout-info-item'>
                                <div className='flightsabout-item-img'>
                                    <img src={Flightlogo} alt="asd"/>
                                </div>
                                <div className='flightsabout-info-top-item-text'>
                                    <h2>IndiGo</h2>
                                    <p>GE-965 320</p>
                                </div>
                            </div>
                            <div className='flightsabout-info-top-item'>
                                <h2>08.45</h2>
                                <p>Thu, 27 July 2020</p>
                                <p>Dhaka zia internationa airport, Bangladesh</p>
                            </div>
                            <div className='flightsabout-info-top-item'>
                                <h3>05 hrs 20 mins</h3>
                                <img src={Flfl} alt="asd"/>
                            </div>
                            <div className='flightsabout-info-top-item'>
                                <h2>01.05</h2>
                                <p>Sat, 30 July 2020</p>
                                <p>Dubai</p>
                                <p>Dubai International Airport</p>
                            </div>
                        </div>
                        <div className='flightsabout-info-bottom'>
                            <div className='flightsabout-info-bottom-item'>
                                <h2>Baggoge:</h2>
                                <p>Adult</p>
                            </div>
                            <div className='flightsabout-info-bottom-item'>
                                <h2>Check-In:</h2>
                                <p>20Kgs</p>
                            </div>
                            <div className='flightsabout-info-bottom-item'>
                                <h2>Cabin:</h2>
                                <p>7 kg</p>
                            </div>
                            <div className='flightsabout-info-bottom-item'>
                                <h2>Meals:</h2>
                                <p>Meals Not Available</p>
                            </div>
                        </div>
                    </div>

                    

                </div>
                <div className='flightsabout-contacts'>
                    <h2>Contact information</h2>
                    <p>We will send an e-ticket to the post office, we will call the phone if there are changes in the flight or in case of other situations</p>
                    <span className='flightsabout-right-span'></span>

                    <form className='flightsabout-contacts-form'>

                        <label>
                            Name
                            <input placeholder='Name'/>
                        </label>
                        <label>
                            Gmail
                            <input placeholder='example@gmail.com'/>
                        </label>
                        <label >
                            Telephone
                            <input type="text" required placeholder='+99890123456789'/>
                        </label>
                    </form>
                </div>

                <div className='flightsabout-contacts'>
                    <h2>Passenger Information <span>(adult)</span></h2>
                    <p>Enter the personal data of the passengers, as indicated in the document (passport) on which they will fly. The fields must be filled in Latin letters.</p>
                    <span className='flightsabout-right-span'></span>

                    <form className='flightsabout-contacts-form'>
                        <label>
                            Surname
                            <input placeholder='Surname'/>
                        </label>
                        <label>
                            Name
                            <input placeholder='Name'/>
                        </label>
                        <label>
                        Series and passport number
                            <input placeholder='xxxxxxxxxxxx'/>
                        </label>
                        <label>
                        Validity
                            <input type="date" min="1900-01-01" max="2023-12-31" placeholder='Validity'/>
                        </label>
                        
                        <label>
                            Сitizenship
                            {/* <input placeholder='Сitizenship'/> */}
                            <select>
                                <option selected>Узбекистан</option>
                                <option>Казакстан</option>
                                <option>Туркменистан</option>
                            </select>
                        </label>
                        <label >
                             Date of birth
                            <input type="date" min="1900-01-01" max="2023-12-31"/>
                        </label>
                        <label>
                            Sex
                            {/* <input placeholder='Сitizenship'/> */}
                            <select>
                                <option selected>Man</option>
                                <option>Woman</option>
                            </select>
                        </label>
                    </form>
                </div>
                    <div className='flightsabout-bag'>
                        <GiHandBag/>
                        <p>Your flight includes<span> 20</span>kg of luggage</p>
                    </div>
                    <div className='flightsabout-bag'>
                        <label >
                            Comment
                            <textarea type="text" placeholder='Comment'/>
                        </label>
                    </div>
                    <div className='flightsabout-reserved'>
                        <p>Tickets will be booked free of charge until: 13.03.2023
                            Tashkent time</p>
                            <div className='flightsabout-reserved-text'>
                                <h4>
                                    <span>Total:</span>
                                    358000 uzs / 340$
                                </h4>
                                <button>Book</button>
                            </div>
                        
                    </div>
            </div>
            <div className='flightsabout-right'>
                <h2>Price Details</h2>
                <ul>
                    <li>2x Passenger <span>150$</span></li>
                    <li>Tax and fee <span>30$</span></li>
                    <li>Service free <span>10$</span></li>
                    <li>Total sum <span>190$</span></li>
                </ul>

                <span className='flightsabout-right-span'></span>
                <h2>Passengers</h2>
                <p>1x adult 2 children</p>

                <span className='flightsabout-right-span'></span>
                <h2>Check-in baggage</h2>

                <ul className='flightsabout-right-list'>
                    <li>Depature <p>3 bags ( 120g total)</p></li>
                    <li>Return<p>3 bags ( 120g total)</p></li>
                </ul>

                <span className='flightsabout-right-span'></span>
                <h2>Services</h2>
                <p>No extra services selected</p>
            </div>

            
        </div>
    )
} 
// }

export default FlightAbout;