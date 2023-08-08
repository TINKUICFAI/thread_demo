import mongoose from "mongoose";

let isConnected = false; // Variable to track the connection status

export const connectToDB = async () => {
  // Set strict query mode for Mongoose to prevent unknown field queries.
  mongoose.set("strictQuery", true);

  if (!process.env.URL) return console.log("Missing MongoDB URL");

  // If the connection is already established, return without creating a new connection.
  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  const mongodbUrl: string =
    "mongodb+srv://tinkukumar:zHBYIleTI48jAbBY@cluster0.zm0r6pg.mongodb.net/threads?retryWrites=true&w=majorit";
  try {
    await mongoose.connect(mongodbUrl);

    isConnected = true; // Set the connection status to true
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
