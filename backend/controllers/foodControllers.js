import foodModel from "../models/foodModels.js";
import fs from "fs";

const addFood = async (req, res) => {
  // Ensure req.file exists to avoid undefined errors
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No image file provided" });
  }

  let image_filename = req.file.filename;
  
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,  
    price: req.body.price,
    image: image_filename,
    category: req.body.category
    
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error adding food" });
  }
};

const listFood = async(req,res)=>{
  try {
    const foods = await foodModel.find({});
    res.json({success:true,data:foods})
    
  } catch (error) {
    
    res.json({success:false,message:error})
  }
}

const removeFood = async(req,res)=>{
  try {
    const food = await foodModel.findById(req.body._id);
    fs.unlink(`uploads/${food.image}`,()=>{})
    await foodModel.findByIdAndDelete(req.body._id);
    res.json({success:true,message:"Food removed"})
  } catch (error) {
    
    res.json({success:false,message:"error"})
    
  }
}

export { addFood , listFood, removeFood};
