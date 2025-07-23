const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/create", userController.createUser);
router.get("/:id", userController.getUserById);
router.get("/", userController.getAllUsers);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
module.exports = router;
