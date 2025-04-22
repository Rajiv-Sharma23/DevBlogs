import mongoose from "mongoose";

export const connectDB = async () => {
   try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected successfully : ${connect.connection.host}`);
    
   } catch (error) {
    console.log({message: "Connection error ",error});
    
   }
}