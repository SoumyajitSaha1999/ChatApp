import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

// const baseUrl = process.env.MONGODB || "0.0.0.0:27017";
// const url = process.env.DB_URL;

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://ssoumyajit245:0yh6UgEmmi9C9ysM@cluster0.rjt2xyk.mongodb.net/chatApp?retryWrites=true&w=majority&appName=Cluster0`,
      {
        // Remove the following options as they are deprecated
        // useNewUrlParser: true,
        // useUnifiedTopology: true
      }
    );
    console.log("MongoDB connected using mongoose");
  } catch (err) {
    console.log(`Error connecting to the database: `, err);
  }
};
