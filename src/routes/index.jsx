import React from "react";
import { Routes, Route } from "react-router-dom";

//Layouts
import NonAuthLayout from "../Layouts/NonAuthLayout.jsx";

//routes
import { authProtectedRoutes, courierProtected, publicRoutes } from "./allRoutes.jsx";
import AuthProtected from "./AuthProtected.jsx";
import CourierProtected from "./CourierProtected.jsx";

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={<NonAuthLayout>{route.component}</NonAuthLayout>} key={idx} />
          ))}
        </Route>

        <Route>
          {authProtectedRoutes.map((route, idx) => (
            <Route path={route.path} element={<AuthProtected>{route.component}</AuthProtected>} key={idx} />
          ))}
        </Route>

        <Route>
          {courierProtected.map((route, idx) => (
            <Route path={route.path} element={<CourierProtected>{route.component}</CourierProtected>} key={idx} />
          ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default Index;
