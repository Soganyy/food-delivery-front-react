import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const CourierProtected = (props) => {
  const [token, setToken] = useState({});

  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    setToken(token);
  }, []);

  if (!token) {
    return <Navigate to={{ pathname: "/" }} />;
  }

  return <>{props.children}</>;
};

export default CourierProtected;
