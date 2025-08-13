const express = require("express");
const dbConnect = require("./dbConnect/dbConnect");
const cors = require("cors");
const app = express();

const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 8000;
const indexRoutes = require("./routes/indexRoutes");
dotenv.config();
dbConnect();

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Middleware to parse JSON and URL-encoded data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", indexRoutes);

app.listen(PORT, (error) => {
  if (error) {
    console.error(`Error starting server: ${error}`);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
