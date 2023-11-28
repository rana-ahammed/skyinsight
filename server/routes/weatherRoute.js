import express from "express";
import {
	getCurrentWeatherData,
	getHourlyWeatherData,
} from "../controllers/weatherController.js";
const router = express.Router();

router.post("/current", getCurrentWeatherData);
router.post("/hourly", getHourlyWeatherData);

export default router;
