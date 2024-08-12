import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";
import Stripe from "stripe";

const stripe  = new Stripe(process.env.STRIPE_SECRET_KEY);

//place order from frontend;

const placeOrder = async(req,res)=>{
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      addresss: req.body.addresss,
    })
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})

    const line_items = req.body.items.map((item)=>({
       price_data:{
        currency:"inr",
        product_data:{
          name:item.name
        },
        unit_amount:item.price*100*80
      },
      quantity: item.quantity

    }))

    line_items.push({
      price_data:{
        currency:"inr",
        product_data:{
          name:"Delivery charges"
        },
        unit_amount:2*100*80
      },
      quantity:1
    })
  } catch (error) {
    console.log(error);
    res.json({sucess:false,message:"Error"})
    
  }


}

export default placeOrder;


