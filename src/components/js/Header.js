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

const Header = () => {
    const [{ basket }, dispatch] = useStateValue();

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
                <NavLink to="/register/login" className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </NavLink>
                <NavLink to="/" className="header__option">
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
        </div>
    );
};

export default Header;
