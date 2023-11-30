import React from "react";
import './turscountryinfo.css';
import { BsFlag, BsFillTelephoneFill } from 'react-icons/bs';
import { GiKneeling,GiWalk } from 'react-icons/gi';
import { FaPlane, FaHandshake, FaBus, FaPassport, FaBookMedical, FaHotel,FaUserCheck,FaUserAlt,FaTelegramPlane } from 'react-icons/fa';
import Hotel1 from '../../../assets/hotelabout/1.png';
import Hotel2 from '../../../assets/hotelabout/2.png';
import {Link} from 'react-router-dom';
import Hotel3 from '../../../assets/hotelabout/3.png';
import Hotel4 from '../../../assets/hotelabout/4.png';

const TursCountryInfo = () => {
    return (
        <div className="container turscountry">
            <div className='hotel-title'>
                <h1>The best Umra tour</h1>
                <div className='hotelsall-item-text-position'>

                    <span>
                        <BsFlag />
                        Saudi Arabia
                    </span>
                </div>
            </div>
            <div className='hotel-about-images'>
                <div className='hotel-about-img1'>
                    <img src={Hotel1} alt="asd" />
                </div>
                <div className='hotel-about-img-wrapper'>
                    <div className='hotel-about-img2'>
                        <img src={Hotel2} alt="asd" />
                    </div>
                    <div className='hotel-about-img2'>
                        <img src={Hotel3} alt="asd" />
                    </div>
                    <div className='hotel-about-img2'>
                        <img src={Hotel4} alt="asd" />
                    </div>
                </div>
            </div>
            <div className="content-turs-countrys">
                <h2>Exclusive Umra tour</h2>
                <h4>United Arab Emirates</h4>
                <div className="description-content">
                    <h5>Description</h5>
                    <div className="description-line"></div>
                    <div className="features-amenitlies">
                        <ul className="first-block">
                            <li>
                                <FaPlane />

                                Прямой авиаперелёт премиум класса
                                Ташкент - Джидда - Ташкент
                            </li>
                            <li>

                                <FaHandshake />
                                Встреча/проводы в аэропорту Джидды
                                с трапа/к трапу самолёта и выход/вход
                                с отдельного терминала
                            </li>
                            <li>
                                <FaBus />
                                Варианты транспорта для трансфера
                                сопровождения/экскурсий:
                            </li>
                            <ul className="one">
                                <li>Внутренний перелёт</li>
                                <li>Высокоcкоростной поезд</li>
                                <li>GMC</li>
                                <li>CHEVROLET SUBURBAN</li>
                                <li>MERCEDES S CLASS / V CLASS</li>
                                <li>CADILLAC</li>
                                <li>ROLLS-ROYCE</li>
                            </ul>
                            <li>
                                <FaPassport />
                                Виза</li>
                            <li>
                                <FaBookMedical />
                                Медицинское страхование</li>
                            <p>Отели:</p>
                            <li>
                                <FaHotel />
                                The Oberoi Hotel, Madinah 5*</li>
                            <li>  <FaHotel /> Dar Al Iman InterContinental, an IHG Hotel, Madinah 5*</li>
                            <li>  <FaHotel /> Anwar Al Madinah Mövenpick 5*</li>
                            <li>  <FaHotel /> Madinah Hilton Hotel 5*</li>
                            <li>  <FaHotel /> Makkah Clock Royal Tower, A Fairmont Hotel 5*</li>
                            <li>  <FaHotel /> Raffles Makkah Palace 5*</li>
                            <p>По вопросам бронирования обращайтесь:</p>
                            <div className="bloks">
                                <ul>
                                    <li>
                                    <FaTelegramPlane/>
                                    <Link to='/'>@Addsdas</Link>
                                    </li>
                                    <li>
                                    <BsFillTelephoneFill/>
                                    <Link to='/'>+998-11-111-11-11</Link>
                                </li>
                                </ul>
                            </div>
                            <div className="bloks">
                                <ul>
                                    <li>
                                    <FaTelegramPlane/>
                                    <Link to='/'>@Addsdas</Link>
                                    </li>
                                    <li>
                                    <BsFillTelephoneFill/>
                                    <Link to='/'>+998-11-111-11-11</Link>
                                </li>
                                </ul>
                            </div>

                        </ul>
                        <ul className="second-block">
                            <li> <FaHotel/>Варианты отелей в Медине:</li>
                            <ul>
                                <li>

                                    The Oberoi Hotel, Madinah
                                </li>
                                <li>Dar Al Iman InterContinental, an IHG Hotel, Madinah</li>
                                <li>Anwar Al Madinah Mövenpick</li>
                                <li>Madinah Hilton Hotel</li>
                            </ul>
                            <li >  <FaHotel/> Варианты отелей в Мекке:</li>
                            <ul>
                                <li>Makkah Clock Royal Tower, A Fairmont Hotel</li>
                                <li>Raffles Makkah Palace</li>
                            </ul>
                            <li>Варианты питания - по желанию</li>
                            <li>
                                
                                <FaUserCheck/>
                                Постоянное сопровождение - индивидуальный
                                высококвалифицированный гид
                            </li>
                            <li>
                                <GiKneeling/>
                                Помощь в совершении всех обрядов Умры</li>
                        </ul>
                        <ul>
                            <li>
                                <FaUserAlt/>
                                Набор паломника:
                            </li>
                            <ul>
                                <li>Коран Мусхаф</li>
                                <li>Священная вода Зам-Зам 5л.</li>
                                <li>Сумка</li>
                                <li>Жилетка</li>
                                <li>Бейджик</li>
                            </ul>
                            <li>
                                <GiWalk/>
                                Индивидуальные варианты экскурсий - по желанию:</li>
                            <ul>
                                <li>Экскурсия по историческим местам в Мекке и Медине</li>
                                <li>Экскурсия в Джидду и Аль-Ула</li>
                            </ul>
                        </ul>
                    </div>
                    <div className="more-btn">
                        <Link to='/'>Подробная информация</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TursCountryInfo;