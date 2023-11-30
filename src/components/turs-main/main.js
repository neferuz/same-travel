import React, {useState} from "react";
import './main.css'
import TursAll from "./turs-all";
import PopularTurs from "./turs-popular";
import Header from "../header";
import Headerbg from '../../assets/headerbg.png'
import { MdLocationOn, MdLocalHotel, MdFlightTakeoff } from 'react-icons/md';
import { AiFillCar} from 'react-icons/ai';
import { AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';
import { RiArrowDownSLine} from 'react-icons/ri';
import { TbTrain} from 'react-icons/tb';
import Filter from '../filter'
import { DatePicker, Space } from 'antd';
import Media from "react-media";
import { Link } from 'react-router-dom';


const PopularMain = (props) => {
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
        <div className="turs-wrapper">
        <div className="turs">
            <Header images={Headerbg} title='Journey' text='Book your way to the dream with us!'/>
            <Media query="(max-width: 599px)">
      {matches =>
        matches ? (
            <Filter turstrip={<div className='turs-trip' >
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
         transfer={<select>
                <option>Transfer indivdual</option>
                <option selceted>Transfer group</option>
        </select>} filterbottom={<div className='filter-bottom'>
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
            <button type='submit'>Search</button>
        </div>} filter={
            <ul className="filter-top-sections">
            <Link to="/">
            <li className="filter-top-sections-li filter-top-sections-active">
                        <MdLocationOn />
                        Turs
                    </li>
            </Link>
                <Link to="/train">
                    <li className="filter-top-sections-li ">
                        <TbTrain />
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
            transfer={<select>
                <option>Transfer indivdual</option>
                <option selceted>Transfer group</option>
        </select>} filterbottom={<div className='filter-bottom'>
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
            <button type='submit'>Search</button>
        </div>} filter={
            <ul className="filter-top-sections">
            <Link to="/">
            <li className="filter-top-sections-li filter-top-sections-active">
                        <MdLocationOn />
                        Turs
                    </li>
            </Link>
                <Link to="/train">
                    <li className="filter-top-sections-li ">
                        <TbTrain />
                        Train
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
            transfer={<select>
                <option>Transfer indivdual</option>
                <option selceted>Transfer group</option>
        </select>} filterbottom={<div className='filter-bottom'>
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
            <button type='submit'>Search</button>
        </div>} filter={
                <ul className="filter-top-sections">
                <Link to="/">
                    <li className="filter-top-sections-li filter-top-sections-active">
                        <MdLocationOn />
                        Turs
                    </li>
                </Link>
                <Link to="/cars">
                    <li className="filter-top-sections-li ">
                        <TbTrain />
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
                    <li className="filter-top-sections-li ">
                        <AiFillCar />
                    </li>
                </Link>
            </ul>} />
        ) : null
      }
    </Media>
        </div>
        <main className="popular-main">
            <PopularTurs/>
            <div className="main-bottom">
            <TursAll/>

            </div>
        </main>

        </div>
    )
}

export default PopularMain;