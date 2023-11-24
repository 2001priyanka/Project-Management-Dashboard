import express from "express";
import { createHouse, getHouses } from "../Controller/houseController.js";

const router = express.Router();

router.get("/", getHouses).post("/", createHouse);

export default router;
