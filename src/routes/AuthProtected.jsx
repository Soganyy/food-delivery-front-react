import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthProtected = (props) => {
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

export default AuthProtected;
