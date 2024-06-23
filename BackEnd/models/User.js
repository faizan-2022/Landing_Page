const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        img: { type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr94GJdHxmN6HQl1HJasiiSNqPQ8dgWa9d1g&usqp=CAU" },
        isAdmin: { type: Boolean, default: false }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);