const express = require("express");
const { getUsers, register, login } = require("../controllers/userController");
const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require("../controllers/userController");
g
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", createUser);
router.get("/", authMiddleware, (req, res, next) => aclMiddleware(req.user.role, "get", "/api/user")(req, res, next), getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);



// router.get("/", authMiddleware, getUsers);
router.post("/register", register);
router.post("/login", login);
module.exports = router;