const express = require("express");
const dbConnect = require("./dbConnect/dbConnect");
const app = express();

const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 8000;
const indexRoutes = require("./routes/indexRoutes");
dotenv.config();
dbConnect();

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
