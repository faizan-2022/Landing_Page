const express = require("express");

const router = express.Router();

const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middlewares/authMiddleware.js");

const { updateUser, deleteUser, getUser, getAllUsers, getUserStats } = require("../controllers/userController.js");

// UPDATE USER
router.put("/:id", verifyTokenAndAuthorization, updateUser);

// DELETE USER
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

// GET USER
router.get("/find/:id", verifyTokenAndAdmin, getUser);

// GET ALL USERS
router.get("/", verifyTokenAndAdmin, getAllUsers);

// GET USER STATS
router.get("/stats", verifyTokenAndAdmin, getUserStats);

module.exports = router;
