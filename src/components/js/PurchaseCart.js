import React from "react";
import "../css/PurchaseCart.css";
import SubTotal from "./SubTotal";
import ShoppingCart from "./ShoppingCart";

const PurchaseCart = () => {
    return (
        <div className="purchase-container">
            <div className="row">
                <SubTotal />
                <ShoppingCart />
            </div>
        </div>
    );
};

export default PurchaseCart;
