import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageModal from "../../../message-modal/message-modal";
import LoginForm from "../../../login-form/login-form";
import { decodeToken } from "../../../../helpers/token-helper";
import { useCourierService } from "../../../../service/auth/useCourierService";

const CourierLogin = () => {
  const { loginCourier } = useCourierService();

  const navigate = useNavigate();

  const [isLoginError, setIsLoginError] = useState(false);

  const login = async (data) => {
    const result = await loginCourier({ ...data });
    const decodedToken = decodeToken(result.access_token);

    if (decodedToken) {
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
