const express = require("express");
const { userAuth } = require("../middleware/userAuth");
const { adminAuth } = require("../middleware/adminAuth");
const UserController = require("../controller/user");
const router = express.Router();

router.get("/", userAuth, UserController.get_user);
router.get("/get-all", UserController.get_all);
router.patch("/", userAuth, UserController.update_user);
router.post("/order", userAuth, UserController.create_order);
router.get("/order-all", adminAuth, UserController.get_order);
router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.post("/reset-password-link", UserController.get_reset_link);
router.post("/change-password", UserController.change_password);
module.exports = router;
