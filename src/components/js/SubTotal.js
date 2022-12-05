import React from "react";
import "../css/SubTotal.css";
import CurrencyFormat from "react-currency-format";

const SubTotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => {
                    return (
                        <>
                            <p>
                                Subtotal (0 items): <strong>0</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" name="" id="" />
                                This is order contains a gift
                            </small>
                        </>
                    );
                }}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Purchase to checkout</button>
        </div>
    );
};

export default SubTotal;
