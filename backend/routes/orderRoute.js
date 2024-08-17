import {placeOrder,verifyOrder,userOrders, listOrders, orderStatus} from "../controllers/orderController.js";
import express from "express";
import authMiddleware from "../middlewares/auth.js"

const orderRouter =  express.Router();


orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrders);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",orderStatus);
export default orderRouter;
