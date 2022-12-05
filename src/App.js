import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// All Imported componenets
import Header from "./components/js/Header";
import Home from "./components/js/Home";
import PurchaseCart from "./components/js/PurchaseCart";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/purchase/cart" element={<PurchaseCart />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
