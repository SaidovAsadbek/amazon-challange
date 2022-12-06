import React from "react";
import "../css/Product.css";
import { StarBorderOutlined } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, rating, productImage, color }) => {
    // const [state, dispatch] = useStateValue();
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // addToBasket clicked
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                color: color,
                productImage: productImage,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <div className="product__title">
                    <h2>{title}</h2>
                    <strong>${price}</strong>
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
                <div className="product__image">
                    <a href="/" className="product__link">
                        <div className="a-section">
                            <img src={productImage} alt="" />
                        </div>
                    </a>
                </div>

                <div className="product__buttons">
                    <a href="/" className="more">
                        See more
                    </a>
                    <button onClick={addToBasket} className="more">
                        Add to basket
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
