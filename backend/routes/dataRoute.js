import express from "express";
import { addData, getData, updateData } from "../controllers/dataController.js";

const router = express.Router();

router.get("/data", getData);
router.post("/data", addData);
router.patch("/data/:id", updateData)

export default router;
