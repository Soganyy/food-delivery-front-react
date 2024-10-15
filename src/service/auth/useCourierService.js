import { useBaseService } from "../base/useBaseService";

export const useCourierService = () => {
  const { postRequest } = useBaseService();

  const loginCourier = async (payload) => {
    return await postRequest("/api/courier/login", payload);
  };

  return { loginCourier };
};
