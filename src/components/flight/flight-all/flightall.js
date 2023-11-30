// import React from 'react';
// import './flightall.css';
// import { Link } from 'react-router-dom';
// import { MdLocationOn, MdLocalHotel, MdFlightTakeoff, MdOutlineFlight } from 'react-icons/md';
// import { AiFillCar} from 'react-icons/ai';
// import { HiOutlineArrowNarrowRight} from 'react-icons/hi';
// import Filter from '../../filter';
// import Media from "react-media";
// import { DatePicker, Space } from 'antd';
// import LeftFilter from '../../left-filter';
// import Flc1 from '../../../assets/flights/flightcompany/fl2.png'
// import Flc3 from '../../../assets/flights/flightcompany/fl3.png'


// const FlightAll = () => {
//     const { RangePicker } = DatePicker;

//     return(
//         <div className='flightall'>
//             <div className='flights-all'>
//             <Media query="(max-width: 599px)">
//       {matches =>
//         matches ? (
//             <Filter filterbottom={<div className='filter-bottom'>
//             <div className='filter-bottom-wrapper'>
//                 <div className='filter-bottom-item bottom-item2'>
//                     <label>Откуда</label>
//                     <select>
//                         <option selected>
//                             Из Ташкента
//                         </option>
//                     </select>
//                 </div>
//                 <div className='filter-bottom-item bottom-item2'>
//                     <label>Куда</label>
//                     <select>
//                         <option selected defaultChecked>
//                             -выбрать-
//                         </option>
//                         <optgroup label="Саудовская Аравия">
//                             <option value="Джидда">Джидда</option>
//                         </optgroup>
//                         <optgroup label="Шри-Ланка">
//                             <option value="Джидда">в Шри-Ланку</option>
//                         </optgroup>
//                         <optgroup label="ОАЭ">
//                             <option value="Джидда">Дубай</option>
//                         </optgroup>
//                         <optgroup label="Мольдивы">
//                             <option value="Джидда">в Мольдивы</option>
//                         </optgroup>
//                     </select>
//                 </div>
//             </div>
//             <div className='filter-bottom-item'>
//                 <label>Выберите дату</label>
//                 <Space direction="vertical" size={12}>
//                     <RangePicker bordered={false} style={{background:'transparent', border:'none', color:'#000', width:'100%', height:'23px'}} />
//                 </Space>
//             </div>
//             <button type='submit'>Поиск</button>
//         </div>} filter={
//             <ul className="filter-top-sections">
//             <Link to="/">
//                     <li className="filter-top-sections-li ">
//                         <MdLocationOn />
//                     </li>
//             </Link>
//             <Link to="/flights">
//                     <li className="filter-top-sections-li filter-top-sections-active">
//                         <MdFlightTakeoff />
//                         Flights
//                     </li>
//                 </Link>
//             <Link to="/hotels">
//                 <li className="filter-top-sections-li">
//                     <MdLocalHotel />
//                 </li>

//             </Link>
//             <li className="filter-top-sections-li">
//                 <AiFillCar />
//             </li>
//         </ul>}/>
//         ) : (
//             <Filter filterbottom={<div className='filter-bottom'>
//             <div className='filter-bottom-wrapper'>
//                 <div className='filter-bottom-item bottom-item2'>
//                     <label>Откуда</label>
//                     <select>
//                         <option selected>
//                             Из Ташкента
//                         </option>
//                     </select>
//                 </div>
//                 <div className='filter-bottom-item bottom-item2'>
//                     <label>Куда</label>
//                     <select>
//                         <option selected defaultChecked>
//                             -выбрать-
//                         </option>
//                         <optgroup label="Саудовская Аравия">
//                             <option value="Джидда">Джидда</option>
//                         </optgroup>
//                         <optgroup label="Шри-Ланка">
//                             <option value="Джидда">в Шри-Ланку</option>
//                         </optgroup>
//                         <optgroup label="ОАЭ">
//                             <option value="Джидда">Дубай</option>
//                         </optgroup>
//                         <optgroup label="Мольдивы">
//                             <option value="Джидда">в Мольдивы</option>
//                         </optgroup>
//                     </select>
//                 </div>
//             </div>
//             <div className='filter-bottom-item'>
//                 <label>Выберите дату</label>
//                 <Space direction="vertical" size={12}>
//                     <RangePicker bordered={false} style={{background:'transparent', border:'none', color:'#000', width:'100%', height:'23px'}} />
//                 </Space>
//             </div>
//             <button type='submit'>Поиск</button>
//         </div>} filter={
//             <ul className="filter-top-sections">
//             <Link to="/">
//             <li className="filter-top-sections-li ">
//                         <MdLocationOn />
//                         Turs
//                     </li>
//             </Link>
//             <Link to="/flights">
//                     <li className="filter-top-sections-li filter-top-sections-active">
//                         <MdFlightTakeoff />
//                         Flights
//                     </li>
//                 </Link>
//             <Link to="/hotels">
//                 <li className="filter-top-sections-li">
//                     <MdLocalHotel />
//                     Hotels
//                 </li>

