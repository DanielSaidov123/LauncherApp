import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectToMongoDB } from "./DB/mongoDB.js";
import launchers from "./routes/launcher.route.js";
import auth from "./routes/auth.route.js";
dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());

app.use(cookieParser());

app.get("/api", (req, res) => {
  res.status(200).json("Welcome to the War and Missiles server");
});
app.use("/api/launchers", launchers);
app.use("/api/auth", auth);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT} `);
});
