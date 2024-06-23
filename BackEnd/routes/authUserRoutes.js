const express = require("express");
const { signUp, logIn } = require("../controllers/authUserController.js");

const router = express.Router();

// User Sign-Up
router.post("/signup", signUp);

// User Sign-In
router.post("/login", logIn);

module.exports = router;
