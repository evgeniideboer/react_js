import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login", { state: "Error not page" });
    }, 1000);
  }, []);
  return <h1 style={{ color: "red" }}>Страница не существует</h1>;
};

export default Error;
