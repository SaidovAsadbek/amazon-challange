import React, { useState } from "react";
import "../css/Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                navigate("/");
            })
            .catch((error) => alert(error.message));
    };

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    navigate("/");
                }
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login-link">
                <NavLink to="/" className="login-page-router">
                    <img
                        src="../brands/amazon.png"
                        className="login__logo"
                        alt="amazon"
                    />
                </NavLink>
            </div>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email or mobile phone number</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        onClick={signIn}
                        className="login__signInButton"
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and
                    Privacy Notice.
                </p>

                <button onClick={register} className="login__registerButton">
                    Create your Amazon account
                </button>
            </div>
        </div>
    );
};

export default Login;
