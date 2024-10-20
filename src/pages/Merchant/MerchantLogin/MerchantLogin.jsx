import React, { useState } from "react";
import { useMerchantService } from "../../../service/auth/useMerchantService";
import { decodeToken } from "../../../helpers/token-helper";
import { useNavigate } from "react-router-dom";
import MessageModal from "../../../components/message-modal/message-modal";
import LoginForm from "../../../components/login-form/login-form";

const MerchantLogin = () => {
  const { loginMerchant } = useMerchantService();

  const navigate = useNavigate();

  const [isLoginError, setIsLoginError] = useState(false);

  const login = async (data) => {
    const result = await loginMerchant({ ...data });
    const decodedToken = decodeToken(result.access_token);

    if (decodedToken) {
      sessionStorage.setItem("token", JSON.stringify(decodedToken));
      navigate("/home-merchant");
    } else {
      setIsLoginError(true);
      setTimeout(function () {
        setIsLoginError(false);
      }, 3000);
    }
  };

  return (
    <>
      <LoginForm loginType={"Merchant"} isLoginError={isLoginError} login={login} />
      <MessageModal show={isLoginError} message={"The credentials are incorrect!"} />
    </>
  );
};

export default MerchantLogin;
