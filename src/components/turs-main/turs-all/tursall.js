import React from 'react';
import './tursall.css';
import Imgd from '../../../assets/turs/imgd.png';
import Imga from '../../../assets/turs/imga.png';
import Imgs from '../../../assets/turs/imgs.png';
import Imgl from '../../../assets/turs/imgl.png';
import { AiFillStar } from 'react-icons/ai';
import { HiOutlineOfficeBuilding, HiLocationMarker } from 'react-icons/hi';
import { SlPlane } from 'react-icons/sl';

const TursAll = () => {
    return(
        <div className='container tursall'>
            <div className='popular-text'>
                <h2>Trending tours</h2>
                <h3>The most searched for cities<span> on SamoTravel</span></h3>
            </div>
            <div className='tursall-wrapper'>
                <div className='tursall-item'>
                    <div className='tursall-item-img'>
                        <img src={Imgd} alt="img"/>
                        <div className='tursall-item-rate'>
                            <span>
                                <AiFillStar/>
                                4.8
                            </span>
                            <span>2200$</span>
                        </div>
                    </div>
                    <div className='tursall-item-text'>
                        <h3>Anantara peace</h3>
                        <span>3 days, 4 nights</span>
                        <ul className='tursall-item-list'>
                            <li><HiLocationMarker/>Sri Lanka, Anantara</li>
                            <li><SlPlane/>Business class</li>
                            <li><HiOutlineOfficeBuilding/>Anantara plaza</li>
                        </ul>
                        <button className='tursall-item-btn'>Book now</button>
                    </div>
                </div>
                <div className='tursall-item'>
                    <div className='tursall-item-img'>
                        <img src={Imga} alt="img"/>
                        <div className='tursall-item-rate'>
                            <span>
                                <AiFillStar/>
                                4.1
                            </span>
                            <span>700$</span>
                        </div>
                    </div>
                    <div className='tursall-item-text'>
                        <h3>Anantara peace</h3>
                        <span>3 days, 4 nights</span>
                        <ul className='tursall-item-list'>
                            <li><HiLocationMarker/>Sri Lanka, Anantara</li>
                            <li><SlPlane/>Business class</li>
                            <li><HiOutlineOfficeBuilding/>Anantara plaza</li>
                        </ul>
                        <button className='tursall-item-btn'>Book now</button>
                    </div>
                </div>
                <div className='tursall-item'>
                    <div className='tursall-item-img'>
                        <img src={Imgs} alt="img"/>
                        <div className='tursall-item-rate'>
                            <span>
                                <AiFillStar/>
                                4.4
                            </span>
                            <span>1200$</span>
                        </div>
                    </div>
                    <div className='tursall-item-text'>
                        <h3>Anantara peace</h3>
                        <span>3 days, 4 nights</span>
                        <ul className='tursall-item-list'>
                            <li><HiLocationMarker/>Sri Lanka, Anantara</li>
                            <li><SlPlane/>Business class</li>
                            <li><HiOutlineOfficeBuilding/>Anantara plaza</li>
                        </ul>
                        <button className='tursall-item-btn'>Book now</button>
                    </div>
                </div>
                <div className='tursall-item'>
                    <div className='tursall-item-img'>
                        <img src={Imgl} alt="img"/>
                        <div className='tursall-item-rate'>
                            <span>
                                <AiFillStar/>
                                5
                            </span>
                            <span>450$</span>
                        </div>
                    </div>
                    <div className='tursall-item-text'>
                        <h3>Anantara peace</h3>
                        <span>3 days, 4 nights</span>
                        <ul className='tursall-item-list'>
                            <li><HiLocationMarker/>Sri Lanka, Anantara</li>
                            <li><SlPlane/>Business class</li>
                            <li><HiOutlineOfficeBuilding/>Anantara plaza</li>
                        </ul>
                        <button className='tursall-item-btn'>Book now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TursAll