import express from "express";
import { addData, deleteData, getData, updateData } from "../controllers/dataController.js";

const router = express.Router();

router.get("/data", getData);
router.post("/data", addData);
router.patch("/data/:id", updateData)
router.delete("/data/:id", deleteData)


export default router;
