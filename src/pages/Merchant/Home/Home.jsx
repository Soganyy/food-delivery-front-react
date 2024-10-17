import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const MerchantHome = () => {
  const socket = useRef(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    console.log(sessionStorage.getItem("token"));

    socket.current = io("http://localhost:1025", {
      transports: ["websocket"],
      reconnection: true,
      query: { merchantId: JSON.parse(sessionStorage.getItem("token")).merchantId },
    });

    socket.current.on("connect", () => {
      console.log("Connected to the WebSocket server as Merchant:", socket.current.id);
    });

    socket.current.on("connect_error", (error) => {
      console.error("Connection Error:", error);
    });

    socket.current.on("newOrder", (order) => {
      console.log("New order received:", order);
      setOrders((prevOrders) => [...prevOrders, order]);
    });

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, []);

  const acceptOrder = (orderId) => {
    socket.current.emit("merchantAcceptOrder", { orderId });
    alert("Order accepted!");
  };

  const markOrderAsReady = (orderId) => {
    socket.current.emit("merchantOrderReady", { orderId });
    alert("Order marked as ready!");
  };

  return (
    <div>
      <h1>Merchant Dashboard</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.orderId}>
            <p>Order ID: {order.orderId}</p>
            <button onClick={() => acceptOrder(order.orderId)}>Accept Order</button>
            <button onClick={() => markOrderAsReady(order.orderId)}>Mark as Ready</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MerchantHome;
