import express from "express";
import { Login, getAllUser } from "../controllers/User.js";

const router = express.Router();

router.post("/user/login", Login);
router.get("/user/", getAllUser);

export default router;
