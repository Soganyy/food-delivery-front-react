import React, { useState } from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.409264, // Default center location
  lng: 49.867092,
};

const DeliveryMap = ({ merchant, delivery }) => {
  const [directions, setDirections] = useState(null);
  const [isDirectionsLoaded, setIsDirectionsLoaded] = useState(false); // State to track if directions are loaded
  // Define your origin and destination here
  const origin = merchant;
  const destination = delivery;

  const handleDirectionsCallback = (result, status) => {
    if (status === window.google.maps.DirectionsStatus.OK) {
      setDirections(result);
      setIsDirectionsLoaded(true); // Set to true after loading directions
    } else {
      console.error(`Error fetching directions: ${result}`);
    }
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {directions && <DirectionsRenderer directions={directions} />}
        {!isDirectionsLoaded && (
          <DirectionsService
            options={{
              destination: destination, // Set destination Location
              origin: origin, // Set Merchant Location
              travelMode: "DRIVING",
            }}
            callback={handleDirectionsCallback}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default DeliveryMap;
