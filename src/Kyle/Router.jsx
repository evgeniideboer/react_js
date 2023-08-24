import React, { useEffect, useState } from "react";

export default function KyleUseEffect() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return <div>{windowWidth}</div>;
}
