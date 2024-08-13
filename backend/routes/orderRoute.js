import {placeOrder,verifyOrder} from "../controllers/orderController.js";
import express from "express";
import authMiddleware from "../middlewares/auth.js"

const orderRouter =  express.Router();


orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
export default orderRouter;
