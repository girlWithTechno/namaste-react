import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Log In");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="log-in" onClick={()=>{setBtnName(prev=> prev ==="Log Out" ? "Log In": "Log Out")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header