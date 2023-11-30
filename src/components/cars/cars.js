import React from "react";
import './cars.css';
import 'swiper/swiper.min.css';
// import "swiper/css/pagination";
import Header from "../header";
import Carsbg from '../../assets/carsbg.png'
import { MdLocationOn, MdLocalHotel, MdFlightTakeoff } from 'react-icons/md';
import { AiFillCar, AiFillEuroCircle } from 'react-icons/ai';
import { IoIosSpeedometer } from 'react-icons/io';
import { BiSupport } from 'react-icons/bi';
import { HiOutlineUsers } from 'react-icons/hi';
import { BsFuelPumpFill } from 'react-icons/bs';
import { SiSpeedtest } from 'react-icons/si';
import Filter from '../filter'
import Media from "react-media";
import { Link } from 'react-router-dom';
import Logo2 from '../../assets/cars/logo/bmw.png'
import Car from '../../assets/cars/car.png'
import Car2 from '../../assets/cars/car2.png'
import Car3 from '../../assets/cars/car3.png'
import Car4 from '../../assets/cars/car4.png'
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles


// import { Pagination } from "swiper";
const Cars = () => {


    return (
        <div className="turs-wrapper">
            <div className="turs">
                <Header images={Carsbg} title='Rent cars' text='Get your ultra comfort on wheels!' />
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
            <div className="container cars-wrapper">
                <div className="cars-wrapper-title">
                    <h2>Brands Of Our Cars</h2>
                    <p>We provide only the top models, for you and your comfort. We have collected more than 100 cars for you to enjoy the roads</p>
                </div>
                <Swiper
                className="cars-wrapper-logo"
      spaceBetween={30}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="cars-wrapper-logo-img">
                        <img src={Logo2} alt="asdasda" />
                    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cars-wrapper-logo-img">
                        <img src={Logo2} alt="asdasda" />
                    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cars-wrapper-logo-img">
                        <img src={Logo2} alt="asdasda" />
                    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cars-wrapper-logo-img">
                        <img src={Logo2} alt="asdasda" />
                    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cars-wrapper-logo-img">
                        <img src={Logo2} alt="asdasda" />
                    </div>
      </SwiperSlide>
      ...
    </Swiper>
                
                <div className="cars-wrapper-info">
                    <div className="cars-wrapper-info-img">
                        <img src={Car} alt="asd" />
                    </div>
                    <div className="cars-wrapper-info-text">
                        <h2>Feel the best experience
                            with our rental deals</h2>
                        <div className="cars-info-item-wrapper">
                            <div className="cars-info-item">
                                <div className="cars-info-item-icon">
                                    <AiFillEuroCircle />
                                </div>
                                <div className="cars-info-item-text">
                                    <h4>Deals for every budget</h4>
                                    <p>Choose from & wide variety of car classes new high-quality        vehicles teeting your neads and luxigel best
                                    </p>
                                </div>
                            </div>
                            <div className="cars-info-item">
                                <div className="cars-info-item-icon">
                                    <BiSupport />
                                </div>
                                <div className="cars-info-item-text">
                                    <h4>Awesome Customer Support</h4>
                                    <p>Deliver faster, more personalized support
                                        with the power of co browse and live chat.
                                    </p>
                                </div>
                            </div>
                            <div className="cars-info-item">
                                <div className="cars-info-item-icon">
                                    <SiSpeedtest />
                                </div>
                                <div className="cars-info-item-text">
                                    <h4>Awesome Customer Support</h4>
                                    <p>Deliver faster, more personalized support
                                        with the power of co browse and live chat.
                                    </p>
                                </div>
                            </div>
                            <div className="cars-info-item">
                                <div className="cars-info-item-icon">
                                    <SiSpeedtest />
                                </div>
                                <div className="cars-info-item-text">
                                    <h4>Awesome Customer Support</h4>
                                    <p>Deliver faster, more personalized support
                                        with the power of co browse and live chat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
    )
}

export default Cars