import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("Connect to DB successfully!");
  } catch (error) {
    console.log("Connect to DB failure: ", error);
    process.exit(1);
  }
};
