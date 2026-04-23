import express from "express";
import dotenv from "dotenv";
import "./db/index.js"

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Marketplace API running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});