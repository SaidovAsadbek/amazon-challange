import React from "react";
import "../css/SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

const SubTotal = () => {
    // purchase total checkout
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => {
                    return (
                        <>
                            <p>
                                Subtotal ({basket.length} items):{" "}
                                {/* <strong>0</strong> */}
                                <strong>{value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" name="" id="" />
                                This is order contains a gift
                            </small>
                        </>
                    );
                }}
                decimalScale={2}
                value={getBasketTotal(basket)}
                // value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={(e) => navigate("/product/payment")}>
                Purchase to checkout
            </button>
        </div>
    );
};

export default SubTotal;
