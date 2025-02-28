import { response } from "express";
import dataModel from "../models/dataModels.js";

export async function getData(req, res) {
    try {
        const response = await dataModel.findAll({
            attributes: ["uuid", "hotel", "RNO", "ARR", "RNA", "RR"],
        });
        res.status(200).json(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}

export async function addData(req, res) {
    const { hotel, RNO, ARR, RNA, RR } = req.body;
    try {
        await dataModel.create({
            hotel,
            RNO,
            ARR,
            RNA,
            RR,
        });
        res.status(201).json({ msg: "Data berhasil ditambahkan" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}
