import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../../router";
import { AuthContext } from "../context";
import Loader from "./Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/posts");
    } else {
      navigate("/login");
    }
  }, [isAuth]);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route Component={route.component} path={route.path} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route Component={route.component} path={route.path} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
