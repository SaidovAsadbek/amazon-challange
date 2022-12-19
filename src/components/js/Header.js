import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
import {
    Search,
    LocationOnOutlined,
    AddShoppingCartOutlined,
} from "@mui/icons-material";

// basket data layer
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    // console.log(user.email, "Header User");
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
            toast("You have signed out!");
        }
    };

    return (
        <div className="header">
            <NavLink to="/" className="brand">
                <img
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon.com"
                    className="header__logo"
                />
            </NavLink>
            <NavLink to="/" className="location-option">
                <div className="location-icon">
                    <LocationOnOutlined />
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Deliver to</span>
                    <span className="header__optionLineTwo">Uzbekistan</span>
                </div>
            </NavLink>
            <form className="header__search">
                <div className="search_input">
                    <input type="text" className="header__searchInput" />
                </div>
                <button className="header-search-icon">
                    <Search className="header__searchIcon" />
                </button>
            </form>
            <div className="header__nav">
                <NavLink
                    to={!user && "/register/login"}
                    onClick={handleAuthentication}
                    className="header__option">
                    <span className="header__optionLineOne">
                        Hello, {!user ? "Guest" : user.email}
                    </span>
                    <span className="header__optionLineTwo">
                        {user ? "Sign Out" : "Sign In"}
                    </span>
                </NavLink>
                <NavLink to="/orders" className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </NavLink>
                <NavLink to="/" className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </NavLink>
                <NavLink to="/purchase/cart" className="header__optionBasket">
                    <AddShoppingCartOutlined />
                    <span className="header__optionLineTwo header__basketCount">
                        {basket.length}
                    </span>
                </NavLink>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Header;
