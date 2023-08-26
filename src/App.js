import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/App.css";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/UI/AppRouter";
import KyleArrayMethods from "./Kyle/ArrayMethods";
import { AuthContext } from "./components/context";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);
  return (
    <div>
      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth,
          isLoading,
        }}
      >
        <BrowserRouter>
          <Navbar />
          {/* <KyleArrayMethods /> */}
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
