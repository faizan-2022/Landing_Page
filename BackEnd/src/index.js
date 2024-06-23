const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authAdminRoute = require("../routes/authAdminRoutes.js");
const authUserRoute = require("../routes/authUserRoutes.js");
const userRoute = require("../routes/userRoutes.js");

env.config();

const corsAllow = {
  origin: "http://localhost:3000",
  methods: "PUT, GET, POST, PATCH, DELETE, HEAD",
  credentials: true
}

app.use(cors(corsAllow));

mongoose
  .connect(process.env.MONGO_URL)
  .then(()=>console.log("DB Connection Successful!"))
  .catch((err)=>{
  console.log(err);
});

app.use(express.json());
app.use("/api/admin/auth", authAdminRoute);
app.use("/api/auth", authUserRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});