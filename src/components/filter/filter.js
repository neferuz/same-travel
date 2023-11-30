import React from 'react'
import './filter.css';


    // render() {
const Filter = (props) => {
  
        return (
        <div className="filter">
            <div className="container filter-wrapper">
                <form>
                    <div className="filter-top">
                        {props.filter}
                        <div className="turs-passengers">
                            {/* <select>
                                <option>One way</option>
                                <option selceted>Round-trip</option>
                            </select> */}
                            {props.turspassengers}
                            
                                {/* <div className='turs-trip' >
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
                                </div> */}
                                {props.turstrip}

                                {/* <select>
                                    <option>Transfer indivdual</option>
                                    <option selceted>Transfer group</option>
                            </select> */}
                            {props.transfer}
                        </div>
                    </div>
                    {props.filterbottom}
                </form>
            </div>
        </div>
        )}

export default Filter