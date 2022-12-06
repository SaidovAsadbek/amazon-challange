import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// All Imported componenets
import Header from "./components/js/Header";
import Home from "./components/js/Home";
import PurchaseCart from "./components/js/PurchaseCart";
import Login from "./components/js/Login";

function App() {
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
