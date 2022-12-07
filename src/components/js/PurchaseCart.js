import React from "react";
import "../css/PurchaseCart.css";
import "../css/PurchaseProduct.css";

import SubTotal from "./SubTotal";
import PurchaseProduct from "./PurchaseProduct";
import { useStateValue } from "./StateProvider";

const PurchaseCart = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="purchase-container">
            <div className="row">
                <SubTotal />

                <div className="purchase-left">
                    <div className="active-cart">
                        <div className="cart-inner">
                            <div className="cart-header">
                                <div className="flex">
                                    <h2>Your Shopping Cart</h2>
                                    <div className="user-panel">
                                        <h2>Hello, {user?.email} </h2>
                                        <small>
                                            <strong>ID:</strong> {user?.uid}
                                        </small>
                                    </div>
                                </div>

                                <a href="/" className="selected-item">
                                    DeSelect all items
                                </a>
                            </div>
                            <div className="active-cart-price">
                                <h4>Price</h4>
                            </div>
                            {basket.map((item, i) => (
                                <PurchaseProduct
                                    key={i}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    productImage={item.productImage}
                                    rating={item.rating}
                                    color={item.color}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseCart;
