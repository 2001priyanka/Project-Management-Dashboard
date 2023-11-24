import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      // `MongoDB connected: ${conn.connection.host}`
      "MongoDB connected:",
      connect.connection.host,  
      connect.connection.name
    );
  } catch (err) {
    console.error(`Error:${err.message}`);
    process.exit(1);
  }
};

export default connectDb;
