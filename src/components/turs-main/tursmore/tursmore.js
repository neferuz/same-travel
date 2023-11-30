import React from "react";
// import { AiFillStar} from 'react-icons/ai';
import { BsFlag} from 'react-icons/bs';
import { FaPlane, FaRegHandshake} from 'react-icons/fa';
import Hotel1 from '../../../assets/hotelabout/1.png';
import Hotel2 from '../../../assets/hotelabout/2.png';
import Hotel3 from '../../../assets/hotelabout/3.png';
import Hotel4 from '../../../assets/hotelabout/4.png';
import './tursmore.css';

const Tursmore = () => {
    return(
        <div className="container tursmore">
            <div className='hotel-title'>
                <h1>Best UMRA tour</h1>
                <div className='hotelsall-item-text-position'>
                    <span>
                        <BsFlag/>
                        Medina
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
            <div className="tursmore-wrapper">
                <ul className="tursmore-wrapper-list">
                    <li><FaPlane/> Прямой авиаперелёт премиум класса Ташкент - Джидда - Ташкент</li>
                    <li><FaRegHandshake/>Встреча/проводы в аэропорту Джидды с трапа/к трапу самолёта и выход/вход с отдельного терминала</li>
                    <li><FaPlane/>   Варианты транспорта для трансфера
   сопровождения/экскурсий:</li>

                </ul>
            </div>
        </div>
    )
}

export default Tursmore