import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// All Imported componenets
import Header from "./components/js/Header";
import Home from "./components/js/Home";
import PurchaseCart from "./components/js/PurchaseCart";
import Login from "./components/js/Login";
import { auth } from "./components/js/firebase";
import { useStateValue } from "./components/js/StateProvider";

function App() {
    // signIn/register... the user logged and logout
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log("THIS USER IS >>>", authUser);

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
