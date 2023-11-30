import React, { useState, useEffect } from "react";
import "./hotelsmain.css";
import Hotelsbg from "../../assets/hotelsbg.png";
import { DatePicker, Space } from "antd";
import { MdLocationOn, MdFlightTakeoff, MdLocalHotel } from "react-icons/md";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { TbTrain } from "react-icons/tb";
import Hedaer from "../header";
import "./hotels-all/hotelsall.css";
import { AiFillCar, AiFillStar, AiOutlineUser } from "react-icons/ai";
import { BsFlag, BsCalendar4Week } from "react-icons/bs";
import { GiMeal } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../left-filter/leftfilter.css";
import { ImSearch } from "react-icons/im";
import { GrFormClose } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Rate } from "antd";

const HotelsMain = () => {
  const [hotels, setHotels] = useState([]);
  const [country, setCountry] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState("");
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [radiovalue, setRadioValue] = useState("Econom");
  const [pasShow, setPasShow] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedDates, setSelectedDates] = useState(null);
  const [numberOfNights, setNumberOfNights] = useState(0);

  const handleDateChange = (dates) => {
    if (dates && dates.length === 2) {
      const startDate = dates[0];
      const endDate = dates[1];

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (startDate >= today && endDate > startDate) {
        const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        setSelectedDates(startDate);
        setNumberOfNights(nights);
      } else {
        setSelectedDates(null);
        setNumberOfNights(0);
      }
    } else {
      setSelectedDates(null);
      setNumberOfNights(0);
    }
  };

  const { RangePicker } = DatePicker;
  const [filterShow, setfilterShow] = useState(false);

  const filterShowStyle = filterShow
    ? "left-filter-item-wrapper filter-phone filter-phone-active"
    : "left-filter-item-wrapper filter-phone";
  useEffect(() => {
    if (country.trim() !== "") {
      const searchTimeout = setTimeout(() => {
        fetch("https://api.awaretour.com/v1/hotel/search-destination", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 21e3aa41-xpfh-7110-9bvy-eeb9542c53ad",
          },
          body: JSON.stringify({
            culture: "en-US",
            query: country,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data && data.data && data.data.length > 0) {
              setDestinations(data.data);
              setError(null);
            } else {
              setDestinations([]);
              setError("Отелей не найдено.");
            }
          })
          .catch((error) => {
            console.error("Произошла ошибка:", error);
            setError("Произошла ошибка при обращении к API.");
          });
      }, 1000);

      return () => clearTimeout(searchTimeout);
    } else {
      setDestinations([]);
      setError(null);
    }
  }, [country]);

  const handleSelectedCityChange = (selectedCityId) => {
    setSelectedCityId(selectedCityId);
  };

  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer 21e3aa41-xpfh-7110-9bvy-eeb9542c53ad",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      destination_type: 2,
      destination: selectedCityId,
      roomCriteria: [
        {
          adult: counter,
          childAges: [],
        },
      ],
      nationality: "RU",
      check_in: selectedDates,
      night: numberOfNights,
      currency: "USD",
      culture: "en-US",
    }),
  };

  const handleSearchHotels = () => {
    setLoading(true);
    fetch("https://api.awaretour.com/v1/hotel/search-hotels", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setHotels(data.data.hotels);
        setLoading(false); // Завершена загрузка, скрыть индикатор
      })
      .catch((error) => {
        console.error("Произошла ошибка при поиске отелей:", error);
        setLoading(false); // Завершена загрузка, скрыть индикатор
      });
  };

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  const handleClick22 = () => {
    setCounter2(counter2 + 1);
  };

  const handleClick33 = () => {
    setCounter2(counter2 - 1);
  };

  const changeHandler = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <div className="hotels-wrapper">
      <div className="hotels">
        <Hedaer
          images={Hotelsbg}
          title={"HOTELS"}
          text={"Fell at home any where in the world!"}
        />
        <div className="filter">
          <div className="container filter-wrapper">
            <div>
              <div className="filter-top">
                <ul className="filter-top-sections">
                  <Link to="/">
                    <li className="filter-top-sections-li ">
                      <MdLocationOn />
                      Tours
                    </li>
                  </Link>
                  <Link to="/flights">
                    <li className="filter-top-sections-li ">
                      <MdFlightTakeoff />
                      Flights
                    </li>
                  </Link>
                  <Link to="/hotels">
                    <li className="filter-top-sections-li filter-top-sections-active">
                      <MdLocalHotel />
                      Hotels
                    </li>
                  </Link>
                </ul>
                <div className="turs-passengers">
                  <div className="turs-trip">
                    <h5 onClick={() => setPasShow(!pasShow)}>
                      {counter}, Взрослые, {counter2}, дети, {radiovalue}
                    </h5>
                    <RiArrowDownSLine />
                    <div
                      className={
                        pasShow
                          ? "turs-trip-wrapper turs-trip-wrapper-active"
                          : "turs-trip-wrapper"
                      }
                    >
                      <div className="turs-trip-top">
                        <span>
                          Взрослые <br /> Старше 12 лет{" "}
                        </span>
                        <AiOutlinePlusCircle onClick={handleClick1} />
                        <p>{counter}</p>
                        <AiOutlineMinusCircle onClick={handleClick2} />
                      </div>
                      <div className="turs-trip-top">
                        <span>
                          Дети <br /> До 12 лет{" "}
                        </span>
                        <AiOutlinePlusCircle onClick={handleClick22} />
                        <p>{counter2}</p>
                        <AiOutlineMinusCircle onClick={handleClick33} />
                      </div>
                      <div className="turs-trip-class">
                        <h4>Air travel</h4>
                        <div className="trus-trip-class-wrapper">
                          <input
                            type="radio"
                            id="contactChoice1"
                            name="contact"
                            checked={radiovalue === "Econom"}
                            value="Econom"
                            onChange={changeHandler}
                          />
                          <label htmlFor="contactChoice1">Эконом</label>
                          <input
                            type="radio"
                            id="contactChoice2"
                            name="contact"
                            checked={radiovalue === "Bussines"}
                            value="Bussines"
                            onChange={changeHandler}
                          />
                          <label htmlFor="contactChoice2">Бизнес</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-bottom">
                <div className="filter-bottom-wrapper">
                  <div className="filter-bottom-item bottom-item2 bottom-item2-hotels">
                    <label>
                    Направление <br />
                      <input
                        type="text"
                        className="naprava"
                        placeholder="Отель/Направление "
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                      />
                      <select
                        value={selectedCityId}
                        onChange={(e) =>
                          handleSelectedCityChange(e.target.value)
                        }
                      >
                        <option value="">Выберите город</option>
                        {destinations.map((city, index) => (
                          <option
                            key={`${city.city.id}-${index}`}
                            value={city.city.id}
                          >
                            {city.city.internationalName}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
                <div className="filter-bottom-item">
                  <label>Выберите дату</label>
                  <Space direction="vertical" size={12}>
                    <RangePicker
                      bordered={false}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#000",
                        width: "100%",
                        height: "23px",
                      }}
                      onChange={handleDateChange}
                    />
                  </Space>
                </div>
                <button type="submit" onClick={handleSearchHotels}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hotelsall">
        <div className="hotelsall-wrapper">
          {loading ? ( // Показать "Loading..." во время загрузки
            <div className="loading-message">
              Ищем удобные вам отели...
            </div>
          ) : (
            <>
              <div className="leftfilter">
                <div
                  className="leftfilter-media"
                  onClick={() => setfilterShow(!filterShow)}
                >
                  <h5>Filter</h5>
                  <MdKeyboardArrowRight />
                </div>

                <div className="left-filter-item-wrapper filter-desktop">
                  <div className="leftfilter-wrapper">
                    <h3>Search location or tours</h3>
                    <div className="leftfilter-item leftfilter-item-serch">
                      <input placeholder="Search" className="filter-search" />
                      <ImSearch className="search-icon" />
                    </div>
                  </div>
                  <div className="leftfilter-wrapper">
                    <h3>Hotel star rating</h3>
                    <div className="leftfilter-item">
                      <Rate allowHalf defaultValue={5} />
                    </div>
                  </div>
                </div>
                <div className={filterShowStyle}>
                  <div className="leftfilter-media-open">
                    <h5>Filter</h5>
                    <h5>Clear</h5>
                    <GrFormClose onClick={() => setfilterShow(!filterShow)} />
                  </div>
                  <div className="leftfilter-wrapper">
                    <h3>Search location or tours</h3>
                    <div className="leftfilter-item leftfilter-item-serch">
                      <input placeholder="Search" className="filter-search" />
                      <ImSearch className="search-icon" />
                    </div>
                  </div>
                  <div className="leftfilter-wrapper">
                    <h3>Hotel star rating</h3>
                    <div className="leftfilter-item">
                      <Rate allowHalf defaultValue={5} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hotelsall-item-wrapper">
                {hotels.map((hotel, index) => (
                  <div key={index} className="hotelsall-item">
                    <div className="hotelsall-item-img">
                      <img src={hotel.thumbnailFull} alt="asd" />
                    </div>
                    <div className="hotelsall-item-text">
                      <h2>{hotel.name}</h2>
                      <div className="hotelsall-item-text-position">
                        <span>
                          <AiFillStar />
                          {hotel.stars}
                        </span>
                        <span>
                          <BsFlag />
                          {hotel.country.name}, {hotel.city.name}
                        </span>
                      </div>
                      <div className="hotelsall-item-text-wrapper">
                        <ul>
                          <li>
                            <BsCalendar4Week />
                            {hotel.offers[0] &&
                            hotel.offers[0].checkIn.slice(0, -10)
                              ? `${hotel.offers[0].checkIn.slice(0, -10)} `
                              : ""}
                            ,
                            {hotel.offers[0] && hotel.offers[0].night
                              ? `${hotel.offers[0].night} nights`
                              : "N/A"}
                          </li>
                          <li>
                            <AiOutlineUser />
                            {hotel.travellers}
                          </li>
                          <li>
                            <FaBed />
                            {/* {hotel.cancellationPolicies[0] && hotel.cancellationPolicies[0].rooms.roomName ? `${hotel.cancellationPolicies[0].rooms.roomName} $` : "$"}
                                                    {hotel.cancellationPolicies[0] && hotel.cancellationPolicies[0].rooms.boardName ? `${hotel.cancellationPolicies[0].rooms.boardName} $` : "$"} */}
                          </li>
                          <li>
                            <GiMeal />
                            {/* {hotel.badges} */}
                            {hotel.offers[0] &&
                            hotel.offers[0].cancellationPolicies.provider
                              ? `${hotel.offers[0].cancellationPolicies.provider} `
                              : ""}
                          </li>
                          <li>
                            <AiFillCar />
                            {/* {hotel.transferType} */}
                          </li>
                        </ul>
                        <div className="hotelsall-item-link-wrapper">
                          <h3 className="hotelsall-item-cost">
                            {hotel.offers[0] && hotel.offers[0].price.amount
                              ? `${hotel.offers[0].price.amount} `
                              : ""}
                            {hotel.offers[0] && hotel.offers[0].price.currency
                              ? `${hotel.offers[0].price.currency} `
                              : ""}
                          </h3>
                          <Link
                            to={`/hotels/hotelsall/hotelsabout/${hotel.id}`}
                            className="hotelsall-item-link"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelsMain;
