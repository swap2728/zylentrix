const express = require("express");
const { getUsers, register, login } = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();
router.get("/", authMiddleware, getUsers);
router.post("/register", register);
router.post("/login", login);
module.exports = router;