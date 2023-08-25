import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import About from "./pages/About";

import "./styles/App.css";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/UI/AppRouter";
import KyleArrayMethods from "./Kyle/ArrayMethods";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <KyleArrayMethods /> */}
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
