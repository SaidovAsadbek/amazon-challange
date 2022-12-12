import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// All Imported components
import Header from "./components/js/Header";
import Home from "./components/js/Home";
import PurchaseCart from "./components/js/PurchaseCart";
import Login from "./components/js/Login";
import { auth } from "./components/js/firebase";
import { useStateValue } from "./components/js/StateProvider";

// payment page component and initial stripe
import Payment from "./components/js/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
    "pk_test_51LURq3HnZqhZ7uCLhAU63mYCOIzW9iEdicMsvFGHuSNdVKXl0cSjLya9FEyVEH1jEkQa0564y6sJOlDxFMWli7RY00ZmTd83TE"
);

// console.log(promise);

function App() {
    // signIn/register... the user logged and logout
    const [{ basket }, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            // console.log("THIS USER IS >>>", authUser);

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
    }, []);

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
                    <Route path="/register/login" element={<Login />} />
                    <Route
                        path="/product/payment"
                        element={
                            <>
                                <Header />
                                <Elements stripe={promise}>
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
