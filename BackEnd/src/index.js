import express from "express";
const app = express();
import env from "dotenv";

env.config();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});