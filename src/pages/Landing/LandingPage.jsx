import React, { useState } from "react";
import "./landing.css";
import courier from "./../../assets/courier.png";
import merchant from "./../../assets/woltMerchant.jpg";
import userBackground from "./../../assets/userWolt.avif";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [hovered, setHovered] = useState(null);

  const navigate = useNavigate();

  return (
    <>
      <div className="landing-container">
        <div
          className={`section merchant ${hovered === "merchant" || hovered === null ? "hovered" : ""}`}
          onMouseEnter={() => setHovered("merchant")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="content" onClick={() => navigate("/login-merchant")}>
            <img src={merchant} alt="Merchant" />
            <h2>Merchant</h2>
          </div>
        </div>
        <div
          className={`section courier ${hovered === "courier" || hovered === null ? "hovered" : ""}`}
          onMouseEnter={() => setHovered("courier")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="content" onClick={() => navigate("/login-courier")}>
            <img src={courier} alt="Courier" />
            <h2>Courier</h2>
          </div>
        </div>
        <div
          className={`section user ${hovered === "user" || hovered === null ? "hovered" : ""}`}
          onMouseEnter={() => setHovered("user")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="content">
            <img src={userBackground} alt="User" />
            <h2>User</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
