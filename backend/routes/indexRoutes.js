const router = require("express").Router();
const hotelRoutes = require("./hotelRoutes");
const userRoutes = require("./userRoutes");
router.use("/hotels", hotelRoutes);
router.use("/users", userRoutes);

module.exports = router;
