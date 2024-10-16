import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "../../../helpers/token-helper";
import { useCourierService } from "../../../service/auth/useCourierService";
import LoginForm from "../../../components/login-form/login-form";
import MessageModal from "../../../components/message-modal/message-modal";

const CourierLogin = () => {
  const { loginCourier } = useCourierService();

  const navigate = useNavigate();

  const [isLoginError, setIsLoginError] = useState(false);

  const login = async (data) => {
    const result = await loginCourier({ ...data });
    const decodedToken = decodeToken(result.access_token);

    if (decodedToken) {
      sessionStorage.setItem("nonDecToken", result.access_token);
      sessionStorage.setItem("token", JSON.stringify(decodedToken));
      navigate("/home-courier");
    } else {
      setIsLoginError(true);
      setTimeout(function () {
        setIsLoginError(false);
      }, 3000);
    }
  };

  return (
    <>
      <LoginForm loginType={"Courier"} isLoginError={isLoginError} login={login} />
      <MessageModal show={isLoginError} message={"The credentials are incorrect!"} />
    </>
  );
};

export default CourierLogin;
