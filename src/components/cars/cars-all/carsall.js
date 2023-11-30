import React from "react";
import 'swiper/swiper.min.css';
import './carsall.css';
import { MdLocationOn, MdLocalHotel, MdFlightTakeoff } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import Filter from '../../filter'
import Media from "react-media";
import { Link } from 'react-router-dom';
import LeftFilter from "../../left-filter";
import Car2 from '../../../assets/cars/car2.png'
import Car3 from '../../../assets/cars/car3.png'
import Car4 from '../../../assets/cars/car4.png'
import { IoIosSpeedometer } from 'react-icons/io';
import { HiOutlineUsers } from 'react-icons/hi';
import { BsFuelPumpFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from "swiper/react";


const CrasAll = () => {
    return(
        <div className="hotelsall">
            <div className="hotels-all">
            <Media query="(max-width: 599px)">
                    {matches =>
                        matches ? (
                            <Filter filterbottom={<div className='filter-bottom'>
                                <div className='filter-bottom-item-search'>
                                    <label>Модель машины которой вы ишите:</label>

                                    <input className="filter-bottom-search" placeholder="gentra, captiva, tesla, ford mustang" />
                                </div>
                                <button type='submit'><Link to="/cars/cars-all">Search</Link></button>

                            </div>} filter={
                                <ul className="filter-top-sections">
                                    <Link to="/">
                                        <li className="filter-top-sections-li">
                                            <MdLocationOn />
                                        </li>
                                    </Link>
                                    <Link to="/flights">
                                        <li className="filter-top-sections-li ">
                                            <MdFlightTakeoff />
                                        </li>
                                    </Link>
                                    <Link to="/hotels">
                                        <li className="filter-top-sections-li">
                                            <MdLocalHotel />
                                        </li>

                                    </Link>
                                    <Link to="/cars">
                                        <li className="filter-top-sections-li filter-top-sections-active">
                                            <AiFillCar />
                                            Cars
                                        </li>
                                    </Link>
                                </ul>} />
                        ) : (
                            <Filter filterbottom={<div className='filter-bottom'>
                                <div className='filter-bottom-item-search'>
                                    <label>Модель машины которой вы ишите:</label>

                                    <input className="filter-bottom-search" placeholder="gentra, captiva, tesla, ford mustang" />
                                </div>
                                <button type='submit'><Link to="/cars/cars-all">Search</Link></button>

                            </div>} filter={
                                <ul className="filter-top-sections">
                                    <Link to="/">
                                        <li className="filter-top-sections-li">
                                            <MdLocationOn />
                                            Turs
                                        </li>
                                    </Link>
                                    <Link to="/flights">
                                        <li className="filter-top-sections-li ">
                                            <MdFlightTakeoff />
                                            Flights
                                        </li>
                                    </Link>
                                    <Link to="/hotels">
                                        <li className="filter-top-sections-li">
                                            <MdLocalHotel />
                                            Hotels
                                        </li>

                                    </Link>
                                    <Link to="/cars">
                                        <li className="filter-top-sections-li filter-top-sections-active">
                                            <AiFillCar />
                                            Cars
                                        </li>
                                    </Link>
                                </ul>} />
                        )
                    }
                </Media>
                <Media query="(min-width: 600px) and (max-width: 899px)">
                    {matches =>
                        matches ? (
                            <Filter filterbottom={<div className='filter-bottom'>

                                <div className='filter-bottom-item'>
                                    <label>Модель машины которой вы ишите:</label>
                                    <input className="filter-bottom-search" placeholder="gentra, captiva, tesla, ford mustang" />
                                </div>
                                <button type='submit'><Link to="/cars/cars-all">Search</Link></button>
                            </div>} filter={
                                <ul className="filter-top-sections">
                                    <Link to="/">
                                        <li className="filter-top-sections-li ">
                                            <MdLocationOn />
                                        </li>
                                    </Link>
                                    <Link to="/flights">
                                        <li className="filter-top-sections-li ">
                                            <MdFlightTakeoff />
                                        </li>
                                    </Link>
                                    <Link to="/hotels">
                                        <li className="filter-top-sections-li ">
                                            <MdLocalHotel />
                                        </li>
                                    </Link>
                                    <Link to="/cars">
                                        <li className="filter-top-sections-li filter-top-sections-active">
                                            <AiFillCar />
                                            Cars
                                        </li>
                                    </Link>

                                </ul>} />
                        ) : null
                    }
                </Media>
            </div>
            <div className="hotelsall-wrapper">
                <LeftFilter/>
                <div className='hotelsall-item-wrapper'>
                    <div className="cars-all-category">
                    <Swiper
                        className="cars-wrapper-logo"
                        spaceBetween={10}
                        slidesPerView={3.5}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        <SwiperSlide>
                            <div className="cars-all-category-item">
                                <div className="cars-all-category-item-img">
                                    <img src={Car4} alt="asd"/>
                                </div>
                                <h2>small</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cars-all-category-item">
                                <div className="cars-all-category-item-img">
                                    <img src={Car2} alt="asd"/>
                                </div>
                                <h2>small</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cars-all-category-item">
                                <div className="cars-all-category-item-img">
                                    <img src={Car2} alt="asd"/>
                                </div>
                                <h2>small</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cars-all-category-item">
                                <div className="cars-all-category-item-img">
                                    <img src={Car3} alt="asd"/>
                                </div>
                                <h2>small</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cars-all-category-item">
                                <div className="cars-all-category-item-img">
                                    <img src={Car4} alt="asd"/>
                                </div>
                                <h2>small</h2>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                    <div className="cars-item-wrapper">
                    <div className="cars-item">
                        <div className="cars-item-img">
                            <img src={Car2} alt="asd" />
                        </div>
                        <div className="cars-item-text">
                            <h2>MB Ml300 - 2015</h2>
                            <span>Mersedes-Benz</span>
                            <h3>Features</h3>
                            <ul className="cars-item-text-list">
                                <li>
                                    <HiOutlineUsers />
                                    5
                                </li>
                                <li>
                                    <IoIosSpeedometer />
                                    120km/h
                                </li>
                                <li>
                                    <BsFuelPumpFill />
                                    fuel
                                </li>
                            </ul>
                        </div>
                        <div className="cars-item-text-cost">
                            <h2>
                                $124.00
                                <span>per day</span>
                            </h2>
                            <button>
                                <Link to="/cars/cars-all/carsmore">
                                    Reserve Deal
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="cars-item">
                        <div className="cars-item-img">
                            <img src={Car3} alt="asd" />
                        </div>
                        <div className="cars-item-text">
                            <h2>MB Ml300 - 2015</h2>
                            <span>Mersedes-Benz</span>
                            <h3>Features</h3>
                            <ul className="cars-item-text-list">
                                <li>
                                    <HiOutlineUsers />
                                    5
                                </li>
                                <li>
                                    <IoIosSpeedometer />
                                    120km/h
                                </li>
                                <li>
                                    <BsFuelPumpFill />
                                    fuel
                                </li>
                            </ul>
                        </div>
                        <div className="cars-item-text-cost">
                            <h2>
                                $124.00
                                <span>per day</span>
                            </h2>
                            <button>
                                <Link to="/cars/cars-all/carsmore">
                                    Reserve Deal
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="cars-item">
                        <div className="cars-item-img">
                            <img src={Car4} alt="asd" />
                        </div>
                        <div className="cars-item-text">
                            <h2>MB Ml300 - 2015</h2>
                            <span>Mersedes-Benz</span>
                            <h3>Features</h3>
                            <ul className="cars-item-text-list">
                                <li>
                                    <HiOutlineUsers />
                                    5
                                </li>
                                <li>
                                    <IoIosSpeedometer />
                                    120km/h
                                </li>
                                <li>
                                    <BsFuelPumpFill />
                                    fuel
                                </li>
                            </ul>
                        </div>
                        <div className="cars-item-text-cost">
                            <h2>
                                $124.00
                                <span>per day</span>
                            </h2>
                            <button>
                                <Link to="/cars/cars-all/carsmore">
                                    Reserve Deal
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="cars-item">
                        <div className="cars-item-img">
                            <img src={Car3} alt="asd" />
                        </div>
                        <div className="cars-item-text">
                            <h2>MB Ml300 - 2015</h2>
                            <span>Mersedes-Benz</span>
                            <h3>Features</h3>
                            <ul className="cars-item-text-list">
                                <li>
                                    <HiOutlineUsers />
                                    5
                                </li>
                                <li>
                                    <IoIosSpeedometer />
                                    120km/h
                                </li>
                                <li>
                                    <BsFuelPumpFill />
                                    fuel
                                </li>
                            </ul>
                        </div>
                        <div className="cars-item-text-cost">
                            <h2>
                                $124.00
                                <span>per day</span>
                            </h2>
                            <button>
                                <Link to="/cars/cars-all/carsmore">
                                    Reserve Deal
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CrasAll