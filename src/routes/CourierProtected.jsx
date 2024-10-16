import React, { useEffect, useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { io } from "socket.io-client";

const CourierProtected = (props) => {
  const [token, setToken] = useState({});
  const socket = useRef(null);

  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    setToken(token);
  }, []);

  useEffect(() => {
    socket.current = io("http://localhost:1024", {
      transports: ["websocket"],
      reconnection: true,
      auth: {
        token: sessionStorage.getItem("nonDecToken"),
      },
    });

    socket.current.on("connect", () => {
      console.log("Connected to the WebSocket server as Courier:", socket.current.id);
    });

    socket.current.on("connect_error", (error) => {
      console.error("Connection Error:", error);
    });

    socket.current.on("courierLocationUpdated", (data) => {
      console.log("Courier location updated:", data);
    });

    const sendLocationUpdate = (latitude, longitude) => {
      socket.current.emit("updateLocation", {
        latitude: latitude,
        longitude: longitude,
      });
    };

    const intervalId = setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        sendLocationUpdate(position.coords.latitude, position.coords.longitude);
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
      socket.current.disconnect();
    };
  }, []);

  if (!token) {
    return <Navigate to={{ pathname: "/" }} />;
  }

  return <>{props.children}</>;
};

export default CourierProtected;
