import React from 'react';
import Uzairways from '../../assets/uz.png';
import Payment1 from '../../assets/uzcard.png';
import Payment2 from '../../assets/humo.png';
import Payment3 from '../../assets/visa.png';
import { BsInstagram, BsTelegram, BsYoutube } from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import {IoMdCall} from 'react-icons/io'

import Qr from '../../assets/qr.png';
import './footer.css'

const Footer = () => {
    
    return(
        <div className='footer'>
            
            <div className='container footer-wrapper'>
                <ul className='footer-list'>
                    <h2>SamoTravel</h2>
                    <li>For agency</li>
                    <li>About company</li>
                    <li>Public offer</li>
                    <li>Contract</li>
                </ul>
                <div className='footer-agent'>
                    <h2>Official agent of</h2>
                    <div className='footer-agent-img'>
                        <img src={Uzairways} alt="uzairways"/>
                    </div>
                </div>
                <div className='footer-payment'>
                    <h2>We accept for payment </h2>
                    <div className='footer-payment-wrapper'>
                        <div className='footer-payment-img'>
                            <img src={Payment1} alt="uzairways"/>
                        </div>
                        <div className='footer-payment-img'>
                            <img src={Payment2} alt="uzairways"/>
                        </div>
                        <div className='footer-payment-img'>
                            <img src={Payment3} alt="uzairways"/>
                        </div>
                    </div>
                </div>
                <div className='footer-links'>
                    <div className='footer-qr'>
                        <img src={Qr} alt="asd"/>
                    </div>
                    <div className='footer-links-wrapper'>
                        <ul>
                            <li><BsInstagram/></li>
                            <li><BsTelegram/></li>
                            <li><FaFacebookF/></li>
                            <li><BsYoutube/></li>
                        </ul>
                        <div className='footer-links-phone'>
                            <IoMdCall/>
                            <span>+998(90)999-99-99</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer