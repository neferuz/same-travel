import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import Uz from '../../assets/flags/uz.svg'
import En from '../../assets/flags/en.svg'
import Ru from '../../assets/flags/ru.png'
import Logo from '../../assets/logo.png'
import User from '../../assets/user.png'
import { MdOutlineLanguage } from 'react-icons/md';
import { BsBell } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <Link to="/" className='navbar-link-wrapper'>
          Home
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to="/" className='navbar-link-wrapper'>
          Sign-in
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link to="/" className='navbar-link-wrapper'>
          Sign-up
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link to="/admin-panel" className='navbar-link-wrapper'>
          Profile
      </Link>
    ),
  },
];


const Navbar = () => {
  const [langShow, setLangShow] = useState(false);

  const langShowStyle = langShow ? "nav-langs-wrapper nav-langs-wrapper-active" : "nav-langs-wrapper";


  return (
    <nav className="container navbarr">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo"/>
        </Link>
          <div className="nav-list">
            <select className='nav-cost'>
              <option selected className='xyz'>usd</option>
              <option>sum</option>
            </select>
            <div class="nav-langs" onClick={() => setLangShow(!langShow)} id="btn-lng">
                <MdOutlineLanguage/>
                <div class={langShowStyle} id="lng-show">
                    <button class="btn-lang" value="en" id="lang-en">
                        <img src={En} alt="en"/>
                        <span>EN</span>
                    </button>
                    <button class="btn-lang" value="ru" id="lang-ru">
                        <img src={Ru} alt="ru"/>
                        <span>RU</span>
                    </button>
                    <button class="btn-lang"  value="uz" id="lang-uz">
                        <img src={Uz} alt="Uz"/>
                        <span>UZ</span>
                    </button>
                </div>
              </div>
              <BsBell/>
              <div className='user-logo'>
                <div className='user-logo-img'>
                  <img src={User} alt="user"/>
                </div>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <Link onClick={(e) => e.preventDefault()} className='navbar-link-wrapper'>
                    <Space >
                      Name
                      <IoMdArrowDropdown/> 
                    </Space>
                  </Link>
                </Dropdown>
              </div>
        </div>
    </nav>
  )
}

export default Navbar