import React from "react";
import "./Order.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { assets } from "../../assets/assets";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const resposne = await axios.get(
      "http://localhost:4000/api/order/list",
      orders
    );
    if (resposne.data.success) {
      setOrders(resposne.data.data);
    } else {
      toast.error("error");
    }
  };
  //for handling status;

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(
      "http://localhost:4000/api/order/status",
      { orderId, status: event.target.value }
    );
    if (response.data.success) {
      await fetchAllOrders();
    }
  };
  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <>
      <div className="order add">
        <h2>order</h2>
        <div className="order-list">
          {orders.map((order, index) => (
            <div key={index} className="order-item">
              <img src={assets.parcel_icon} alt="" />

              <div>
                <p className="order-item-food">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ",";
                    }
                  })}
                </p>
                <p className="order-item-name">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className="order-item-address">
                  <p>{order.address.street + ", "}</p>

                  <p>
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      "," +
                      order.address.pincode +
                      ", "}
                  </p>
                </div>
                <p className="order-item.phone">{order.address.phone}</p>
              </div>
              <p className="item-quantity">items: {order.items.length}</p>
              <p>${order.amount}</p>
              <select
                onChange={() => statusHandler(event, order._id)}
                value={order.status}
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
