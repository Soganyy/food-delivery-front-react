import { useBaseService } from "../base/useBaseService";

export const useMerchantService = () => {
  const { postRequest } = useBaseService();

  const loginMerchant = async (payload) => {
    return await postRequest("/api/merchant/login", payload);
  };

  return { loginMerchant };
};
