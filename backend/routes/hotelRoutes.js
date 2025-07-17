const router = require("express").Router();
const hotelController = require("../controllers/hotelController");

router.get("/all", hotelController.getAllHotels);
router.post("/create", hotelController.createHotel);
router.get("/:id", hotelController.getHotelById);
router.put("/:id", hotelController.updateHotel);
router.delete("/:id", hotelController.deleteHotel);

module.exports = router;
