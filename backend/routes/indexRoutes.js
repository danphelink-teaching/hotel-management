const router = require("express").Router();
const hotelRoutes = require("./hotelRoutes");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");

router.use("/hotels", hotelRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
