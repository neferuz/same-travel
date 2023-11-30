import React, {useState} from "react";
import './flightmain.css'
import Header from "../header";
import Flightbg from '../../assets/flightbg.png'
import { MdLocationOn, MdLocalHotel, MdFlightTakeoff } from 'react-icons/md';
import { AiFillCar} from 'react-icons/ai';
import Filter from '../filter'
import { DatePicker, Space } from 'antd';
import Media from "react-media";
import { HiLocationMarker } from 'react-icons/hi';
import { AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';
import { SlPlane } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import Flight1 from '../../assets/flights/fl1.png';
import Flight2 from '../../assets/flights/fl2.png';
import Flight3 from '../../assets/flights/fl3.png';
import Flight4 from '../../assets/flights/fl4.png';
import Flight5 from '../../assets/flights/fl5.png';
import Flight6 from '../../assets/flights/fl6.png';
import Flfl from '../../assets/flights/flfl.png';
import { RiArrowDownSLine} from 'react-icons/ri';


const FlightMain = () => {
    const { RangePicker } = DatePicker;

    const [pasShow, setPasShow] = useState(false);

    const pasShowStyle = pasShow ? "turs-trip-wrapper turs-trip-wrapper-active" : "turs-trip-wrapper";



    const [counter, setCounter] = useState(0)
  
    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
      // Counter state is incremented
      setCounter(counter + 1)
    }
    
    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
      // Counter state is decremented
      setCounter(counter - 1)
    }

    const [counter2, setCounter2] = useState(0)
  
    // Function is called everytime increment button is clicked
    const handleClick22 = () => {
      // Counter state is incremented
      setCounter2(counter2 + 1)
    }
    
    // Function is called everytime decrement button is clicked
    const handleClick33 = () => {
      // Counter state is decremented
      setCounter2(counter2 - 1)
    }
    const [radiovalue, setValue] = useState(1);
    const changeHandler = (event) => {
		setValue(event.target.value);
	}

    return(
        <div className="flightmain">
            <div className="flights">
            <Header images={Flightbg} title='Tickets' text='The road to anywhere in the world'/>
            <Media query="(max-width: 599px)">
      {matches =>
        matches ? (
            <Filter
            turstrip={<div className='turs-trip' >
            <h5 onClick={() => setPasShow(!pasShow)}>
                {counter}, adults, {counter2}, children, {radiovalue}
            </h5>
                <RiArrowDownSLine/>
            <div className={pasShowStyle}>
                <div className='turs-trip-top'>
                    <span>Взрослые <br/> Старше 12 лет </span>
                    <AiOutlinePlusCircle  onClick={handleClick1}/>
                    <p>{counter}</p>
                    <AiOutlineMinusCircle onClick={handleClick2}/>
                </div>
                <div className='turs-trip-top'>
                    <span>Дети <br/> До 12 лет </span>
                    <AiOutlinePlusCircle onClick={handleClick22}/>
                    <p>{counter2}</p>
                    <AiOutlineMinusCircle onClick={handleClick33}/>
                </div>
                <div className='turs-trip-class'>
                    <h4>Air travel</h4>
                    <div className='trus-trip-class-wrapper'>
                        <input type="radio" onChange={changeHandler} id="contactChoice1" name="contac"checked={radiovalue === 'Econom' ? true : false} value="Econom"/>
                        <label for="contactChoice1">Econom</label>
                        <input onChange={changeHandler} checked={radiovalue === 'Bussines' ? true : false} type="radio" id="contactChoice2"name="contact"   value="Bussines"/>
                        <label for="contactChoice2">Bussines</label>
                    </div>
                    
                </div>
            </div>
        </div>} 
        turspassengers={<select>
            <option>One way</option>
            <option selceted>Round-trip</option>
        </select>}
            filterbottom={<div className='filter-bottom'>
            <div className='filter-bottom-wrapper'>
                <div className='filter-bottom-item bottom-item2'>
                    <label>Откуда</label>
                    <select>
                        <option selected>
                            Из Ташкента
                        </option>
                    </select>
                </div>
                <div className='filter-bottom-item bottom-item2'>
                    <label>Куда</label>
                    <select>
                        <option selected defaultChecked>
                            -выбрать-
                        </option>
                        <optgroup label="Саудовская Аравия">
                            <option value="Джидда">Джидда</option>
                        </optgroup>
                        <optgroup label="Шри-Ланка">
                            <option value="Джидда">в Шри-Ланку</option>
                        </optgroup>
                        <optgroup label="ОАЭ">
                            <option value="Джидда">Дубай</option>
                        </optgroup>
                        <optgroup label="Мольдивы">
                            <option value="Джидда">в Мольдивы</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className='filter-bottom-item'>
                <label>Выберите дату</label>
                <Space direction="vertical" size={12}>
                    <RangePicker bordered={false} style={{background:'transparent', border:'none', color:'#000', width:'100%', height:'23px'}} />
                </Space>
            </div>
            <button type='submit'><Link to="/flights/flightsall">Search</Link></button>
        </div>} filter={
            <ul className="filter-top-sections">
            <Link to="/">
                    <li className="filter-top-sections-li ">
                        <MdLocationOn />
                    </li>
            </Link>
            <Link to="/flights">
                    <li className="filter-top-sections-li filter-top-sections-active">
                        <MdFlightTakeoff />
                        Flights
                    </li>
                </Link>
            <Link to="/hotels">
                <li className="filter-top-sections-li">
                    <MdLocalHotel />
                </li>

            </Link>
            <Link to="/cars">
                    <li className="filter-top-sections-li ">
                        <AiFillCar />
                    </li>
                </Link>
        </ul>}/>
        ) : (
            <Filter 
            turstrip={<div className='turs-trip' >
            <h5 onClick={() => setPasShow(!pasShow)}>
                {counter}, adults, {counter2}, children, {radiovalue}
            </h5>
                <RiArrowDownSLine/>
            <div className={pasShowStyle}>
                <div className='turs-trip-top'>
                    <span>Взрослые <br/> Старше 12 лет </span>
                    <AiOutlinePlusCircle  onClick={handleClick1}/>
                    <p>{counter}</p>
                    <AiOutlineMinusCircle onClick={handleClick2}/>
                </div>
                <div className='turs-trip-top'>
                    <span>Дети <br/> До 12 лет </span>
                    <AiOutlinePlusCircle onClick={handleClick22}/>
                    <p>{counter2}</p>
                    <AiOutlineMinusCircle onClick={handleClick33}/>
                </div>
                <div className='turs-trip-class'>
                    <h4>Air travel</h4>
                    <div className='trus-trip-class-wrapper'>
                        <input type="radio" onChange={changeHandler} id="contactChoice1" name="contac"checked={radiovalue === 'Econom' ? true : false} value="Econom"/>
                        <label for="contactChoice1">Econom</label>
                        <input onChange={changeHandler} checked={radiovalue === 'Bussines' ? true : false} type="radio" id="contactChoice2"name="contact"   value="Bussines"/>
                        <label for="contactChoice2">Bussines</label>
                    </div>
                    
                </div>
            </div>
        </div>} 
        turspassengers={<select>
            <option>One way</option>
            <option selceted>Round-trip</option>
        </select>}
            filterbottom={<div className='filter-bottom'>
            <div className='filter-bottom-wrapper'>
                <div className='filter-bottom-item bottom-item2'>
                    <label>Откуда</label>
                    <select>
                        <option selected>
                            Из Ташкента
                        </option>
                    </select>
                </div>
                <div className='filter-bottom-item bottom-item2'>
                    <label>Куда</label>
                    <select>
                        <option selected defaultChecked>
                            -выбрать-
                        </option>
                        <optgroup label="Саудовская Аравия">
                            <option value="Джидда">Джидда</option>
                        </optgroup>
                        <optgroup label="Шри-Ланка">
                            <option value="Джидда">в Шри-Ланку</option>
                        </optgroup>
                        <optgroup label="ОАЭ">
                            <option value="Джидда">Дубай</option>
                        </optgroup>
                        <optgroup label="Мольдивы">
                            <option value="Джидда">в Мольдивы</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className='filter-bottom-item'>
                <label>Выберите дату</label>
                <Space direction="vertical" size={12}>
                    <RangePicker bordered={false} style={{background:'transparent', border:'none', color:'#000', width:'100%', height:'23px'}} />
                </Space>
            </div>
            <button type='submit'><Link to="/flights/flightsall">Search</Link></button>
        </div>} filter={
            <ul className="filter-top-sections">
            <Link to="/">
            <li className="filter-top-sections-li ">
                        <MdLocationOn />
                        Turs
                    </li>
            </Link>
            <Link to="/flights">
                    <li className="filter-top-sections-li filter-top-sections-active">
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
                    <li className="filter-top-sections-li ">
                        <AiFillCar />
                        Cars
                    </li>
                </Link>
        </ul>}/>
        )
      }
    </Media>
    <Media query="(min-width: 600px) and (max-width: 899px)">
      {matches =>
        matches ? (
            <Filter 
            turstrip={<div className='turs-trip' >
            <h5 onClick={() => setPasShow(!pasShow)}>
                {counter}, adults, {counter2}, children, {radiovalue}
            </h5>
                <RiArrowDownSLine/>
            <div className={pasShowStyle}>
                <div className='turs-trip-top'>
                    <span>Взрослые <br/> Старше 12 лет </span>
                    <AiOutlinePlusCircle  onClick={handleClick1}/>
                    <p>{counter}</p>
                    <AiOutlineMinusCircle onClick={handleClick2}/>
                </div>
                <div className='turs-trip-top'>
                    <span>Дети <br/> До 12 лет </span>
                    <AiOutlinePlusCircle onClick={handleClick22}/>
                    <p>{counter2}</p>
                    <AiOutlineMinusCircle onClick={handleClick33}/>
                </div>
                <div className='turs-trip-class'>
                    <h4>Air travel</h4>
                    <div className='trus-trip-class-wrapper'>
                        <input type="radio" onChange={changeHandler} id="contactChoice1" name="contac"checked={radiovalue === 'Econom' ? true : false} value="Econom"/>
                        <label for="contactChoice1">Econom</label>
                        <input onChange={changeHandler} checked={radiovalue === 'Bussines' ? true : false} type="radio" id="contactChoice2"name="contact"   value="Bussines"/>
                        <label for="contactChoice2">Bussines</label>
                    </div>
                    
                </div>
            </div>
        </div>} 
        turspassengers={<select>
            <option>One way</option>
            <option selceted>Round-trip</option>
        </select>}
         filterbottom={<div className='filter-bottom'>
            <div className='filter-bottom-wrapper'>
                <div className='filter-bottom-item bottom-item2'>
                    <label>Откуда</label>
                    <select>
                        <option selected>
                            Из Ташкента
                        </option>
                    </select>
                </div>
                <div className='filter-bottom-item bottom-item2'>
                    <label>Куда</label>
                    <select>
                        <option selected defaultChecked>
                            -выбрать-
                        </option>
                        <optgroup label="Саудовская Аравия">
                            <option value="Джидда">Джидда</option>
                        </optgroup>
                        <optgroup label="Шри-Ланка">
                            <option value="Джидда">в Шри-Ланку</option>
                        </optgroup>
                        <optgroup label="ОАЭ">
                            <option value="Джидда">Дубай</option>
                        </optgroup>
                        <optgroup label="Мольдивы">
                            <option value="Джидда">в Мольдивы</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className='filter-bottom-item'>
                <label>Выберите дату</label>
                <Space direction="vertical" size={12}>
                    <RangePicker bordered={false} style={{background:'transparent', border:'none', color:'#000', width:'100%', height:'23px'}} />
                </Space>
            </div>
            <button type='submit'><Link to="/flights/flightsall">Search</Link></button>
        </div>} filter={
                <ul className="filter-top-sections">
                <Link to="/">
                    <li className="filter-top-sections-li ">
                        <MdLocationOn />
                        
                    </li>
                </Link>
                <Link to="/flights">
                    <li className="filter-top-sections-li filter-top-sections-active">
                        <MdFlightTakeoff />
                        Flights
                    </li>
                </Link>
                <Link to="/hotels">
                    <li className="filter-top-sections-li ">
                        <MdLocalHotel />
                        
                    </li>
    
                </Link>
                <Link to="/cars">
                    <li className="filter-top-sections-li ">
                        <AiFillCar />
                    </li>
                </Link>
            </ul>} />
        ) : null
      }
    </Media>
        </div>
        <div className="container flights-main">
            <div className="popular-text">
                <h2>Explore World</h2>
                <h3>Popular tickets available to visitors<span>from Uzbekistan</span></h3>
            </div>
            <div className="flightsmain-popular">
                <div className="flightsmain-popular-left">
                    <div className="flightsmain-popular-left-img1">
                        <img src={Flight1} alt="asd"/>
                        <div className="flightsmain-popular-left-img1-text">
                            <h2>Barcelona Tickets</h2>
                            <p>Business class</p>
                        </div>
                    </div>
                    <div className="flightsmain-popular-left-wrapper">
                        <div className="flightsmain-popular-left-img2">
                            <img src={Flight2} alt="asd"/>
                            <div className="flightsmain-popular-left-img2-text">
                                <h2>Barcelona Tickets</h2>
                                <p>Business class</p>
                            </div>
                        </div>
                        <div className="flightsmain-popular-left-img2">
                            <img src={Flight3} alt="asd"/>
                            <div className="flightsmain-popular-left-img2-text">
                                <h2>Barcelona Tickets</h2>
                                <p>Business class</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flightsmain-popular-right">
                    <div className="flightsmain-popular-left-img3">
                        <img src={Flight4} alt="asd"/>
                        <div className="flightsmain-popular-left-img3-text">
                                <h2>Barcelona Tickets</h2>
                                <p>Business class</p>
                        </div>
                    </div>
                    <div className="flightsmain-popular-left-img3">
                        <img src={Flight5} alt="asd"/>
                        <div className="flightsmain-popular-left-img3-text">
                                <h2>Barcelona Tickets</h2>
                                <p>Business class</p>
                        </div>
                    </div>
                    <div className="flightsmain-popular-left-img3">
                        <img src={Flight6} alt="asd"/>
                        <div className="flightsmain-popular-left-img3-text">
                                <h2>Barcelona Tickets</h2>
                                <p>Business class</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tursall'>
            <div className='popular-text'>
                <h2>Trending tours</h2>
                <h3>The most searched for cities<span> on SamoTravel</span></h3>
            </div>
            <div className='tursall-wrapper'>
                <div className='tursall-item'>
                    <div className='tursall-item-img'>
                        <img src={Flfl} alt="img"/>
                        <div className='tursall-item-rate'>
                            <span>450$</span>
                        </div>
                    </div>
                    <div className='tursall-item-text'>
                        <h3>Uzairways</h3>
                        <span>Business</span>
                        <ul className='tursall-item-list'>
                            <li><HiLocationMarker/>Sri Lanka, Anantara</li>
                            <li><SlPlane/>Tashkent</li>
                        </ul>
                        <button className='tursall-item-btn'>More</button>
                    </div>
                </div>
                <div className='tursall-item'>
                    <div className='tursall-item-img'>
                        <img src={Flfl} alt="img"/>
                        <div className='tursall-item-rate'>
                            <span>450$</span>
                        </div>
                    </div>
                    <div className='tursall-item-text'>
                        <h3>Uzairways</h3>
                        <span>Business</span>
                        <ul className='tursall-item-list'>
                            <li><HiLocationMarker/>Sri Lanka, Anantara</li>
                            <li><SlPlane/>Tashkent</li>
                        </ul>
                        <button className='tursall-item-btn'>More</button>
                    </div>
                </div>
                <div className='tursall-item'>
                    <div className='tursall-item-img'>
                        <img src={Flfl} alt="img"/>
                        <div className='tursall-item-rate'>
                            <span>450$</span>
                        </div>
                    </div>
                    <div className='tursall-item-text'>
                        <h3>Uzairways</h3>
                        <span>Business</span>
                        <ul className='tursall-item-list'>
                            <li><HiLocationMarker/>Sri Lanka, Anantara</li>
                            <li><SlPlane/>Tashkent</li>
                        </ul>
                        <button className='tursall-item-btn'>More</button>
                    </div>
                </div>
                <div className='tursall-item'>
                    <div className='tursall-item-img'>
                        <img src={Flfl} alt="img"/>
                        <div className='tursall-item-rate'>
                            <span>450$</span>
                        </div>
                    </div>
                    <div className='tursall-item-text'>
                        <h3>Uzairways</h3>
                        <span>Business</span>
                        <ul className='tursall-item-list'>
                            <li><HiLocationMarker/>Sri Lanka, Anantara</li>
                            <li><SlPlane/>Tashkent</li>
                        </ul>
                        <button className='tursall-item-btn'>More</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default FlightMain;