const router = require("express").Router();
const hotelRoutes = require("./hotelRoutes");

router.use("/hotels", hotelRoutes);

module.exports = router;
