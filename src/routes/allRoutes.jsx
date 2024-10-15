import CourierLogin from "../components/pages/Courier/CourierLogin/CourierLogin";
import CourierHomePage from "../components/pages/Courier/Home/CourierHome";
import LandingPage from "../components/pages/Landing/LandingPage";
import MerchantLogin from "../components/pages/Merchant/MerchantLogin/MerchantLogin";

const authProtectedRoutes = [];

const courierProtected = [{ path: "/home-courier", component: <CourierHomePage /> }];

const publicRoutes = [
  // Authentication Page
  { path: "/", component: <LandingPage /> },
  { path: "/login-merchant", component: <MerchantLogin /> },
  { path: "/login-courier", component: <CourierLogin /> },
];

export { authProtectedRoutes, courierProtected, publicRoutes };
