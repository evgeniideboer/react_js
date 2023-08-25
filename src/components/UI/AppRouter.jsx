import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from ".//..//../pages/About";
import Posts from ".//..//../pages/Posts";
import Error from ".//..//../pages/Error";
import PostIdPage from "../../pages/PostIdPage";
import { publicRoutes, privateRoutes } from "../../router";

const AppRouter = () => {
  const isAuth = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/posts");
    } else {
      navigate("/login");
    }
  }, [isAuth]);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route Component={route.component} path={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route Component={route.component} path={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
