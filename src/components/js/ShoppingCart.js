import React from "react";
import "../css/ShoppingCart.css";

const ShoppingCart = () => {
    return (
        <div className="purchase-left">
            <div className="active-cart">
                <div className="cart-inner">
                    <div className="cart-header">
                        <h2>Shopping Cart</h2>
                        <a href="/" className="selected-item">
                            DeSelect all items
                        </a>
                    </div>
                    <div className="shopping__cartItems">
                        <form action="" className="activeCartView">
                            <div className="active-cart-price">
                                <h4>Price</h4>
                            </div>
                            <div className="active-cart-content">
                                <div className="content-image">
                                    <label htmlFor="">
                                        <input type="checkbox" />
                                    </label>
                                    <div className="check-image">
                                        <a href="/">
                                            <img
                                                src="https://m.media-amazon.com/images/I/71vFKBpKakL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="content-text">
                                    <a href="/" className="context-text-title">
                                        <h3>
                                            2020 Apple MacBook Air Laptop: Apple
                                            M1 Chip, 13” Retina Display, 8GB
                                            RAM, 256GB SSD Storage, Backlit
                                            Keyboard, FaceTime HD Camera, Touch
                                            ID. Works with iPhone/iPad; Gold
                                        </h3>
                                    </a>
                                    <div className="content-color">
                                        <p className="product-color">
                                            <strong>Color:</strong>
                                            <span>Gold</span>
                                        </p>
                                        <p className="product-model">
                                            <strong>Configuration:</strong>
                                            <span>Without AppleCare+</span>
                                        </p>
                                        <div className="flex">
                                            <li>
                                                QTY: 1 <span>|</span>
                                            </li>
                                            <li className="link">
                                                <a href="/Delete">
                                                    Delete<span>|</span>
                                                </a>
                                            </li>
                                            <li className="link">
                                                <a href="/compare">
                                                    Compare with similar items
                                                </a>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-price">
                                    <p>$799.9</p>
                                </div>
                            </div>
                        </form>
                        <form action="" className="activeCartView">
                            <div className="active-cart-price">
                                <h4>Price</h4>
                            </div>
                            <div className="active-cart-content">
                                <div className="content-image">
                                    <label htmlFor="">
                                        <input type="checkbox" />
                                    </label>
                                    <div className="check-image">
                                        <a href="/">
                                            <img
                                                src="https://m.media-amazon.com/images/I/71vFKBpKakL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="content-text">
                                    <a href="/" className="context-text-title">
                                        <h3>
                                            2020 Apple MacBook Air Laptop: Apple
                                            M1 Chip, 13” Retina Display, 8GB
                                            RAM, 256GB SSD Storage, Backlit
                                            Keyboard, FaceTime HD Camera, Touch
                                            ID. Works with iPhone/iPad; Gold
                                        </h3>
                                    </a>
                                    <div className="content-color">
                                        <p className="product-color">
                                            <strong>Color:</strong>
                                            <span>Gold</span>
                                        </p>
                                        <p className="product-model">
                                            <strong>Configuration:</strong>
                                            <span>Without AppleCare+</span>
                                        </p>
                                        <div className="flex">
                                            <li>
                                                QTY: 1 <span>|</span>
                                            </li>
                                            <li className="link">
                                                <a href="/Delete">
                                                    Delete<span>|</span>
                                                </a>
                                            </li>
                                            <li className="link">
                                                <a href="/compare">
                                                    Compare with similar items
                                                </a>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-price">
                                    <p>$799.9</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="sc-item-list"></div>
            <div className="sc-about-list"></div>
        </div>
    );
};

export default ShoppingCart;
