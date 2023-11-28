import { useState } from "react";
import bgImage from "../assets/sky.jpg";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";

const Home = () => {
	const [city, setCity] = useState("");
	const [current, setCurrent] = useState({});
	const [hourly, setHourly] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	console.log(current, hourly);
	const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
		type: "region",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		};

		await axios
			.all([
				axios.post(
					`${process.env.REACT_APP_SERVER_URL}/current`,
					{ city },
					config
				),
				axios.post(
					`${process.env.REACT_APP_SERVER_URL}/hourly`,
					{ city },
					config
				),
			])
			.then(
				axios.spread((firstResponse, secondResponse) => {
					setCurrent(firstResponse.data);
					setHourly(secondResponse.data);
					const message =
						firstResponse.data.message ||
						secondResponse.data.message;
					if (message) {
						toast.error(`There is no city in this name`);
					}
				})
			)
			.catch((error) => console.log(error));
		setIsLoading(false);
	};

	return (
		<section
			style={{
				backgroundImage: `url(${bgImage})`,
			}}
			className="h-[calc(100vh-124px)] bg-cover relative"
		>
			<form
				action=""
				className="w-3/4 md:w-1/2 top-20 absolute left-0 right-0 mx-auto flex items-center justify-center"
			>
				<input
					onChange={(e) => setCity(e.target.value)}
					value={city}
					autoComplete="off"
					type="text"
					placeholder="Enter City Name Here"
					className="w-full lg:w-1/2 p-2 rounded-l-lg text-sm md:text-lg dark:bg-slate-700 font-semibold dark:text-gray-200 border-none outline-none"
				/>
				<button
					onClick={handleSubmit}
					type="submit"
					name="search"
					id="search"
					disabled={isLoading}
					className="bg-green-300 hover:bg-green-400 p-2 rounded-r-lg text-sm md:text-lg font-semibold"
				>
					{isLoading ? "Loading..." : "Search"}
				</button>
			</form>
			{/* Weather Details */}
			{current.main && (
				<div className="absolute top-40 left-0 right-0 mx-auto bg-transparent dark:bg-slate-700 shadow-xl w-3/4 md:w-1/2 lg:w-1/4 flex flex-col justify-center rounded-lg p-2 items-center gap-2">
					<p className="text-3xl font-bold dark:text-gray-200">
						{current.name}
					</p>
					<p className="font-light text-md dark:text-gray-200">
						{regionNamesInEnglish.of(current.sys.country)}
					</p>

					<p className="text-4xl font-bold dark:text-gray-300">
						{Math.round(current.main.temp)}&deg;C
					</p>
					<p className="text-2xl font-semibold dark:text-gray-300">
						{current.weather[0].description}
					</p>
					<img src={`${current.weather[0].icon}.png`} alt="" />
					<p className="text-lg font-medium dark:text-gray-300">
						<span className="text-xl font-semibold">Sunrise:</span>{" "}
						{moment
							.utc(current.sys.sunrise, "X")
							.add(current.timezone, "seconds")
							.format("LT")}
					</p>
					<p className="text-lg font-medium dark:text-gray-300">
						<span className="text-xl font-semibold">Sunset:</span>{" "}
						{moment
							.utc(current.sys.sunset, "X")
							.add(current.timezone, "seconds")
							.format("LT")}
					</p>
					<p className="text-md font-medium dark:text-gray-300">
						Min Temp: {Math.round(current.main.temp_min)}&deg;C
					</p>
					<p className="text-md font-medium dark:text-gray-300">
						Max Temp: {Math.round(current.main.temp_max)}&deg;C
					</p>
					<p></p>
				</div>
			)}
		</section>
	);
};

export default Home;
