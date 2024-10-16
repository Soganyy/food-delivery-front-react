import React, { useState, useCallback } from "react";
import DeliveryMap from "../../../components/DeliveryMap/DeliveryMap";
import "./courierHome.css";
import CourierGame from "../../../components/mini-game/mini-game";

function CourierHomePage() {
  const [merchantLocation] = useState({ lat: 40.385553, lng: 49.803789 });
  const [deliveryLocation] = useState({ lat: 40.392769, lng: 49.791177 });
  const [price] = useState(10);
  const [status, setStatus] = useState(null);
  const [deliveries, setDeliveries] = useState([]);

  const handleAccept = useCallback(() => {
    setStatus("Accepted");
  }, []);

  const handleDecline = useCallback(() => {
    setStatus("Declined");
  }, []);

  return (
    <>
      <h1 className="text-center">Pending Delivery Requests</h1>
      {deliveries.length > 0 ? (
        <div className="container">
          <DeliveryMap merchant={merchantLocation} delivery={deliveryLocation} />

          {/* Delivery Price */}
          <div style={{ marginTop: "20px" }}>
            <h2>Delivery Price: ${price}</h2>
          </div>

          {/* Accept / Decline Buttons */}
          <div style={{ margin: "20px" }}>
            <button onClick={handleAccept} className="button-accept m-5">
              Accept
            </button>
            <button onClick={handleDecline} className="button-decline">
              Decline
            </button>
          </div>

          {/* Display status */}
          {status && <h3 className="status-message">You have {status} the delivery.</h3>}
        </div>
      ) : (
        <>
          <h1 className="text-center">You do not have any delivery requests!</h1>
          <CourierGame />
        </>
      )}
    </>
  );
}

export default CourierHomePage;
