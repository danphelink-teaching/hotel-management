const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const dbURI = process.env.DB_URI;
    console.log("Connecting to database...", dbURI);
    if (!dbURI) {
      throw new Error("Database URI is not defined in environment variables");
    }
    await mongoose.connect(dbURI);
    console.log("Database connected successfully");
    return mongoose.connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

module.exports = dbConnect;
