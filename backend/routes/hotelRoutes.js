const router = require("express").Router();
const hotelController = require("../controllers/hotelController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");

router.get(
  "/all",
  authenticate,
  authorize(["admin"]),
  hotelController.getAllHotels,
);
router.post(
  "/create",
  authenticate,
  authorize(["admin"]),
  hotelController.createHotel,
);
router.get(
  "/:id",
  authenticate,
  authorize(["admin"]),
  hotelController.getHotelById,
);
router.put(
  "/:id",
  authenticate,
  authorize(["admin"]),
  hotelController.updateHotel,
);
router.delete(
  "/:id",
  authenticate,
  authorize(["admin"]),
  hotelController.deleteHotel,
);

module.exports = router;
