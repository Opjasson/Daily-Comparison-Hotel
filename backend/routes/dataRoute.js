import express from "express";
import { addData, getData } from "../controllers/dataController.js";

const router = express.Router();

router.get("/data", getData);
router.post("/data", addData)

export default router;
