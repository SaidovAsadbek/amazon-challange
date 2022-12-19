import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// All Imported components
import Header from "./components/js/Header";
import Home from "./components/js/Home";
import PurchaseCart from "./components/js/PurchaseCart";
import Login from "./components/js/Login";
import Orders from "./components/js/Orders";
import { auth } from "./components/js/firebase";
import { useStateValue } from "./components/js/StateProvider";

// payment
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./components/js/Payment";

const Published_KEY =
    "pk_test_51LURq3HnZqhZ7uCLhAU63mYCOIzW9iEdicMsvFGHuSNdVKXl0cSjLya9FEyVEH1jEkQa0564y6sJOlDxFMWli7RY00ZmTd83TE";

const stripePromise = loadStripe(Published_KEY); // Published code

function App() {
    // signIn/register... the user logged and logout
    const [{ basket }, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // the user just logged in / the user was logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                //  the user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, [dispatch]);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/register/login" element={<Login />} />
                    <Route
                        path="/purchase/checkout"
                        element={
                            <>
                                <Header />
                                <Elements stripe={stripePromise}>
                                    <Payment />
                                </Elements>
                            </>
                        }
                    />
                    <Route
                        path="/purchase/cart"
                        element={
                            <>
                                <Header />
                                <PurchaseCart />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
