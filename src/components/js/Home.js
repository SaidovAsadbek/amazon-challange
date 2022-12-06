import React from "react";
import "../css/Home.css";
import Product from "./Product";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__banner">
                    <img
                        className="home__image"
                        src="https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg"
                        alt="Banner"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1"
                        title="Shop activity trackers and smartwatches"
                        price={555}
                        rating={3}
                        productImage="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
                    />

                    <Product
                        id="2"
                        title="For your Fitness Needs"
                        price={777}
                        rating={4}
                        productImage="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
                    />
                    <Product
                        id="3"
                        title="Apple Macbook Air Laptop"
                        price={999}
                        rating={5}
                        color="Gold"
                        productImage="https://m.media-amazon.com/images/I/71vFKBpKakL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
