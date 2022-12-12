import React from "react";
import "../css/PurchaseProduct.css";
import { StarBorderOutlined } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

const PurchaseProduct = ({ id, title, price, rating, productImage, color }) => {
    const [{ basket }, dispatch] = useStateValue();

    // console.log(basket);

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="shopping__cartItems">
            <div className="basketItem">
                <div className="activeCartView">
                    <div className="active-cart-content">
                        <div className="content-image">
                            <label htmlFor="">
                                <input type="checkbox" />
                            </label>
                            <div className="check-image">
                                <a href="/">
                                    <img src={productImage} alt={title} />
                                </a>
                            </div>
                        </div>
                        <div className="content-text">
                            <a href="/" className="context-text-title">
                                <h3>{title}</h3>
                            </a>
                            <div className="content-color">
                                <div className="product-color">
                                    {color ? (
                                        <>
                                            <strong>Color:</strong>
                                            <span>{color}</span>
                                        </>
                                    ) : (
                                        <></>
                                    )}

                                    <div className="product__rating">
                                        {Array(rating)
                                            .fill()
                                            .map((_, i) => (
                                                <p key={i}>
                                                    <StarBorderOutlined />
                                                </p>
                                            ))}
                                    </div>
                                </div>
                                <p className="product-model">
                                    <strong>Configuration:</strong>
                                    <span>Without AppleCare+</span>
                                </p>
                                <div className="flex">
                                    <li>
                                        QTY: 1 <span>|</span>
                                    </li>
                                    <li className="link">
                                        <button onClick={removeFromBasket}>
                                            Delete<span>|</span>
                                        </button>
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
                            <small>
                                <strong>ID: {id}</strong>
                            </small>
                            <p>${price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseProduct;
