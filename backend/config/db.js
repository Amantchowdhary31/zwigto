import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://amantch2:9832110076@cluster0.olqrq.mongodb.net/food-del', {

    });
    console.log('DB connected');
  } catch (error) {
    console.error('DB connection error:', error);
  }
};
