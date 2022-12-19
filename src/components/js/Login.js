import React, { useState } from "react";
import "../css/Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "./firebase";
import { InfinitySpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const signIn = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3999);
        setTimeout(() => {
            auth.signInWithEmailAndPassword(email, password)
                .then((auth) => {
                    console.log(auth);
                    navigate("/");
                })
                .catch((error) => alert(error.message));
        }, 4000);
        toast("You have successfully signed in!");
    };

    const signInWithGoogle = (e) => {
        e.preventDefault();
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
        toast("You have successfully signed in!");
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
        toast("You have successfully registered!");
    };

    return (
        <div className="login">
            <ToastContainer />
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
                        className="login__signInButton">
                        Sign In
                    </button>
                    {loading ? (
                        <div
                            className="loader"
                            style={{ position: "relative" }}>
                            <InfinitySpin
                                className="infinity-spinner"
                                color="crimson"
                                ariaLabel="three-dots-loading"
                                wrapperStyle
                                wrapperClass
                            />
                        </div>
                    ) : (
                        ""
                    )}
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and
                    Privacy Notice.
                </p>

                <button onClick={register} className="login__registerButton">
                    Create your Amazon account
                </button>
                <button
                    onClick={signInWithGoogle}
                    className="login__registerButton">
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
