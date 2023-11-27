import axios from "axios";

const getWeatherData = (req, res) => {
	const { city } = req.body;
	console.log(city);
	axios
		.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.CURRENT_KEY}&units=metric`
		)
		.then((response) => res.json(response.data))
		.catch((error) => res.json(error));
};

export default getWeatherData;
