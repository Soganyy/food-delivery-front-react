import React from "react";
import "./order-info-card.css";

const OrderInfoCard = ({ name, description, price, rate, height }) => {
  return (
    <div>
      <div className="order-container" style={{ height: height }}>
        <div className="order-title-container">
          <h5 className="order-title">{name}</h5>
          <hr/>
        </div>
        <div className="order-info-container">
          <span>
            <p className="gray-text">Description:</p>
            {description}
            <br></br>
            <br></br>
            <p className="gray-text">Price:</p>
            {price} $ 
            <br></br>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  );
};

// {
//     "product": {
//         "id": 1,
//         "price": 15000,
//         "name": "Salade",
//         "description": 30
//     },
//     "rate": 0
// }
export default OrderInfoCard;