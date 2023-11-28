import axios from "axios";

export const getCurrentWeatherData = async (req, res) => {
	const { city } = req.body;

	await axios
		.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.CURRENT_KEY}&units=metric`
		)
		.then((response) => res.json(response.data))
		.catch((error) => res.json(error));
};

export const getHourlyWeatherData = async (req, res) => {
	const { city } = req.body;
	await axios
		.get(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.CURRENT_KEY}&units=metric`
		)
		.then((response) => res.json(response.data))
		.catch((error) => res.json(error));
};
