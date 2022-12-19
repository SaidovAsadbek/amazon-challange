import React from "react";
import { useStateValue } from "./StateProvider";

const OrdersList = () => {
    const [{ basket }, dispatch] = useStateValue();

    return <div className="orders__list">This's the list of orders
        {basket.map((order, index) => (
            <div className="orders__list_item" key={index}>
                <div className="orders__list_item_image">
                    <img src={order.productImage} width="200" alt={order.title} />
                </div>
                <div className="order__list__content">
                    <div className="order__list_title">{order.title}</div>
                    <div className="order__list_price">${order.price}</div>
                </div>
            </div>
        ))}
    </div>;
};

export default OrdersList;
