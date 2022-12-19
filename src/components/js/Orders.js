import React from "react";
import "../css/Order.css";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import OrdersList from "./OrdersList";

const Orders = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <NavLink to="/">Go Back</NavLink>
            <OrdersList />
        </div>
    );
};

export default Orders;
