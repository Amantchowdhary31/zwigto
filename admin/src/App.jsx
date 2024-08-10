import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/order/order";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add></Add>} />
          <Route path="/list" element={<List></List>} />
          <Route path="/orders" element={<Order></Order>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
