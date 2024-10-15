import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./courierHome.css"; // Import the CSS file

// Google Maps API Key
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function CourierHomePage() {
  const [merchantLocation] = useState({ lat: 40.73061, lng: -73.935242 });
  const [deliveryLocation] = useState({ lat: 40.712776, lng: -74.005974 });
  const [price] = useState(10);
  const [status, setStatus] = useState(null);

  const handleAccept = useCallback(() => {
    setStatus("Accepted");
  }, []);

  const handleDecline = useCallback(() => {
    setStatus("Declined");
  }, []);

  return (
    <div className="container">
      <h1>Courier Delivery Request</h1>

      {/* Merchant Location Map */}
      <div className="map-container">
        <h3>Merchant Location</h3>
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
          <GoogleMap mapContainerStyle={containerStyle} center={merchantLocation} zoom={12}>
            <Marker position={merchantLocation} />
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Delivery Location Map */}
      <div className="map-container" style={{ marginTop: "20px" }}>
        <h3>Delivery Location</h3>
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
          <GoogleMap mapContainerStyle={containerStyle} center={deliveryLocation} zoom={12}>
            <Marker position={deliveryLocation} />
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Delivery Price */}
      <div style={{ marginTop: "20px" }}>
        <h2>Delivery Price: ${price}</h2>
      </div>

      {/* Accept / Decline Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAccept} className="button-accept">
          Accept
        </button>
        <button onClick={handleDecline} className="button-decline">
          Decline
        </button>
      </div>

      {/* Display status */}
      {status && <h3 className="status-message">You have {status} the delivery.</h3>}
    </div>
  );
}

export default CourierHomePage;
