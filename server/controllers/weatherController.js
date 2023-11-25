import axios from "axios";

const getWeatherData = (req, res) => {
	const { city } = req.body;
	console.log(city);
	axios
		.get(
			`https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${process.env.CURRENT_KEY}`
		)
		.then((response) => console.log(response.data))
		.catch((error) => console.log(error));
};

export default getWeatherData;
