import React from "react";
import './header.css'
// import Filter from "../filter/filter";


const Header = (props) => {
    return(
        <header className="header">
            <div className="header-bg">
                <img src={props.images} alt="headerbg"/>
            </div>
            <h1>{props.title}<span>{props.text}</span></h1>
            {/* <Filter/> */}
        </header>
    )
}

export default Header