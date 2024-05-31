import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";
import HomePage from "./pages/homePage";
import InfoPage from "./pages/infoPage";
import ErrorPage from "./pages/error";

function App() {
  return (
    <div className=" bg-gray-100">
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <footer>
          <Foot />
        </footer>
      </Router>
    </div>
  );
}

export default App;
