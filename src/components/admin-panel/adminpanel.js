import React from 'react';
import './adminpanel.css';
import {MdOutlineDomainVerification} from 'react-icons/md';
import {FaPlane, FaUmbrellaBeach} from 'react-icons/fa';
import {ImCalculator} from 'react-icons/im';
import {BsGiftFill} from 'react-icons/bs';
import {FcCustomerSupport} from 'react-icons/fc';

const AdminPanel = () => {
    return (
        <div className='adminpanel'>
            <div className='admin-nav'>
                <div className='container'>
                    <div className='admin-panel-list-wrapper'>
                        <ul className='admin-panel-list'>
                            <li>
                                <MdOutlineDomainVerification/>
                                Профиль
                            </li>
                            <li>
                                <FaPlane/>
                          
                              Авиабилеты
                            </li>
                            <li>
                                <FaUmbrellaBeach/>
                                Туры
                            </li>
                            <li>
                                <ImCalculator/>
                                Финансы
                            </li>
                            <li>
                                <BsGiftFill/>
                                Бонусы
                            </li>
                        </ul>
                        <button><FcCustomerSupport/>Ваш менеджер Рустам</button>
                    </div>
                    
                </div>
                
            </div>
                <div className='adminpanel-wrapper'>
                <h2>Личный кабинет</h2>
            </div>
        </div>
    )
}

export default AdminPanel