//             </Link>
//             <li className="filter-top-sections-li">
//                 <AiFillCar />
//                 Car
//             </li>
//         </ul>}/>
//         )
//       }
//     </Media>
//     <Media query="(min-width: 600px) and (max-width: 899px)">
//       {matches =>
//         matches ? (
//             <Filter 
//          filterbottom={<div className='filter-bottom'>
//             <div className='filter-bottom-wrapper'>
//                 <div className='filter-bottom-item bottom-item2'>
//                     <label>Откуда</label>
//                     <select>
//                         <option selected>
//                             Из Ташкента
//                         </option>
//                     </select>
//                 </div>
//                 <div className='filter-bottom-item bottom-item2'>
//                     <label>Куда</label>
//                     <select>
//                         <option selected defaultChecked>
//                             -выбрать-
//                         </option>
//                         <optgroup label="Саудовская Аравия">
//                             <option value="Джидда">Джидда</option>
//                         </optgroup>
//                         <optgroup label="Шри-Ланка">
//                             <option value="Джидда">в Шри-Ланку</option>
//                         </optgroup>
//                         <optgroup label="ОАЭ">
//                             <option value="Джидда">Дубай</option>
//                         </optgroup>
//                         <optgroup label="Мольдивы">
//                             <option value="Джидда">в Мольдивы</option>
//                         </optgroup>
//                     </select>
//                 </div>
//             </div>
//             <div className='filter-bottom-item'>
//                 <label>Выберите дату</label>
//                 <Space direction="vertical" size={12}>
//                     <RangePicker bordered={false} style={{background:'transparent', border:'none', color:'#000', width:'100%', height:'23px'}} />
//                 </Space>
//             </div>
//             <button type='submit'>Search</button>
//         </div>} filter={
//                 <ul className="filter-top-sections">
//                 <Link to="/">
//                     <li className="filter-top-sections-li ">
//                         <MdLocationOn />
                        
//                     </li>
//                 </Link>
//                 <Link to="/flights">
//                     <li className="filter-top-sections-li filter-top-sections-active">
//                         <MdFlightTakeoff />
//                         Flights
//                     </li>
//                 </Link>
//                 <Link to="/hotels">
//                     <li className="filter-top-sections-li ">
//                         <MdLocalHotel />
                        
//                     </li>
    
//                 </Link>
//                 <li className="filter-top-sections-li">
//                     <AiFillCar />
//                 </li>
//             </ul>} />
//         ) : null
//       }
//     </Media>

//             </div>
//             <div className='container flightsall-wrapper'>
//                 <LeftFilter/>
//                 <div className='flightsall-item-wrapper'>
//                     <div className='flightsall-item'>
//                         <div className='flightsall-item-title'>
//                             <h2>Tashkent</h2>
//                             <HiOutlineArrowNarrowRight/>
//                             <h2>Dubai Thu, 19 Aug</h2>
//                         </div>
//                         <div className='flightsall-item-top'>
//                             <div className='flightall-item-company'>
//                                 <img src={Flc1} alt="asd"/>
//                             </div>
//                             <div className='flightsall-item-pos'>
//                                 <h4>TASH</h4>
//                                 <p>18.02.2023</p>
//                             </div>
//                             <div className='flightsall-item-img'>
//                                 <h5>5h 20m</h5>
//                                 <img src={Flc3} alt="reys"/>
//                                 <MdOutlineFlight/>
//                                 <span>nonstop</span>
//                             </div>
//                             <div className='flightsall-item-pos'>
//                                 <h4>DUBAI</h4>
//                                 <p>18.02.2023</p>
//                             </div>
//                             <Link to="/flights/flightsall/flightabout" className='flightsall-item-cost'>
//                                 <p>350$</p>
//                                 <h3>Book now</h3>
//                             </Link>
//                         </div>
//                         <span className='flightsall-item-span'></span>
//                         <div className='flightsall-item-top'>
//                             <div className='flightall-item-company'>
//                                 <img src={Flc1} alt="asd"/>
//                             </div>
//                             <div className='flightsall-item-pos'>
//                                 <h4>DUBAI</h4>
//                                 <p>18.02.2023</p>
//                             </div>
//                             <div className='flightsall-item-img'>
//                                 <h5>5h 20m</h5>
//                                 <img src={Flc3} alt="reys"/>
//                                 <MdOutlineFlight/>
//                                 <span>nonstop</span>
//                             </div>
//                             <div className='flightsall-item-pos'>
//                                 <h4>TASH</h4>
//                                 <p>18.02.2023</p>
//                             </div>
//                             <Link to="/flights/flightsall/flightabout" className='flightsall-item-cost'>
//                                 <p>350$</p>
//                                 <h3>Book now</h3>
//                             </Link>
//                         </div>
//                     </div>
//                     {/* ITEM MEDIUM ITEM MEDIUM ITEM MEDIUM ITEM MEDIUM */}
//                     <div className='flightsall-item flightsall-item-medium'>
//                         <div className='flightsall-item-title'>
//                             <h2>Tashkent</h2>
//                             <HiOutlineArrowNarrowRight/>
//                             <h2>Dubai Thu, 19 Aug</h2>
//                         </div>
//                         <div className='flightsall-item-top'>
//                             <div className='flightsall-item-top-wrapper'>
//                                 <div className='flightsall-item-pos'>
//                                     <h4>TASH</h4>
//                                     <p>18.02.2023</p>
//                                 </div>
//                                 <div className='flightsall-item-img'>
//                                     <h5>5h 20m</h5>
//                                     <img src={Flc3} alt="reys"/>
//                                     <MdOutlineFlight/>
//                                     <span>nonstop</span>
//                                 </div>
//                                 <div className='flightsall-item-pos'>
//                                     <h4>DUBAI</h4>
//                                     <p>18.02.2023</p>
//                                 </div>
//                             </div>
//                             <div className='flightsall-item-cost-wrapper'>
//                                 <div className='flightall-item-company'>
//                                     <img src={Flc1} alt="asd"/>
//                                 </div>
//                                 <Link to="/flights/flightsall/flightabout" className='flightsall-item-cost'>
//                                     <p>350$</p>
//                                     <h3>Book now</h3>
//                                 </Link>
//                             </div>
//                         </div>
//                         <span className='flightsall-item-span'></span>
//                         <div className='flightsall-item-top'>
//                             <div className='flightsall-item-top-wrapper'>
//                                 <div className='flightsall-item-pos'>
//                                     <h4>TASH</h4>
//                                     <p>18.02.2023</p>
//                                 </div>
//                                 <div className='flightsall-item-img'>
//                                     <h5>5h 20m</h5>
//                                     <img src={Flc3} alt="reys"/>
//                                     <MdOutlineFlight/>
//                                     <span>nonstop</span>
//                                 </div>
//                                 <div className='flightsall-item-pos'>
//                                     <h4>DUBAI</h4>
//                                     <p>18.02.2023</p>
//                                 </div>
//                             </div>
//                             <div className='flightsall-item-cost-wrapper'>
//                                 <div className='flightall-item-company'>
//                                     <img src={Flc1} alt="asd"/>
//                                 </div>
//                                 <Link to="/flights/flightsall/flightabout" className='flightsall-item-cost'>
//                                     <p>350$</p>
//                                     <h3>Book now</h3>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                     {/* ITEM MEDIUM ITEM MEDIUM ITEM MEDIUM ITEM MEDIUM */}
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default FlightAll

