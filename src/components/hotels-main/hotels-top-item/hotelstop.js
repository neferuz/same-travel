import React from 'react';
import './hotelstop.css';
import Hotels4 from '../../../assets/hotelstop/4.png';
import Hotels1 from '../../../assets/hotelstop/1.png';
import Hotels2 from '../../../assets/hotelstop/2.png';
import Hotels3 from '../../../assets/hotelstop/3.png';
import { AiFillStar } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

const HotelsTop = () =>{
    return(
        <div className='hotelstop-wrapper continer'>
            <div className="hotels-text">
                    <div className="hotels-text-wrapper">
                        <h2>Top Hotels</h2>
                        <p>Keep calm & Travel on with SamoTravel</p>
                    </div>
                    {/* <div className="hotels-text-buttons">
                    </div> */}
                </div>
                <div className='hotelstop'>
                    <div className='hotelstop-item'>
                            <div className='hotelstop-item-img'>
                                <img src={Hotels1} alt="asd"/>
                            </div>
                            <div className='hotelstop-item-text'>
                                <div className='hotelstop-item-rating'>
                                    <AiFillStar/>
                                    5.0
                                </div>
                                <div className='hotelstop-item-cost'>
                                    <h3>Comfort Hotel <span>1.2 km to Town Center</span></h3>
                                    <p>210$</p>
                                </div>
                                <ul>
                                    <li>
                                        <MdLocationOn/>
                                        Turkey, Mamaris
                                    </li>
                                    <li>
                                        <HiOutlineOfficeBuilding/>
                                        Rooms available: 375
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <div className='hotelstop-item'>
                            <div className='hotelstop-item-img'>
                                <img src={Hotels2} alt="asd"/>
                            </div>
                            <div className='hotelstop-item-text'>
                                <div className='hotelstop-item-rating'>
                                    <AiFillStar/>
                                    5.0
                                </div>
                                <div className='hotelstop-item-cost'>
                                    <h3>Comfort Hotel <span>1.2 km to Town Center</span></h3>
                                    <p>210$</p>
                                </div>
                                <ul>
                                    <li>
                                        <MdLocationOn/>
                                        Turkey, Mamaris
                                    </li>
                                    <li>
                                        <HiOutlineOfficeBuilding/>
                                        Rooms available: 375
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <div className='hotelstop-item'>
                            <div className='hotelstop-item-img'>
                                <img src={Hotels3} alt="asd"/>
                            </div>
                            <div className='hotelstop-item-text'>
                                <div className='hotelstop-item-rating'>
                                    <AiFillStar/>
                                    5.0
                                </div>
                                <div className='hotelstop-item-cost'>
                                    <h3>Comfort Hotel <span>1.2 km to Town Center</span></h3>
                                    <p>210$</p>
                                </div>
                                <ul>
                                    <li>
                                        <MdLocationOn/>
                                        Turkey, Mamaris
                                    </li>
                                    <li>
                                        <HiOutlineOfficeBuilding/>
                                        Rooms available: 375
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <div className='hotelstop-item'>
                            <div className='hotelstop-item-img'>
                                <img src={Hotels4} alt="asd"/>
                            </div>
                            <div className='hotelstop-item-text'>
                                <div className='hotelstop-item-rating'>
                                    <AiFillStar/>
                                    5.0
                                </div>
                                <div className='hotelstop-item-cost'>
                                    <h3>Comfort Hotel <span>1.2 km to Town Center</span></h3>
                                    <p>210$</p>
                                </div>
                                <ul>
                                    <li>
                                        <MdLocationOn/>
                                        Turkey, Mamaris
                                    </li>
                                    <li>
                                        <HiOutlineOfficeBuilding/>
                                        Rooms available: 375
                                    </li>
                                </ul>
                            </div>
                    </div>

                </div>
        </div>
    )
}


export default HotelsTop 