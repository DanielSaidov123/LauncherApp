import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { connectToMongoDB } from "./DB/mongoDB.js";
dotenv.config()
const PORT = process.env.PORT

const app = express();

app.use(cors());

app.use(express.json());



app.get("/api", (req, res) => {
  res.status(200).json("Welcome to the War and Missiles server");
});

app.listen(PORT, () => {
    connectToMongoDB()
  console.log(`server is running on port ${PORT} `);
});