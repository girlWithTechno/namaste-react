import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Log In");
    const status = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    // Subscribing to the store using a selector
    const cartData = useSelector((state)=> state.cart.items);

    return (
        <div className="flex items-center justify-between p-4 bg-pink-100 shadow-md sm:bg-yellow-100 lg:bg-amber-200">
            <div className="w-24">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="flex">
                <ul className="flex">
                    <li className="px-4 text-lg">Online Status: {status ? "✅" : "🛑"}</li>
                    <li className="px-4 text-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 text-lg"><Link to="/">Home</Link></li>
                    <li className="px-4 text-lg"><Link to="/about">About</Link></li>
                    <li className="px-4 text-lg"><Link to="/contact">Contact</Link></li>
                    <li className="px-4 text-lg font-semibold"><Link to="/cart">Cart {`${cartData?.length} items`}</Link></li>
                    <li className="px-4 text-lg font-semibold">{loggedInUser}</li>
                    <button 
                        className="px-4 text-lg" 
                        onClick={()=>{setBtnName(prev=> prev ==="Log Out" ? "Log In": "Log Out")}}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header