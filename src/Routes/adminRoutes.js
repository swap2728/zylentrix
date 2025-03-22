const express = require("express");
const { getUsers } = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");
const { aclMiddleware } = require("../middleware/aclMiddleware");
const router = express.Router();
// router.get("/users", authMiddleware, (req, res, next) => aclMiddleware(req.user.role, "get", "/api/admin/users")(req, res, next), getUsers);
module.exports = router;