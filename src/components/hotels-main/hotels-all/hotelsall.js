import React from 'react';
import './hotelsall.css';
import { AiFillCar, AiFillStar, AiOutlineUser } from 'react-icons/ai';
import { BsFlag, BsCalendar4Week } from 'react-icons/bs';
import { GiMeal } from 'react-icons/gi';
import { FaBed } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LeftFilter from '../../left-filter';

const HotelsAll = ({ hotels }) => {
    return (
        <div className='hotelsall'>
            <div className='hotelsall-wrapper'>
                <LeftFilter />
                <div className='hotelsall-item-wrapper'>
                    
                    {hotels.map((hotel, index) => (
                        <div key={index} className='hotelsall-item'>
                            <div className='hotelsall-item-img'>
                                <img src={hotel.thumbnailFull} alt="asd" />
                            </div>
                            <div className='hotelsall-item-text'>
                                <h2>{hotel.name}</h2>
                                <div className='hotelsall-item-text-position'>
                                    <span>
                                        <AiFillStar />
                                        {hotel.rating}
                                    </span>
                                    <span>
                                        <BsFlag />
                                        {hotel.location}
                                    </span>
                                </div>
                                <div className='hotelsall-item-text-wrapper'>
                                    <ul>
                                        <li>
                                            <BsCalendar4Week />
                                            {hotel.checkIn} - {hotel.checkOut}
                                        </li>
                                        <li>
                                            <AiOutlineUser />
                                            {hotel.guests}
                                        </li>
                                        <li>
                                            <FaBed />
                                            {hotel.roomType}
                                        </li>
                                        <li>
                                            <GiMeal />
                                            {hotel.mealType}
                                        </li>
                                        <li>
                                            <AiFillCar />
                                            {hotel.transferType}
                                        </li>
                                    </ul>
                                    <div className='hotelsall-item-link-wrapper'>
                                        <h3 className='hotelsall-item-cost'>
                                            {hotel.price}$
                                        </h3>
                                        <Link to={`/hotels/hotelsall/hotelsabout/${hotel.id}`} className='hotelsall-item-link'>
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HotelsAll;
