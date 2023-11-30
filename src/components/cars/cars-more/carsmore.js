import React from "react";
import './carsmore.css'
import Hotel1 from '../../../assets/cars/bmm1.png';
import Hotel2 from '../../../assets/cars/bmm2.png';
import Hotel3 from '../../../assets/cars/bmm3.png';
import Hotel4 from '../../../assets/cars/bmm4.png';
import { GrWaypoint} from 'react-icons/gr';
import { BsFlag, BsStopwatch} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai'

const CarsMore = () =>{
    return(
        <div className="container carsmore">
            <div className='hotel-title'>
                <h1>BMW M5 Competition 2022</h1>
                <div className='hotelsall-item-text-position'>
                    <span>
                        <BsFlag/>
                        BMW
                    </span>
                </div>
            </div>
            <div className='hotel-about-images'>
                <div className='hotel-about-img1'>
                    <img src={Hotel1} alt="asd"/>
                </div>
                <div className='hotel-about-img-wrapper'>
                    <div className='hotel-about-img2'>
                        <img src={Hotel2} alt="asd"/>
                    </div>
                    <div className='hotel-about-img2'>
                        <img src={Hotel3} alt="asd"/>
                    </div>
                    <div className='hotel-about-img2'>
                        <img src={Hotel4} alt="asd"/>
                    </div>
                </div>
            </div>
            <div className="carsmore-wrapper">
                <div className="carsmore-left">
                    <h2>Car details</h2>
                    <div className="carsmore-left-wrapper">
                        <div className="carsmore-left-item">
                            <BsStopwatch/>
                            <span>Put your car feature</span>
                        </div>
                        <div className="carsmore-left-item">
                            <BsStopwatch/>
                            <span>Put your car feature</span>
                        </div>
                        <div className="carsmore-left-item">
                            <AiOutlineUser/>
                            <span>Put your car feature</span>
                        </div>
                        <div className="carsmore-left-item">
                            <GrWaypoint/>
                            <span>Put your car feature</span>
                        </div>
                    </div>
                    <span className="carsmore-line"></span>
                    <h2>Diver Details</h2>
                    <form className="carsmore-form">
                        <input className="carsmore-form-in" type="text" placeholder="name"/>
                        <input className="carsmore-form-in" type="text" placeholder="surname"/>
                        <input className="carsmore-form-input" type="num" placeholder="+998"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CarsMore