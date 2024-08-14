import {placeOrder,verifyOrder,userOrders} from "../controllers/orderController.js";
import express from "express";
import authMiddleware from "../middlewares/auth.js"

const orderRouter =  express.Router();


orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrders);
export default orderRouter;
