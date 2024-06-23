const bcrypt = require("bcryptjs");
const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

// Admin Sign-Up
exports.adminSignUp = async (req, res) => {
    const { password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newAdmin = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            isAdmin: true,
        });

        const savedAdmin = await newAdmin.save();
        res.status(200).json(savedAdmin);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Admin Log-In
exports.adminLogIn = async (req, res) => {
    try {
        const admin = await User.findOne({ username: req.body.username });

        if (!admin) {
            return res.status(404).json("Wrong Credentials");
        }

        const passwordMatch = await bcrypt.compare(req.body.password, admin.password);

        if (!passwordMatch) {
            return res.status(401).json("Wrong Credentials");
        }

        const accessToken = jwt.sign(
            {
                isAdmin: admin.isAdmin,
            },
            process.env.JWT_SEC,
            {
                expiresIn: "1d",
            }
        );

        const { password, ...other } = admin._doc;

        res.status(200).json({ ...other, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
};