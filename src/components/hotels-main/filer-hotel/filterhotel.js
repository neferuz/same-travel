import React, { useState, useEffect } from "react";
import "../../filter/filter.css";
import { DatePicker, Space } from "antd";
import { MdLocationOn, MdFlightTakeoff, MdLocalHotel } from "react-icons/md";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiFillCar,
} from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { TbTrain } from "react-icons/tb";
import "./filterhotel.css";
import { Link } from "react-router-dom";

const HotelFilter = ({ onSearchHotels }) => {
  const [country, setCountry] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState("");
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [radiovalue, setRadioValue] = useState("Econom");
  const [pasShow, setPasShow] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]);

  const { RangePicker } = DatePicker;

  const pasShowStyle = pasShow
    ? "turs-trip-wrapper turs-trip-wrapper-active"
    : "turs-trip-wrapper";

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
          adult: 1,
          childAges: [],
        },
      ],
      nationality: "RU",
      check_in: "2023-09-01",
      night: 7,
      currency: "TRY",
      culture: "tr-TR",
    }),
  };

  const handleSearchHotels = () => {
    setLoading(true);
    fetch("https://api.awaretour.com/v1/hotel/search-hotels", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log("API Ответ:", data);
        setHotels(data);
        console.log("Response:", data.data.hotels); // Верное место для лога
        
          setHotels(data.data.hotels);
    

      })
      .catch((error) => {
        console.error("Произошла ошибка при поиске отелей:", error);
      });
  };
  
  useEffect(() => {
    console.log("Отели:", hotels);
    hotels.forEach((hotel) => {
      console.log("Название отеля:", hotel.name);
      console.log("Адрес отеля:", hotel.address);
    });
  }, [hotels]);

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

  // Component for displaying a single hotel card
  const HotelCard = ({ hotel }) => (
    <div className="hotel-card">
      <h3>{hotel.name}</h3>
      <img className="zafar" src={hotel.thumbnailFull} alt={hotel.name} />
    </div>
  );

  // Component for displaying a list of hotels
  const HotelList = ({ hotels }) => {
    // Display only the first 10 hotels
    const displayedHotels = hotels.slice(0, 10);

    return (
      <div className="hotel-list">
        {displayedHotels.map((hotel) => (
          <HotelCard hotel={hotel} key={hotel.id} />
        ))}
      </div>
    );
  };

  return (
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
                <li className="filter-top-sections-li filter-top-sections-active">
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
            </ul>

            <div className="turs-passengers">
              <div className="turs-trip">
                <h5 onClick={() => setPasShow(!pasShow)}>
                  {counter}, adults, {counter2}, children, {radiovalue}
                </h5>
                <RiArrowDownSLine />
                <div className={pasShowStyle}>
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
                      />
                      <label htmlFor="contactChoice1">Econom</label>
                      <input
                        checked={radiovalue === "Bussines"}
                        type="radio"
                        id="contactChoice2"
                        name="contact"
                        value="Bussines"
                      />
                      <label htmlFor="contactChoice2">Bussines</label>
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
                  Город <br />
                  <input
                    type="text"
                    className="strana"
                    placeholder="Введите название страны"
                    defaultValue={country}
                    onChange={(event) => setCountry(event.target.value)}
                  />
                  <select
                    value={selectedCityId}
                    onChange={(e) => handleSelectedCityChange(e.target.value)}
                  >
                    <option value="">Select a City</option>
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
                />
              </Space>
            </div>
            <button type="submit" onClick={handleSearchHotels}>
              Search
            </button>
          </div>
        </div>
      </div>
      {/* Render the HotelList component */}
      <HotelList hotels={hotels} />
    </div>
  );
};

export default HotelFilter;
