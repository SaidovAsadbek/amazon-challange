import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate, NavLink } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import PurchaseProduct from "./PurchaseProduct";
import axios from "./axios";

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    // stripe state
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            await axios({
                method: "POST",
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
            })
                .then((response) => {
                    // console.log(response.data.clientSecret);
                    setClientSecret(response.data.clientSecret);
                })
                .catch((error) => console.log(error));
        };
        getClientSecret();
    }, [basket]);

    // console.log("SECRET", clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                // paymentIntent = payment confirmation
                console.log(paymentIntent);
                // db.collection("users")
                //     .doc(user?.uid)
                //     .collection("orders")
                //     .doc("CwCqSSYmB9yBJ97Bcu8d")
                //     .set({
                //         basket: basket,
                //         amount: paymentIntent.amount,
                //         created: paymentIntent.created,
                //     })
                //     .then((data) => console.log(data))
                //     .catch((err) => console.log(err));

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                // dispatch({
                //     type: "EMPTY_BASKET",
                // });

                navigate("/orders");
            })
            .catch((error) => console.log("PAYLOAD", error));
        console.log("payload data", payload);
    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : null);
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                    <NavLink to="/checkout">{basket?.length} items</NavLink>)
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
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

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button
                                    disabled={
                                        processing || disabled || succeeded
                                    }>
                                    <span>
                                        {processing ? (
                                            <p>Proccessing...</p>
                                        ) : (
                                            "Buy Now"
                                        )}
                                    </span>
                                </button>
                            </div>
                            {error ||
                                (succeeded && <div>{error || succeeded}</div>)}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

// buy now button inner codes

export default Payment;
