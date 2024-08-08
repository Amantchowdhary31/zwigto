import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodroute.js";

//app configuration
const app = express();
const port = 4000;

//middlewares
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//end api
app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"));

app.get("/",(req,res)=>{
  res.send("API WORKING")
})

app.listen(port,()=>{
  console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://amantch2:9832110076@cluster0.olqrq.mongodb.net/?