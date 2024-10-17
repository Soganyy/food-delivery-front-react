import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const CourierHomePage = () => {
  const socket = useRef(null);
  const [deliveryRequests, setDeliveryRequests] = useState([]);

  useEffect(() => {
    socket.current = io("http://localhost:1025", {
      transports: ["websocket"],
      reconnection: true,
      query: {
        courierId: JSON.parse(sessionStorage.getItem("token")).courierId,
      },
    });

    socket.current.on("connect", () => {
      console.log("Connected to the WebSocket server as Courier:", socket.current.id);
    });

    socket.current.on("connect_error", (error) => {
      console.error("Connection Error:", error);
    });

    socket.current.on("deliveryRequest", (order) => {
      console.log("New delivery request:", order);
      setDeliveryRequests((prevRequests) => [...prevRequests, order]);
    });
  }, []);

  const respondToDeliveryRequest = (orderId, accepted) => {
    socket.current.emit(`courierResponse-courier-1`, { orderId, accepted });
    alert(`You have ${accepted ? "accepted" : "declined"} the delivery request.`);
    setDeliveryRequests((prevRequests) => prevRequests.filter((request) => request.orderId !== orderId));
  };

  return (
    <div>
      <h1>Courier Dashboard</h1>
      <ul>
        {deliveryRequests.map((request) => (
          <li key={request.orderId}>
            <p>Order ID: {request.orderId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourierHomePage;
