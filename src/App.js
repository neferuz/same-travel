import React from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Cars from "./components/cars";
import Footer from "./components/footer";
import HotelsAll from "./components/hotels-main/hotels-all";
import HotelAbout from "./components/hotels-main/hotel-about";
// import Header from './components/header';
import OrderOffline from "./components/order/orderofline";
import OrderOnline from "./components/order/orderonline";
import Cart from "./components/order/cart";
import PopularMain from "./components/turs-main/main";
import Tursmore from "./components/turs-main/tursmore";
import HotelsMain from "./components/hotels-main";
import FlightMain from "./components/flight";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlightAll from "./components/flight/flight-all";
import FlightAbout from "./components/flight/flights-about";
import Registration from "./components/registration/registration";
import Signin from "./components/registration/signin";
import Forgotpass from "./components/registration/forgotpass";
import Confirmpass from "./components/registration/confirmpass";
import CarsAll from "./components/cars/cars-all";
import CarsMore from "./components/cars/cars-more";
import { useParams } from "react-router-dom";
import Train from "./components/train";
import AdminPanel from "./components/admin-panel";
import TursCountryInfo from "./components/turs-main/turs-country-info";

function App() {
  const { hotelId } = useParams();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Header images={Hotelsbg}/> */}
        <Routes>
          <Route path="/" element={<PopularMain />} />
          <Route path="/hotels" element={<HotelsMain />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/turs-main/tursmore" element={<Tursmore />} />
          <Route
            path="/turs-main/turs-country-info"
            element={<TursCountryInfo />}
          />
          <Route path="/cars/cars-all/carsmore" element={<CarsMore />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signin/forgotpassword" element={<Forgotpass />} />
          <Route
            path="/signin/forgotpassword/confirmpass"
            element={<Confirmpass />}
          />
          <Route path="/registration" element={<Registration />} />
          <Route path="/order/online" element={<OrderOnline />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/train" element={<Train />} />
          <Route path="/order/offline" element={<OrderOffline />} />
          <Route path="/flights" element={<FlightMain />} />
          <Route path="/flights/flightsall" element={<FlightAll />} />
          <Route path="/hotels/hotelsall" element={<HotelsAll />} />
          <Route path="/cars/cars-all" element={<CarsAll />} />
          <Route
            path={`/hotels/hotelsall/hotelsabout/:hotelId`}
            element={<HotelAbout hotelId={hotelId} />}
          />
          <Route
            path="/flights/flightsall/flightabout"
            element={<FlightAbout />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
