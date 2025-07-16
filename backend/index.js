const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 8000;
dotenv.config();

// Middleware to parse JSON and URL-encoded data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var hotels = [];

app.get("/api/hotels", (req, res) => {
  if (hotels.length === 0) {
    res.status(201).json({
      message: "No hotels found, please add a hotel first.",
    });
  } else {
    res.status(200).json({
      message: "Hotels found",
      hotels: hotels,
    });
  }
});

app.post("/api/hotels", (req, res) => {
  const hotelData = req.body;
  hotels.push(hotelData);
  res.status(201).json({
    message: "Hotel added successfully",
    hotel: hotelData,
  });
});

app.get("/api/hotels/:id", (req, res) => {
  const hotelId = Number(req.params.id);
  const hotel = hotels.find((h, index) => index === hotelId);
  if (hotel) {
    res.status(200).json({
      message: "Hotel found",
      hotel: hotel,
    });
  } else {
    res.status(404).json({
      message: "Hotel not found",
    });
  }
});

app.listen(PORT, (error) => {
  if (error) {
    console.error(`Error starting server: ${error}`);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
