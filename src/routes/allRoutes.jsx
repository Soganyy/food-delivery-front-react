import CourierLogin from "../pages/Courier/CourierLogin/CourierLogin";
import CourierHomePage from "../pages/Courier/Home/CourierHome";
import LandingPage from "../pages/Landing/LandingPage";
import MerchantLogin from "../pages/Merchant/MerchantLogin/MerchantLogin";

const authProtectedRoutes = [];

const courierProtected = [{ path: "/home-courier", component: <CourierHomePage /> }];

const publicRoutes = [
  // Authentication Page
  { path: "/", component: <LandingPage /> },
  { path: "/login-merchant", component: <MerchantLogin /> },
  { path: "/login-courier", component: <CourierLogin /> },
];

export { authProtectedRoutes, courierProtected, publicRoutes };
