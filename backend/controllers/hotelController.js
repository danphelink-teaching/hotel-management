const Hotel = require("../models/hotel");

const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    if (hotels.length === 0) {
      return res.status(404).json({ message: "No hotels found" });
    }
    res
      .status(200)
      .json({ message: "Successfully Fetched Data", data: hotels });
  } catch (error) {
    console.error("Error fetching hotels:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getHotelById = async (req, res) => {
  try {
    const hotelId = req.params.id;
    if (!hotelId) {
      return res.status(400).json({ message: "Hotel ID is required" });
    }
    const retrivedHotel = await Hotel.findById(hotelId);
    if (!retrivedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res
      .status(200)
      .json({ message: "Hotel retrieved successfully", data: retrivedHotel });
  } catch (error) {
    console.error("Error fetching hotel by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const createHotel = async (req, res) => {
  try {
    const hotelData = req.body;
    if (!hotelData.name || !hotelData.address) {
      return res.status(400).json({ message: "Name and address are required" });
    }
    const newHotel = new Hotel(hotelData);
    await newHotel.save();
    res
      .status(201)
      .json({ message: "Hotel created successfully", data: newHotel });
  } catch (error) {
    console.error("Error creating hotel:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateHotel = async (req, res) => {
  try {
    const hotelId = req.params.id;
    const updateData = req.body;
    if (!hotelId) {
      return res.status(400).json({ message: "Hotel ID is required" });
    }
    const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, updateData, {
      new: true,
    });
    if (!updatedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res
      .status(200)
      .json({ message: "Hotel updated successfully", data: updatedHotel });
  } catch (error) {
    console.error("Error updating hotel:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteHotel = async (req, res) => {
  try {
    const hotelId = req.params.id;
    if (!hotelId) {
      return res.status(400).json({ message: "Hotel ID is required" });
    }
    const deletedHotel = await Hotel.findByIdAndDelete(hotelId);
    if (!deletedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res
      .status(200)
      .json({ message: "Hotel delete successfully", data: deletedHotel });
  } catch (error) {
    console.error("Error delete hotel:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
};
