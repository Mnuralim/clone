import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./config/db.js";
import UserRoute from "./routes/UserRoute.js";

dotenv.config();
const app = express();

db();

app.use(cors());
app.use(express.json());

app.use(UserRoute);

app.listen(process.env.PORT, () => console.log("server is running"));
