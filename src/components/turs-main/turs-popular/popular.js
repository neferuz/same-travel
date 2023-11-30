import React from "react";
import './popular.css';
import Imgd from '../../../assets/turs/imgd.png';
import Imga from '../../../assets/turs/imga.png';
import Imgs from '../../../assets/turs/imgs.png';
import Imgl from '../../../assets/turs/imgl.png';
import Imgm from '../../../assets/turs/imgm.png';
import Imgt from '../../../assets/turs/imgt.png';
import { AiFillStar } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';



const PopularTurs = () => {
    return(
        <div className="container popular">
            <div className="popular-text">
                <h2>We invite you to visit</h2>
                <h3>Popular destinations open to visitors <span>from Uzbekistan</span></h3>
            </div>
            <div className="popular-turs">
                <Link to="/turs-main/turs-country-info" className="popular-turs-item">
                    <div className="popular-turs-item-img">
                        <img src={Imgd} alt="products"/>
                    </div>
                    <div className="popular-turs-item-text">
                        <span className="popular-turs-item-star">
                            <AiFillStar/>
                            5.0
                        </span>
                        <h4 className="popular-turs-item-title">
                            Dubai
                            <span>
                                <MdLocationOn/>
                                29 Tours
                            </span>
                        </h4>
                    </div>
                    </Link>
                <div className="popular-turs-item">
                    <div className="popular-turs-item-img">
                        <img src={Imga} alt="products"/>
                    </div>
                    <div className="popular-turs-item-text">
                        <span className="popular-turs-item-star">
                            <AiFillStar/>
                            4.5
                        </span>
                        <h4 className="popular-turs-item-title">
                            Antalia
                            <span>
                                <MdLocationOn/>
                                25 Tours
                            </span>
                        </h4>
                    </div>
                </div>
                <div className="popular-turs-item">
                    <div className="popular-turs-item-img">
                        <img src={Imgs} alt="products"/>
                    </div>
                    <div className="popular-turs-item-text">
                        <span className="popular-turs-item-star">
                            <AiFillStar/>
                            4.8
                        </span>
                        <h4 className="popular-turs-item-title">
                            Saudi Arabia
                            <span>
                                <MdLocationOn/>
                                20 Tours
                            </span>
                        </h4>
                    </div>
                </div>
                <div className="popular-turs-item">
                    <div className="popular-turs-item-img">
                        <img src={Imgl} alt="products"/>
                    </div>
                    <div className="popular-turs-item-text">
                        <span className="popular-turs-item-star">
                            <AiFillStar/>
                            4.3
                        </span>
                        <h4 className="popular-turs-item-title">
                            Sri Lanka
                            <span>
                                <MdLocationOn/>
                                18 Tours
                            </span>
                        </h4>
                    </div>
                </div>
                <div className="popular-turs-item">
                    <div className="popular-turs-item-img">
                        <img src={Imgm} alt="products"/>
                    </div>
                    <div className="popular-turs-item-text">
                        <span className="popular-turs-item-star">
                            <AiFillStar/>
                            4.9
                        </span>
                        <h4 className="popular-turs-item-title">
                            Maldives
                            <span>
                                <MdLocationOn/>
                                31 Tours
                            </span>
                        </h4>
                    </div>
                </div>
                <div className="popular-turs-item">
                    <div className="popular-turs-item-img">
                        <img src={Imgt} alt="products"/>
                    </div>
                    <div className="popular-turs-item-text">
                        <span className="popular-turs-item-star">
                            <AiFillStar/>
                            4.1
                        </span>
                        <h4 className="popular-turs-item-title">
                            Turkey
                            <span>
                                <MdLocationOn/>
                                10 Tours
                            </span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularTurs;