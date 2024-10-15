import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthProtected = (props) => {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  if (!token) {
    return <Navigate to={{ pathname: "/" }} />;
  }

  return <>{props.children}</>;
};

export default AuthProtected;
