import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./hotelsabout.css";
import { AiFillStar, AiOutlineWifi } from "react-icons/ai";
import { BsFlag, BsTextarea } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import Hotel1 from "../../../assets/hotelabout/1.png";
import Hotel2 from "../../../assets/hotelabout/2.png";
import Hotel3 from "../../../assets/hotelabout/3.png";
import Hotel4 from "../../../assets/hotelabout/4.png";
import DefaultHotel from "../../../assets/hotelabout/hotel.png";
import { AiFillCloseCircle } from "react-icons/ai";
import { Rate } from "antd";
import { Link } from "react-router-dom";

const HotelsAbout = () => {
  const modalShowStyle = modalShow
    ? "payment-modal payment-modal-active"
    : "payment-modal";
  const [modalShow, setModalShow] = useState(false);
  const { hotelId } = useParams();
  const [hotelDetails, setHotelDetails] = useState({});
  const API_KEY = "21e3aa41-xpfh-7110-9bvy-eeb9542c53ad"; // Замените на ваш ключ API
  const api_url = "https://api.awaretour.com/v1/"; // Базовый URL API

  useEffect(() => {
    const req = {
      hotel_id: hotelId,
      culture: "en-US",
    };

    fetch(`${api_url}hotel/hotel-info`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHotelDetails(data.data);
        console.log(hotelId);
      })
      .catch((error) => {
        console.error("Произошла ошибка:", error);
      });
  }, [hotelId]);
  const [imagesToShow, setImagesToShow] = useState([]);
  const cityName =
    hotelDetails && hotelDetails.address && hotelDetails.address.city
      ? hotelDetails.address.city.name
      : null;
  const countryName =
    hotelDetails && hotelDetails.country ? hotelDetails.country.name : null;
  const descriptionText =
    hotelDetails && hotelDetails.description
      ? hotelDetails.description.text
      : null;

  useEffect(() => {
    if (
      hotelDetails.data &&
      hotelDetails.data.seasons &&
      hotelDetails.data.seasons.length > 0
    ) {
      const allImages = [];

      hotelDetails.data.seasons.forEach((season) => {
        if (season.mediaFiles && season.mediaFiles.length > 0) {
          const seasonImages = season.mediaFiles.map((file) => file.urlFull);
          allImages.push(...seasonImages);
        }
      });

      const firstThreeImages = allImages.slice(0, 3);
      setImagesToShow(firstThreeImages);
    }
  }, [hotelDetails]);

  // Если данные загружаются, вы можете их отобразить
  if (!hotelDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container hotelsabout">
      {hotelDetails.name && (
        <div className="hotel-title">
          <h1>{hotelDetails.name}</h1>
          <div className="hotelsall-item-text-position">
            <span>
              <AiFillStar />
              {hotelDetails.stars}
            </span>
            <span>
              <BsFlag />
              {cityName}, {countryName}
            </span>
          </div>
        </div>
      )}
      <div className="hotel-about-images">
        <div className="hotel-about-img1">
          <img src={hotelDetails.thumbnailFull} alt={hotelDetails.name} />
        </div>
        <div className="hotel-about-img-wrapper">
          {hotelDetails.seasons &&
            hotelDetails.seasons.length > 0 &&
            hotelDetails.seasons[0].mediaFiles
              .slice(1, 4)
              .map((file, index) => (
                <div key={index} className="hotel-about-img2">
                  <img src={file.urlFull} alt={`Image ${index}`} />
                </div>
              ))}
        </div>
      </div>
      <Rate disabled defaultValue={5} className="hotel-about-rating" />
      <div className="hotel-about-text">
        <ul className="hotel-about-text-list">
          <h4>Exclusive room in house</h4>
          <p>Zuich, Switzerland</p>
        </ul>
        <ul className="hotel-about-text-list">
          <h3>Description</h3>
          {/* {hotelDetails.city.name}, {hotelDetails.country.name}
  <p>{hotelDetails?.description?.text}</p> */}
          {descriptionText}
        </ul>

        <div className="hotel-about-text-list">
          <h3>Hotel features</h3>
          <ul>
            <li>
              <AiOutlineWifi />
              Wi-Fi
            </li>
            <li>
              <FaBath />
              Bathup
            </li>
            <li>
              <GiMeal />
              Breakfast
            </li>
            <li>
              <FaBed />
              Kins bed
            </li>
            <li>
              <BsTextarea />
              4m X 6m
            </li>
          </ul>
        </div>
      </div>
      <div className="hotel-class">
        <h2>Select from</h2>
        <div className="hotel-class-wrapper">
          <div className="hotel-class-img">
            <img src={DefaultHotel} alt="asd" />
          </div>
          <div className="hotel-class-text">
            <h2>Standart room</h2>
            <p>Offer conditions:</p>
            <ul>
              <li>
                <MdDone /> Non-refundable
              </li>
              <li>
                <MdDone /> Free Wifi
              </li>
              <li>
                <MdDone /> Breakfast for 2 people
              </li>
            </ul>
          </div>

          <div className="hotel-class-cost">
            <span>102$</span>
            <h4
              className="hotel-class-cost-link"
              onClick={() => setModalShow(!modalShow)}
            >
              select
            </h4>
          </div>
        </div>
      </div>
      <div className={modalShowStyle} onClick={() => setModalShow(!modalShow)}>
        <div className="payment-modal-wrapper">
          <AiFillCloseCircle onClick={() => setModalShow(!modalShow)} />
          <h3>Payment method: </h3>
          <Link to="/order/online" className="pament-modal-pethod">
            Online
          </Link>
          <Link to="/order/offline" className="pament-modal-pethod">
            Offline
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelsAbout;
