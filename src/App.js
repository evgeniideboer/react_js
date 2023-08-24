import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import "./styles/App.css";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/UI/AppRouter";

function App() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/about");
  // }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
