import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "moviesapp",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Database connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};
export default connectDB;
