import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import AppDownload from "./components/AppDownload/AppDownload";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import Myorders from "./pages/Myorders/Myorders";

const App = () => {
  const [Login, setLogin] = useState(false);
  return (
    <>
      {Login ? <LoginPopup setLogin={setLogin} /> : <></>}

      <div className="app">
        <Navbar setLogin={setLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify></Verify>} />
          <Route path="/myorders" element={<Myorders></Myorders>} />
        </Routes>
      </div>
      <AppDownload></AppDownload>
      <Footer />
    </>
  );
};

export default App;
