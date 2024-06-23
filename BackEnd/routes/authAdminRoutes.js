// authAdminRoutes.js
const express = require("express");
const {adminSignUp,adminLogIn} = require("../controllers/authAdminController.js");

const router = express.Router();

// Admin Sign-Up
router.post("/signup", adminSignUp);

// Admin Log-In
router.post("/login", adminLogIn);

module.exports = router;