import React, { useEffect } from 'react';
import axios from 'axios';
import soapRequest from './soap.xml'; // Путь к вашему файлу с SOAP-запросом

const FlightAll = () => {
    useEffect(() => {
        const sendSoapRequest = async () => {
            try {
                const response = await axios.post('ваш_URL_сервера', soapRequest, {
                    headers: {
                        'Content-Type': 'text/xml;charset=UTF-8',
                        'SOAPAction': 'http://avia.preprod.net.mlsd.ru:11000/Avia.svc?singleWsdl' // Замените на соответствующий SOAPAction вашего запроса
                    }
                });
                console.log('Ответ на SOAP-запрос:', response.data);
                // Обработка ответа
            } catch (error) {
                console.error('Ошибка при выполнении SOAP-запроса:', error);
                // Обработка ошибки
            }
        };

        sendSoapRequest();
    }, []);

    return (
        <div>
            <h2>SOAP Request</h2>
        </div>
    );
};

export default FlightAll;


from zeep import Client


wsdl_url = "http://avia.preprod.net.mlsd.ru:11000/Avia.svc?singleWsdl"


client = Client(wsdl_url)


def perform_request(request_name, request_body):
    try:
        response = client.service[request_name](request_body)
        print(f"Request for {request_name}:")
        print(client.last_sent)
        print(f"Response for {request_name}:")
        print(client.last_received)
        return response
    except Exception as e:
        print(f"Error: {e}")
        return None


user_id = '14009'
auth_token = '69FA808F98EC74D068E83D75AE6E1DB5'
source_preference = ['-15419', '-15424']
nemo_login = 'api_test_samogroup'
nemo_password = '1234567'

# Функция для создания брони
def create_booking(passenger_count):
    request_body = {
        'Request': {
            'Requisites': {
                'Login': nemo_login,
                'Password': nemo_password,
            },
            'UserID': user_id,
            'RequestBody': {
                'RequestedFlightInfo': {
                    'Direct': 0,
                    'AroundDates': 0,
                    'ODPairs': {
                        'ODPair': [
                            {
                                'DepatureDateTime': '2017-09-22T00:00:00',
                                'DepaturePoint': {
                                    'Code': 'MOW',
                                    'IsCity': 1,
                                },
                                'ArrivalPoint': {
                                    'Code': 'LED',
                                    'IsCity': 1,
                                },
                            },
                        ],
                    },
                },
                'Passengers': {
                    'Passenger': [{'Type': 'ADT', 'Count': passenger_count}],
                },
                'Restrictions': {
                    'SourcePreference': {
                        'Source': source_preference,
                    },
                },
            },
        },
    }
    return perform_request('Search_1_2', request_body)
