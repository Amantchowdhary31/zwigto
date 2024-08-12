import userModel from "../models/userModel.js";


const addToCart = async(req,res) =>{
  try {
  
  let userData = await userModel.findById({_id : req.body.userId});
  let cartData = await userData.cartData;
  if(!cartData[req.body.itemId]){
    cartData[req.body.itemId] = 1;
  }
  else{
    cartData[req.body.itemId] += 1;
  }
  await userModel.findByIdAndUpdate(req.body.userId,{cartData}) ;
  res.json({success:true,message:"product added successfully"})


    
  } catch (error) {
    console.log(error);
    res.json({success:false, message:"error"});
    
  }
}


const removeFromCart = async(req,res) =>{
  try {
  
    let userData = await userModel.findById({_id : req.body.userId});
    let cartData = await userData.cartData;
    if(cartData[req.body.itemId] > 0){
      cartData[req.body.itemId] -= 1;
    }
    
    await userModel.findByIdAndUpdate(req.body.userId,{cartData}) ;
    res.json({success:true,message:"product removed successfully"})
  
  
      
    } catch (error) {
      console.log(error);
      res.json({success:false, message:"error"});
      
    }
}
const getCart = async (req, res) => {
  try {
    // Fetch the user data based on the userId
    let userData = await userModel.findById(req.body.userId);
    
    // Check if user data was found
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    // Retrieve cartData from userData
    let cartData = userData.cartData;

    // Respond with the cart data
    res.json({ success: true, cartData });
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "An error occurred" });
  }
};


export {addToCart,removeFromCart,getCart};
